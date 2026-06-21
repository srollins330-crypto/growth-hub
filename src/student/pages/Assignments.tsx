import { Upload, FileBadge } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { assignments } from "../data/mock";

const Assignments = () => (
  <StudentLayout
    title="Assignments"
    subtitle="Submit, track, and learn from mentor feedback."
    actions={<Button size="sm"><Upload size={14} /> Upload assignment</Button>}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {assignments.map((a) => (
        <div key={a.name} className="flex flex-col rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileBadge size={16} />
            </div>
            <StatusBadge tone={a.status === "Approved" ? "success" : a.status === "Pending" ? "warning" : "info"}>
              {a.status}
            </StatusBadge>
          </div>
          <h3 className="mt-3 text-sm font-semibold">{a.name}</h3>
          <div className="mt-1 text-xs text-muted-foreground">Due {a.due}</div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg bg-secondary/60 p-2">
              <div className="text-[10px] text-muted-foreground">Grade</div>
              <div className="mt-0.5 font-semibold">{a.grade}</div>
            </div>
            <div className="rounded-lg bg-secondary/60 p-2">
              <div className="text-[10px] text-muted-foreground">Feedback</div>
              <div className="mt-0.5 line-clamp-1">{a.feedback}</div>
            </div>
          </div>
          <Button size="sm" className="mt-4 w-full" variant={a.status === "Approved" ? "outline" : "default"}>
            <Upload size={14} /> {a.status === "Approved" ? "View" : "Upload"}
          </Button>
        </div>
      ))}
    </div>
  </StudentLayout>
);

export default Assignments;
