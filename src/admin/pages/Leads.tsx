import { Filter, Plus, Search } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { leads, type LeadStage } from "../data/mock";

const STAGES: LeadStage[] = ["New", "Contacted", "Trial Done", "Converted"];

const STAGE_TONE: Record<LeadStage, string> = {
  New: "border-primary/30 bg-primary/5",
  Contacted: "border-amber-500/30 bg-amber-500/5",
  "Trial Done": "border-violet-500/30 bg-violet-500/5",
  Converted: "border-emerald-500/30 bg-emerald-500/5",
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
    <div className="mb-5 flex items-center gap-3">
      <div className="relative flex-1 max-w-sm">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search leads…" className="h-9 pl-9" />
      </div>
      <span className="text-xs text-muted-foreground">{leads.length} total leads</span>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {STAGES.map((stage) => {
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
                <div
                  key={l.id}
                  className="cursor-grab rounded-lg border border-border bg-card p-3 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{l.name}</div>
                    <span className="text-[10px] text-muted-foreground">{l.id}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{l.course}</div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>{l.source}</span>
                    <span>{l.createdAt}</span>
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
