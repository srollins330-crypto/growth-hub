import { Plus, BookOpen } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import StatusBadge from "../components/StatusBadge";
import { courses } from "../data/mock";

const Courses = () => (
  <AdminLayout
    title="Courses"
    subtitle="Create and manage your full course catalog."
    actions={<Button size="sm"><Plus size={14} /> New Course</Button>}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((c) => (
        <div key={c.id} className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <BookOpen size={18} />
            </div>
            <StatusBadge>{c.status}</StatusBadge>
          </div>
          <h3 className="mt-4 text-base font-semibold">{c.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{c.level} • {c.teacher}</p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-lg bg-secondary/50 p-3">
              <div className="text-muted-foreground">Students</div>
              <div className="mt-0.5 text-base font-semibold">{c.students}</div>
            </div>
            <div className="rounded-lg bg-secondary/50 p-3">
              <div className="text-muted-foreground">Price</div>
              <div className="mt-0.5 text-base font-semibold">{c.currency} {c.price}</div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">Edit</Button>
            <Button size="sm" className="flex-1">View</Button>
          </div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default Courses;
