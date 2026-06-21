import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { placement } from "../data/mock";

const Placements = () => (
  <StudentLayout
    title="Placements"
    subtitle="Your roadmap from prep to offer."
    actions={<Button size="sm">Apply to new role</Button>}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Resume status</div>
        <div className="mt-2"><StatusBadge tone="warning">{placement.resume}</StatusBadge></div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Portfolio status</div>
        <div className="mt-2"><StatusBadge tone="success">{placement.portfolio}</StatusBadge></div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Mock interview</div>
        <div className="mt-1 text-2xl font-bold">{placement.mockScore}/100</div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Applications</div>
        <div className="mt-1 text-2xl font-bold">{placement.applied}</div>
        <div className="text-xs text-muted-foreground">{placement.upcoming} interviews scheduled</div>
      </div>
    </div>

    <div className="mt-6 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Hiring pipeline</h3>
        <span className="text-sm font-semibold text-primary">{placement.readiness}% ready</span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-2 overflow-x-auto">
        {placement.pipeline.map((s, i) => (
          <div key={s.stage} className="flex flex-1 flex-col items-center min-w-[100px]">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${s.done ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
              {s.done ? "✓" : i + 1}
            </div>
            <div className="mt-2 text-center text-xs font-medium">{s.stage}</div>
            {i < placement.pipeline.length - 1 && (
              <div className={`absolute h-0.5 ${s.done ? "bg-primary" : "bg-secondary"}`} />
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6 rounded-xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <h3 className="text-sm font-semibold">Applications</h3>
      </div>
      <ul className="divide-y divide-border">
        {placement.companies.map((c) => (
          <li key={c.name} className="flex items-center justify-between px-5 py-3">
            <div>
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.role}</div>
            </div>
            <StatusBadge tone={c.status === "Shortlisted" ? "success" : c.status === "Interview" ? "info" : "warning"}>{c.status}</StatusBadge>
          </li>
        ))}
      </ul>
    </div>
  </StudentLayout>
);

export default Placements;
