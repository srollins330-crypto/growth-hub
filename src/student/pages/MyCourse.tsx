import { CheckCircle2, Circle, PlayCircle, Download } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { modules, student } from "../data/mock";

const MyCourse = () => (
  <StudentLayout
    title={student.course}
    subtitle={`${student.batch} · Mentor: Riya Kapoor`}
    actions={
      <>
        <Button variant="outline" size="sm"><Download size={14} /> Syllabus</Button>
        <Button size="sm"><PlayCircle size={14} /> Resume lesson</Button>
      </>
    }
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Overall progress</div>
        <div className="mt-1 text-3xl font-bold">65%</div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "65%" }} />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Hours invested</div>
        <div className="mt-1 text-3xl font-bold">142h</div>
        <div className="mt-3 text-xs text-muted-foreground">~8h / week avg</div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Mentor rating</div>
        <div className="mt-1 text-3xl font-bold">4.8 / 5</div>
        <div className="mt-3 text-xs text-muted-foreground">Across 18 reviews</div>
      </div>
    </div>

    <div className="mt-6 rounded-xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <h3 className="text-sm font-semibold">Module roadmap</h3>
      </div>
      <ul className="divide-y divide-border">
        {modules.map((m, i) => (
          <li key={m.name} className="flex items-center gap-4 px-5 py-4">
            <div className="text-xs font-mono text-muted-foreground w-6">{String(i + 1).padStart(2, "0")}</div>
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${m.pct === 100 ? "bg-emerald-500/10 text-emerald-500" : m.pct > 0 ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
              {m.pct === 100 ? <CheckCircle2 size={16} /> : <Circle size={16} />}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-medium">{m.name}</span>
                <StatusBadge tone={m.pct === 100 ? "success" : m.pct > 0 ? "info" : "neutral"}>{m.status}</StatusBadge>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${m.pct}%` }} />
                </div>
                <span className="w-10 text-right text-xs text-muted-foreground">{m.pct}%</span>
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">Last access {m.last} · Feedback: {m.feedback}</div>
            </div>
            <Button size="sm" variant={m.pct === 100 ? "outline" : "default"}>
              {m.pct === 100 ? "Review" : m.pct > 0 ? "Continue" : "Locked"}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  </StudentLayout>
);

export default MyCourse;
