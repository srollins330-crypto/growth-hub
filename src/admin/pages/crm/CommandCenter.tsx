import { Link } from "react-router-dom";
import AdminLayout from "@/admin/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, Flame, Sparkles, Target, TrendingUp, AlertTriangle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { counsellorKpis, counsellorMe, crmLeads, branchPerformance, counsellorLeaderboard } from "@/admin/data/crm";

const toneMap: Record<string,string> = {
  red: "crm-tone-red", orange: "crm-tone-orange", blue: "crm-tone-blue", green: "crm-tone-green",
};

const CommandCenter = () => {
  const todayFollowUps = crmLeads.filter(l => l.nextFollowUp.at.startsWith("2026-06-23"));
  const overdue = crmLeads.filter(l => new Date(l.nextFollowUp.at) < new Date("2026-06-23"));
  const hot = [...crmLeads].sort((a,b)=>b.probability-a.probability).slice(0,4);

  return (
    <div className="crm-scope">
      <AdminLayout
        title={`Good morning, ${counsellorMe.name.split(" ")[0]} 👋`}
        subtitle={`${counsellorMe.role} · ${counsellorMe.branch} · Tuesday, June 23`}
        actions={
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/admin/leads">Open pipeline</Link>
          </Button>
        }
      >
        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {counsellorKpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-border bg-card p-4">
              <div className={cn("inline-block rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase", toneMap[k.tone])}>{k.label}</div>
              <div className="mt-2 text-2xl font-bold tracking-tight">{k.value}</div>
              <div className="text-[11px] text-muted-foreground">Target: {k.target}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          {/* Today's follow-ups */}
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border p-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <h3 className="text-sm font-bold">Today's Follow-ups</h3>
                  <Badge variant="secondary" className="text-[10px]">{todayFollowUps.length}</Badge>
                </div>
                <Link to="/admin/crm/follow-ups" className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                  View all <ChevronRight size={12} />
                </Link>
              </div>
              <ul className="divide-y divide-border">
                {todayFollowUps.map((l) => (
                  <li key={l.id} className="flex items-center gap-3 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {l.name.split(" ").map(p=>p[0]).join("").slice(0,2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link to={`/admin/leads/${l.id}`} className="block text-sm font-semibold hover:text-primary">{l.name}</Link>
                      <div className="truncate text-xs text-muted-foreground">{l.nextFollowUp.purpose} · {l.course}</div>
                    </div>
                    <span className={cn("hidden rounded-md px-2 py-1 text-[10px] font-bold uppercase md:inline", l.nextFollowUp.priority === "High" ? "crm-tone-red" : "crm-tone-blue")}>
                      {l.nextFollowUp.priority}
                    </span>
                    <span className="hidden text-xs text-muted-foreground md:inline">
                      {new Date(l.nextFollowUp.at).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}
                    </span>
                    <Button size="icon" variant="outline" className="h-9 w-9"><Phone size={14}/></Button>
                    <Button size="icon" variant="outline" className="h-9 w-9"><MessageCircle size={14}/></Button>
                    <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link to={`/admin/leads/${l.id}`}>Open</Link>
                    </Button>
                  </li>
                ))}
                {todayFollowUps.length === 0 && <li className="p-6 text-center text-sm text-muted-foreground">All clear for today 🎉</li>}
              </ul>
            </div>

            {/* Overdue */}
            <div className="mt-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border p-4">
                <AlertTriangle size={16} className="crm-tone-red rounded p-0.5" />
                <h3 className="text-sm font-bold">Overdue Follow-ups</h3>
                <Badge className="crm-tone-red border-0 text-[10px]">{overdue.length}</Badge>
              </div>
              <ul className="divide-y divide-border">
                {overdue.map((l) => (
                  <li key={l.id} className="flex items-center gap-3 p-4">
                    <div className="h-2 w-2 rounded-full" style={{background:"hsl(0 84% 55%)"}} />
                    <Link to={`/admin/leads/${l.id}`} className="text-sm font-semibold hover:text-primary">{l.name}</Link>
                    <span className="text-xs text-muted-foreground">{l.nextFollowUp.purpose}</span>
                    <span className="ml-auto text-xs font-semibold text-destructive">
                      {Math.abs(Math.ceil((new Date(l.nextFollowUp.at).getTime() - new Date("2026-06-23").getTime())/86400000))}d overdue
                    </span>
                  </li>
                ))}
                {overdue.length === 0 && <li className="p-6 text-center text-sm text-muted-foreground">Nothing overdue.</li>}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2">
                <Flame size={16} className="crm-tone-orange rounded p-0.5" />
                <h3 className="text-sm font-bold">Hot Leads</h3>
              </div>
              <ul className="mt-3 space-y-2">
                {hot.map((l) => (
                  <li key={l.id}>
                    <Link to={`/admin/leads/${l.id}`} className="flex items-center justify-between rounded-lg border border-border p-3 hover:border-primary/50">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{l.name}</div>
                        <div className="truncate text-[11px] text-muted-foreground">{l.course}</div>
                      </div>
                      <span className="rounded-md bg-primary/10 px-2 py-1 text-[11px] font-bold text-primary">{l.probability}%</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2">
                <Target size={16} className="text-primary" />
                <h3 className="text-sm font-bold">Admission Funnel</h3>
              </div>
              <div className="mt-3 space-y-2 text-xs">
                {[
                  { s: "New", v: 412, pct: 100 },
                  { s: "Contacted", v: 318, pct: 77 },
                  { s: "Demo", v: 184, pct: 45 },
                  { s: "Negotiation", v: 92, pct: 22 },
                  { s: "Admission", v: 68, pct: 16 },
                ].map((r) => (
                  <div key={r.s}>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{r.s}</span>
                      <span className="font-semibold">{r.v}</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{width:`${r.pct}%`}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                <h3 className="text-sm font-bold">Smart Reminders</h3>
              </div>
              <ul className="mt-3 space-y-2 text-xs">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"/><span><b>5 PM</b> · Aarav Mehta — EMI discussion (in 6h)</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"/><span><b>6:30 PM</b> · Sara Khan — Demo reminder (in 7h)</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive"/><span>Vikram Iyer — missed follow-up</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Super admin section */}
        <div className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            <TrendingUp size={14}/> Super Admin Overview
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="border-b border-border p-4 text-sm font-bold">Branch Performance</div>
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-[11px] uppercase text-muted-foreground">
                    <tr><th className="px-4 py-2 text-left">Branch</th><th className="px-4 py-2 text-right">Leads</th><th className="px-4 py-2 text-right">Admissions</th><th className="px-4 py-2 text-right">Conv.</th><th className="px-4 py-2 text-right">Revenue</th></tr>
                  </thead>
                  <tbody>
                    {branchPerformance.map((b) => (
                      <tr key={b.branch} className="border-t border-border">
                        <td className="px-4 py-2.5 font-semibold">{b.branch}</td>
                        <td className="px-4 py-2.5 text-right">{b.leads}</td>
                        <td className="px-4 py-2.5 text-right">{b.admissions}</td>
                        <td className="px-4 py-2.5 text-right text-primary font-semibold">{b.conversion}</td>
                        <td className="px-4 py-2.5 text-right">{b.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="border-b border-border p-4 text-sm font-bold">Counsellor Leaderboard</div>
                <ul className="divide-y divide-border">
                  {counsellorLeaderboard.map((c, i) => (
                    <li key={c.name} className="flex items-center gap-3 p-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">{i+1}</span>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{c.name}</div>
                        <div className="text-[11px] text-muted-foreground">{c.branch}</div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-bold">{c.admissions} adm.</div>
                        <div className="text-muted-foreground">{c.revenue} · {c.conv}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default CommandCenter;
