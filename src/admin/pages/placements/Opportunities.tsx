import { Plus, Briefcase, MapPin } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { opportunities } from "../../data/mock";

const Opportunities = () => (
  <AdminLayout
    title="Opportunities"
    subtitle="Open roles and internships from hiring partners."
    actions={<Button size="sm"><Plus size={14} /> Post Role</Button>}
  >
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      {opportunities.map((o) => (
        <div key={o.id} className="rounded-xl border border-border bg-card p-5 hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold">{o.role}</h3>
              <p className="text-xs text-muted-foreground">{o.company}</p>
            </div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{o.type}</span>
          </div>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin size={11} />{o.location}</span>
            <span className="flex items-center gap-1"><Briefcase size={11} />{o.applicants} applicants</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
            <span className="text-[11px] text-muted-foreground">Posted {o.posted}</span>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default Opportunities;
