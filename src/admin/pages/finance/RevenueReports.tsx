import { Download } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import AdminLayout from "../../components/AdminLayout";
import StatCard from "../../components/StatCard";
import { Button } from "@/components/ui/button";
import { revenueSeries, coursePerformance, coupons } from "../../data/mock";

const RevenueReports = () => (
  <AdminLayout
    title="Revenue Reports"
    subtitle="Revenue trends, course breakdowns, and coupon impact."
    actions={<Button variant="outline" size="sm"><Download size={14} /> Export</Button>}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Revenue (YTD)" value="₹4.2 Cr" delta="+24%" trend="up" />
      <StatCard label="MRR" value="₹48.2L" delta="+12%" trend="up" />
      <StatCard label="ARPU" value="₹32,800" delta="+8%" trend="up" />
      <StatCard label="Refunds" value="₹2.1L" delta="-18%" trend="up" />
    </div>

    <div className="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-semibold">Revenue Trend</h3>
      <p className="text-xs text-muted-foreground">Last 12 months</p>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueSeries} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revR" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#revR)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">Revenue by Course</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={coursePerformance.map((c) => ({ name: c.course, value: c.students * 25 }))} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">Coupon Usage</h3>
        <ul className="mt-4 divide-y divide-border">
          {coupons.map((c) => (
            <li key={c.id} className="flex items-center justify-between py-2.5">
              <code className="rounded bg-secondary px-2 py-0.5 font-mono text-xs">{c.code}</code>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{c.uses} uses</span>
                <span className="font-semibold text-foreground">{c.discount}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </AdminLayout>
);

export default RevenueReports;
