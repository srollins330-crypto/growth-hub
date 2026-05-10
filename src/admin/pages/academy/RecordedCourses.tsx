import { Plus, Video, Play, Users } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { recordedCourses } from "../../data/mock";

const RecordedCourses = () => (
  <AdminLayout
    title="Recorded Courses"
    subtitle="Modules, lessons, videos, quizzes, and progress tracking."
    actions={<Button size="sm"><Plus size={14} /> New Course</Button>}
  >
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {recordedCourses.map((c) => (
        <div key={c.id} className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card/80 backdrop-blur">
              <Play size={20} className="text-primary" />
            </div>
            <div className="absolute right-3 top-3 rounded-full bg-card/80 px-2 py-0.5 text-[10px] font-medium backdrop-blur">{c.duration}</div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{c.title}</h3>
              {c.certificate && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">Certificate</span>}
            </div>
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Video size={11} />{c.modules} modules</span>
              <span>{c.lessons} lessons</span>
              <span className="flex items-center gap-1"><Users size={11} />{c.students}</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-primary" style={{ width: "72%" }} />
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground">Avg progress 72%</div>
            <div className="mt-3 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">Edit</Button>
              <Button size="sm" className="flex-1">Manage</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default RecordedCourses;
