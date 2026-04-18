import { Plus, BookOpen, CalendarPlus, Users } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AdminLayout from "../components/AdminLayout";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  overviewStats,
  revenueSeries,
  conversionSeries,
  leads,
  recentActivity,
} from "../data/mock";

const Dashboard = () => {
  return (
    <AdminLayout
      title="Dashboard"
      subtitle="Welcome back, Sara — here's what's happening at Slate Academy today."
      actions={
        <>
          <Button variant="outline" size="sm">
            <Users size={14} /> Add Student
          </Button>
          <Button variant="outline" size="sm">
            <BookOpen size={14} /> Create Course
          </Button>
          <Button size="sm">
            <CalendarPlus size={14} /> Schedule Class
          </Button>
        </>
      }
    >
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Charts */}
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
