import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import { Button } from "@/components/ui/button";
import { portfolioLinks, projects } from "../data/mock";

const Portfolio = () => (
  <StudentLayout
    title="Portfolio"
    subtitle="Curate, polish, and showcase your work to recruiters."
    actions={<Button size="sm">Sync portfolio</Button>}
  >
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6">
        <div className="text-xs text-muted-foreground">Portfolio score</div>
        <div className="mt-1 text-5xl font-bold">82<span className="text-xl text-muted-foreground">/100</span></div>
        <div className="mt-2 text-xs text-emerald-500">+6 this month</div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "82%" }} />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Add 2 case studies to reach 90+.</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
        <h3 className="text-sm font-semibold">Profile links</h3>
        <div className="mt-3 space-y-2">
          {portfolioLinks.map((l) => (
            <div key={l.label} className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-semibold">
                  {l.label[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{l.label}</div>
                  <div className="text-xs text-muted-foreground">{l.value}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {l.verified
                  ? <span className="inline-flex items-center gap-1 text-xs text-emerald-500"><CheckCircle2 size={12} /> Verified</span>
                  : <span className="inline-flex items-center gap-1 text-xs text-amber-500"><AlertCircle size={12} /> Pending</span>}
                <Button size="sm" variant="ghost"><ExternalLink size={14} /></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-6">
      <h3 className="text-sm font-semibold">Projects</h3>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.name} className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-[var(--shadow-card)]">
            <div className="h-32 bg-gradient-to-br from-primary/30 via-accent/20 to-card" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{p.name}</span>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{p.tag}</span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${p.pct}%` }} />
                </div>
                <span className="w-10 text-right text-xs text-muted-foreground">{p.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </StudentLayout>
);

export default Portfolio;
