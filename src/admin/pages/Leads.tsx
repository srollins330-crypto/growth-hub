import { Link } from "react-router-dom";
import { Filter, Plus, Search, MessageCircle, Phone, LayoutGrid, List as ListIcon } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { crmLeads, type LeadStage } from "../data/crm";
import { cn } from "@/lib/utils";

const STAGES: LeadStage[] = [
  "New Lead","Contacted","Interested","Demo Booked","Demo Attended","Negotiation","Admission","Lost",
];

const STAGE_TONE: Record<LeadStage, string> = {
  "New Lead": "border-l-slate-400",
  "Contacted": "border-l-blue-500",
  "Interested": "border-l-sky-500",
  "Demo Booked": "border-l-violet-500",
  "Demo Attended": "border-l-fuchsia-500",
  "Negotiation": "border-l-orange-500",
  "Admission": "border-l-emerald-500",
  "Lost": "border-l-red-500",
};

const Leads = () => (
  <div className="crm-scope">
    <AdminLayout
      title="Leads Pipeline"
      subtitle="Track every lead from first touch to admission."
      actions={
        <>
          <Button variant="outline" size="sm" className="gap-1"><Filter size={14} /> Filter</Button>
          <Button size="sm" className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90"><Plus size={14} /> New Lead</Button>
        </>
      }
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative max-w-sm flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search leads by name, phone, course…" className="h-9 pl-9" />
        </div>
        <span className="text-xs text-muted-foreground">{crmLeads.length} active leads</span>
        <div className="ml-auto flex gap-1 rounded-lg border border-border p-0.5">
          <Button size="sm" variant="ghost" className="h-7 gap-1 bg-secondary text-foreground"><LayoutGrid size={12}/> Board</Button>
          <Button size="sm" variant="ghost" className="h-7 gap-1"><ListIcon size={12}/> List</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {STAGES.map((stage) => {
          const items = crmLeads.filter((l) => l.stage === stage);
          return (
            <div key={stage} className="rounded-xl border border-border bg-card/40 p-3">
              <div className="mb-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold">{stage}</h3>
                  <span className="rounded-full bg-card px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    {items.length}
                  </span>
                </div>
                <button className="text-muted-foreground hover:text-foreground"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {items.map((l) => (
                  <Link
                    to={`/admin/leads/${l.id}`}
                    key={l.id}
                    className={cn(
                      "block rounded-lg border border-l-4 border-border bg-card p-3 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md",
                      STAGE_TONE[stage],
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">{l.name}</div>
                      <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">{l.probability}%</span>
                    </div>
                    <div className="mt-1 truncate text-xs text-muted-foreground">{l.course}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px]">
                      <span className="rounded bg-secondary px-1.5 py-0.5 font-medium">{l.source}</span>
                      <span className="text-muted-foreground">· {l.counsellor}</span>
                    </div>
                    {l.objections.length > 0 && (
                      <div className="mt-2 flex gap-1">
                        {l.objections.slice(0,2).map(o => (
                          <span key={o} className="crm-tone-red rounded px-1.5 py-0.5 text-[9px] font-bold uppercase">{o}</span>
                        ))}
                      </div>
                    )}
                    <div className="mt-3 flex items-center justify-between border-t border-border pt-2">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span className="rounded p-1 hover:bg-secondary hover:text-foreground"><Phone size={12} /></span>
                        <span className="rounded p-1 hover:bg-secondary hover:text-foreground"><MessageCircle size={12} /></span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{l.daysOld}d old</span>
                    </div>
                  </Link>
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
  </div>
);

export default Leads;
