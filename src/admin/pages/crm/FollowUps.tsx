import { Plus, Filter } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import DataTable, { StatusBadge } from "../../components/DataTable";
import { Button } from "@/components/ui/button";
import { followUps } from "../../data/mock";

const FollowUps = () => (
  <AdminLayout
    title="Follow-ups"
    subtitle="Reminders and tasks across the sales team."
    actions={
      <>
        <Button variant="outline" size="sm"><Filter size={14} /> Filter</Button>
        <Button size="sm"><Plus size={14} /> New Task</Button>
      </>
    }
  >
    <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
      {[
        { label: "Due Today", value: "8" },
        { label: "Overdue", value: "3" },
        { label: "This Week", value: "24" },
        { label: "Completed", value: "142" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-4">
          <div className="text-xs text-muted-foreground">{s.label}</div>
          <div className="mt-1 text-xl font-bold">{s.value}</div>
        </div>
      ))}
    </div>
    <DataTable
      rows={followUps}
      columns={[
        { key: "lead", label: "Lead", render: (r) => <span className="font-medium">{r.lead}</span> },
        { key: "task", label: "Task" },
        { key: "due", label: "Due" },
        { key: "owner", label: "Owner" },
        { key: "priority", label: "Priority", render: (r) => (
          <StatusBadge tone={r.priority === "High" ? "danger" : r.priority === "Medium" ? "warning" : "neutral"}>{r.priority}</StatusBadge>
        ) },
      ]}
    />
  </AdminLayout>
);

export default FollowUps;
