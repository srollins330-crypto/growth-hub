import { Plus, Star } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { teachers } from "../data/mock";

const Teachers = () => (
  <AdminLayout
    title="Teachers"
    subtitle="Manage faculty, assignments, and availability."
    actions={<Button size="sm"><Plus size={14} /> Add Teacher</Button>}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {teachers.map((t) => (
        <div key={t.id} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-base font-semibold">
              {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.subject}</div>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium">
              <Star size={12} className="fill-amber-400 text-amber-400" /> {t.rating}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-center">
            <div className="rounded-lg bg-secondary/50 p-3">
              <div className="text-[11px] text-muted-foreground">Students</div>
              <div className="text-base font-semibold">{t.students}</div>
            </div>
            <div className="rounded-lg bg-secondary/50 p-3">
              <div className="text-[11px] text-muted-foreground">Classes / wk</div>
              <div className="text-base font-semibold">{t.classes}</div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">Schedule</Button>
            <Button size="sm" className="flex-1">View</Button>
          </div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default Teachers;
