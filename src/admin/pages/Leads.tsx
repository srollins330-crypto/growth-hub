import { Filter, Plus, Search, MessageSquare, Phone } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { leads, LEAD_STAGES, type LeadStage } from "../data/mock";

const STAGE_TONE: Record<LeadStage, string> = {
  "New Lead": "border-primary/30 bg-primary/5",
  Contacted: "border-amber-500/30 bg-amber-500/5",
  Interested: "border-sky-500/30 bg-sky-500/5",
  "Trial Booked": "border-violet-500/30 bg-violet-500/5",
  "Trial Completed": "border-fuchsia-500/30 bg-fuchsia-500/5",
  Negotiation: "border-orange-500/30 bg-orange-500/5",
  Converted: "border-emerald-500/30 bg-emerald-500/5",
  Lost: "border-destructive/30 bg-destructive/5",
};

const Leads = () => (
  <AdminLayout
    title="Leads Pipeline"
    subtitle="Track every lead from first touch to enrollment."
    actions={
      <>
        <Button variant="outline" size="sm"><Filter size={14} /> Filter</Button>
        <Button size="sm"><Plus size={14} /> New Lead</Button>
      </>
    }
  >
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <div className="relative flex-1 max-w-sm">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search leads…" className="h-9 pl-9" />
      </div>
      <span className="text-xs text-muted-foreground">{leads.length} total leads</span>
      <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
        <span>Owners:</span>
        {["Riya S.", "Arjun M.", "Neha P."].map((o) => (
          <span key={o} className="rounded-full border border-border bg-card px-2 py-0.5">{o}</span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {LEAD_STAGES.map((stage) => {
        const items = leads.filter((l) => l.stage === stage);
        return (
          <div key={stage} className={`rounded-xl border ${STAGE_TONE[stage]} p-3`}>
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold">{stage}</h3>
                <span className="rounded-full bg-card px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {items.length}
                </span>
              </div>
              <button className="text-muted-foreground hover:text-foreground"><Plus size={14} /></button>
            </div>
            <div className="flex flex-col gap-2">
              {items.map((l) => (
                <div key={l.id} className="cursor-grab rounded-lg border border-border bg-card p-3 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{l.name}</div>
                    <span className="text-[10px] text-muted-foreground">{l.id}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{l.course}</div>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="rounded-full bg-secondary px-1.5 py-0.5">{l.source}</span>
                    <span>· {l.owner}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-2">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <button className="rounded p-1 hover:bg-secondary" aria-label="Call"><Phone size={12} /></button>
                      <button className="rounded p-1 hover:bg-secondary" aria-label="WhatsApp"><MessageSquare size={12} /></button>
                    </div>
                    <span className="text-[11px] text-muted-foreground">{l.createdAt}</span>
                  </div>
                </div>
              ))}
              {items.length === 0 && (
                <div className="rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground">
                  No leads here
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </AdminLayout>
);

export default Leads;
