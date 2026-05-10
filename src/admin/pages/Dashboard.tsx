import { Plus, BookOpen, CalendarPlus, Users, GraduationCap, FileText, Layout } from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis, Cell,
} from "recharts";
import AdminLayout from "../components/AdminLayout";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  overviewStats, revenueSeries, conversionSeries, leads, recentActivity,
  leadSources, coursePerformance, classes, followUps, payments,
} from "../data/mock";

const SOURCE_COLORS = ["hsl(var(--primary))", "#10b981", "#f59e0b", "#8b5cf6", "#06b6d4", "#ec4899"];

const Dashboard = () => {
  return (
    <AdminLayout
      title="Dashboard"
      subtitle="Welcome back, Sara — here's what's happening at Slate Academy today."
      actions={
        <>
          <Button variant="outline" size="sm"><Users size={14} /> Add Student</Button>
          <Button variant="outline" size="sm"><GraduationCap size={14} /> Add Mentor</Button>
          <Button variant="outline" size="sm"><BookOpen size={14} /> Create Course</Button>
          <Button variant="outline" size="sm"><CalendarPlus size={14} /> Schedule Live Class</Button>
          <Button variant="outline" size="sm"><FileText size={14} /> Publish Blog</Button>
          <Button size="sm"><Layout size={14} /> Create Landing Page</Button>
        </>
      }
    >
      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Revenue + Funnel */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Revenue & Students</h3>
              <p className="text-xs text-muted-foreground">Last 12 months</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" />Revenue</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Students</span>
            </div>
          </div>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueSeries} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="stu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(160 70% 45%)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="hsl(160 70% 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#rev)" strokeWidth={2} />
                <Area type="monotone" dataKey="students" stroke="hsl(160 70% 45%)" fill="url(#stu)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Conversion Funnel</h3>
          <p className="text-xs text-muted-foreground">Visitor → Paid</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionSeries} layout="vertical" margin={{ left: 0, right: 10 }}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="stage" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} width={75} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Lead Sources + Course Performance + Placement */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Lead Source Analytics</h3>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadSources} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="source" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {leadSources.map((_, i) => <Cell key={i} fill={SOURCE_COLORS[i % SOURCE_COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <h3 className="text-sm font-semibold">Course Performance</h3>
              <p className="text-xs text-muted-foreground">Enrollment & completion</p>
            </div>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <ul className="divide-y divide-border">
            {coursePerformance.map((c) => (
              <li key={c.course} className="flex items-center gap-4 px-5 py-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium truncate">{c.course}</span>
                    <span className="text-xs text-muted-foreground">{c.students} students · ★ {c.rating}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${c.completion}%` }} />
                    </div>
                    <span className="w-10 text-right text-xs text-muted-foreground">{c.completion}%</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upcoming + Follow-ups + Recent Payments */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold">Upcoming Live Classes</h3>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <ul className="divide-y divide-border">
            {classes.slice(0, 4).map((c) => (
              <li key={c.id} className="px-5 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{c.course}</span>
                  <span className="text-[11px] text-muted-foreground">{c.platform}</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{c.teacher}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">{c.date} · {c.time} · {c.students} students</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold">Pending Follow-ups</h3>
            <Button variant="ghost" size="sm"><Plus size={14} /></Button>
          </div>
          <ul className="divide-y divide-border">
            {followUps.slice(0, 4).map((f) => (
              <li key={f.id} className="px-5 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium truncate">{f.lead}</span>
                  <StatusBadge tone={f.priority === "High" ? "danger" : f.priority === "Medium" ? "warning" : "neutral"}>{f.priority}</StatusBadge>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{f.task}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">{f.due} · {f.owner}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold">Recent Payments</h3>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <ul className="divide-y divide-border">
            {payments.slice(0, 4).map((p) => (
              <li key={p.id} className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{p.student}</div>
                  <div className="text-xs text-muted-foreground truncate">{p.course} · {p.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{p.currency}{p.amount.toLocaleString()}</div>
                  <StatusBadge>{p.status}</StatusBadge>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent leads + activity */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold">Recent Leads</h3>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="px-5 py-2 text-left font-medium">Name</th>
                  <th className="px-5 py-2 text-left font-medium">Course</th>
                  <th className="px-5 py-2 text-left font-medium">Source</th>
                  <th className="px-5 py-2 text-left font-medium">Stage</th>
                  <th className="px-5 py-2 text-left font-medium">Created</th>
                </tr>
              </thead>
              <tbody>
                {leads.slice(0, 5).map((l) => (
                  <tr key={l.id} className="border-b border-border last:border-0 hover:bg-secondary/40">
                    <td className="px-5 py-3 font-medium">{l.name}</td>
                    <td className="px-5 py-3 text-muted-foreground">{l.course}</td>
                    <td className="px-5 py-3 text-muted-foreground">{l.source}</td>
                    <td className="px-5 py-3"><StatusBadge>{l.stage}</StatusBadge></td>
                    <td className="px-5 py-3 text-muted-foreground">{l.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold">Activity</h3>
            <Button variant="ghost" size="sm"><Plus size={14} /></Button>
          </div>
          <ul className="divide-y divide-border">
            {recentActivity.map((a, i) => (
              <li key={i} className="flex items-start gap-3 px-5 py-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{a.who}</span>{" "}
                    <span className="text-muted-foreground">{a.what}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">{a.when}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
