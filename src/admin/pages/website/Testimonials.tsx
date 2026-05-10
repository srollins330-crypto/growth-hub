import { Plus, Star } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { testimonialsList } from "../../data/mock";

const Testimonials = () => (
  <AdminLayout
    title="Testimonials"
    subtitle="Curate student and graduate testimonials."
    actions={<Button size="sm"><Plus size={14} /> New Testimonial</Button>}
  >
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {testimonialsList.map((t) => (
        <div key={t.id} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
            {t.featured && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">Featured</span>}
          </div>
          <div className="mt-3 flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "" : "text-muted-foreground"} />
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground line-clamp-3">"Slate Academy completely changed my career trajectory in just a few months."</p>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default Testimonials;
