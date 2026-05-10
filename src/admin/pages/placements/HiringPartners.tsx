import { Plus, Building2 } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import DataTable from "../../components/DataTable";
import { Button } from "@/components/ui/button";
import { hiringPartners } from "../../data/mock";

const HiringPartners = () => (
  <AdminLayout
    title="Hiring Partners"
    subtitle="Companies actively hiring Slate Academy graduates."
    actions={<Button size="sm"><Plus size={14} /> Add Partner</Button>}
  >
    <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
      {[
        { label: "Total Partners", value: "84" },
        { label: "Premier Partners", value: "32" },
        { label: "Open Roles", value: "142" },
        { label: "Total Hires", value: "428" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-4">
          <div className="text-xs text-muted-foreground">{s.label}</div>
          <div className="mt-1 text-xl font-bold">{s.value}</div>
        </div>
      ))}
    </div>
    <DataTable
      rows={hiringPartners}
      columns={[
        { key: "company", label: "Company", render: (r) => (
          <div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary"><Building2 size={14} /></div><span className="font-medium">{r.company}</span></div>
        ) },
        { key: "industry", label: "Industry" },
        { key: "openRoles", label: "Open Roles" },
        { key: "hires", label: "Total Hires" },
        { key: "tier", label: "Tier", render: (r) => (
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${r.tier === "Premier" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>{r.tier}</span>
        ) },
      ]}
    />
  </AdminLayout>
);

export default HiringPartners;
