import {
  BookOpen, CalendarCheck, Trophy, Briefcase, CreditCard, Clock,
  Award, Upload, Receipt, Video, Bell, Bot, MessageCircle, Star,
  CheckCircle2, Circle, ArrowRight, Sparkles, Flame,
} from "lucide-react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
  RadialBar, RadialBarChart, PolarAngleAxis,
} from "recharts";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  student, kpis, modules, attendance, assignments, placement, payments,
  notifications, mentor, badges, points,
} from "../data/mock";

const KpiCard = ({ icon: Icon, label, value, sub, tone = "primary" }: any) => (
  <div className="rounded-xl border border-border bg-card p-5 transition-all hover:shadow-[var(--shadow-card)]">
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${tone === "primary" ? "bg-primary/10 text-primary" : tone === "accent" ? "bg-accent/10 text-accent" : "bg-emerald-500/10 text-emerald-500"}`}>
        <Icon size={15} />
      </div>
    </div>
    <div className="mt-3 text-2xl font-bold tracking-tight">{value}</div>
    {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
  </div>
);

const Ring = ({ value, label, color = "hsl(var(--primary))" }: { value: number; label: string; color?: string }) => (
  <div className="relative h-32 w-32">
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart innerRadius="75%" outerRadius="100%" data={[{ value }]} startAngle={90} endAngle={-270}>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius={20} fill={color} background={{ fill: "hsl(var(--secondary))" }} />
      </RadialBarChart>
    </ResponsiveContainer>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-2xl font-bold">{value}%</span>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <StudentLayout
      title={`Welcome back, ${student.firstName} 👋`}
      subtitle="Pick up where you left off — Design Systems Deep Dive starts Monday."
      actions={
        <>
          <Button variant="outline" size="sm"><Award size={14} /> Certificate</Button>
          <Button variant="outline" size="sm"><Upload size={14} /> Upload</Button>
          <Button variant="outline" size="sm"><Receipt size={14} /> Receipt</Button>
          <Button size="sm"><Video size={14} /> Book Mentor</Button>
        </>
      }
    >
      {/* KPI grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <KpiCard icon={BookOpen} label="Course Progress" value="65%" sub="7 of 11 modules" />
        <KpiCard icon={CalendarCheck} label="Attendance" value="92%" sub="Min required 75%" tone="success" />
        <KpiCard icon={Trophy} label="Portfolio Projects" value={`${kpis.projects.done}/${kpis.projects.total}`} sub="3 in progress" tone="accent" />
        <KpiCard icon={Briefcase} label="Placement Readiness" value="78%" sub="3 interviews lined up" />
        <KpiCard icon={CreditCard} label="Fees Pending" value="₹10,000" sub="Due 10 Jul" tone="accent" />
        <KpiCard icon={Clock} label="Next Class" value="Mon 7 PM" sub="Design Systems" tone="success" />
      </div>

      {/* Hero: progress rings + roadmap snapshot + streak */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Your learning snapshot</h3>
              <p className="text-xs text-muted-foreground">Live progress across the program</p>
            </div>
            <Button variant="ghost" size="sm">View roadmap <ArrowRight size={14} /></Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-around gap-6">
            <Ring value={kpis.progress} label="Course" />
            <Ring value={kpis.attendance} label="Attendance" color="hsl(160 70% 45%)" />
            <Ring value={kpis.placement} label="Placement" color="hsl(260 85% 65%)" />
            <Ring value={70} label="Portfolio" color="hsl(38 92% 55%)" />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <Flame size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold">12-day streak</div>
              <div className="text-xs text-muted-foreground">Keep it going! 🔥</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1.5">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className={`h-6 rounded-md ${i < 12 ? "bg-primary/70" : "bg-secondary"}`} />
            ))}
          </div>
          <div className="mt-5 rounded-lg border border-border bg-secondary/40 p-3">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Bot size={14} className="text-primary" /> Slate AI tip
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Submit your wireframe by Friday to stay on track for placements.
            </p>
          </div>
          <Button size="sm" className="mt-4 w-full">
            <Sparkles size={14} /> Resume learning
          </Button>
        </div>
      </div>

      {/* Roadmap + attendance chart */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <h3 className="text-sm font-semibold">Academic roadmap</h3>
              <p className="text-xs text-muted-foreground">11 modules · mentor-graded</p>
            </div>
            <Button variant="ghost" size="sm">All modules</Button>
          </div>
          <ul className="divide-y divide-border">
            {modules.slice(0, 7).map((m) => (
              <li key={m.name} className="flex items-center gap-4 px-5 py-3">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${m.pct === 100 ? "bg-emerald-500/10 text-emerald-500" : m.pct > 0 ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>
                  {m.pct === 100 ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium">{m.name}</span>
                    <StatusBadge tone={m.pct === 100 ? "success" : m.pct > 0 ? "info" : "neutral"}>{m.status}</StatusBadge>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${m.pct}%` }} />
                    </div>
                    <span className="w-10 text-right text-xs text-muted-foreground">{m.pct}%</span>
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">Last access {m.last} · {m.feedback}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Attendance trend</h3>
              <p className="text-xs text-muted-foreground">Last 6 months</p>
            </div>
            <span className="text-xs font-semibold text-emerald-500">{attendance.current}%</span>
          </div>
          <div className="mt-4 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendance.monthly} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="att" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(160 70% 45%)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(160 70% 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} domain={[60, 100]} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Area type="monotone" dataKey="v" stroke="hsl(160 70% 45%)" fill="url(#att)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-lg bg-secondary/60 p-2">
              <div className="font-semibold">{attendance.present}</div>
              <div className="text-[10px] text-muted-foreground">Present</div>
            </div>
            <div className="rounded-lg bg-secondary/60 p-2">
              <div className="font-semibold">{attendance.absent}</div>
              <div className="text-[10px] text-muted-foreground">Absent</div>
            </div>
            <div className="rounded-lg bg-secondary/60 p-2">
              <div className="font-semibold">{attendance.leave}</div>
              <div className="text-[10px] text-muted-foreground">Leave</div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignments + Placement pipeline + Mentor */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold">Upcoming assignments</h3>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <ul className="divide-y divide-border">
            {assignments.slice(0, 4).map((a) => (
              <li key={a.name} className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{a.name}</div>
                  <div className="text-xs text-muted-foreground">Due {a.due} · Grade {a.grade}</div>
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge tone={a.status === "Approved" ? "success" : a.status === "Pending" ? "warning" : "info"}>{a.status}</StatusBadge>
                  <Button size="sm" variant="outline"><Upload size={12} /></Button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">RK</div>
            <div>
              <div className="text-sm font-semibold">{mentor.name}</div>
              <div className="text-xs text-muted-foreground">{mentor.title}</div>
              <div className="text-[11px] text-muted-foreground">{mentor.exp} experience</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button size="sm" variant="outline"><MessageCircle size={14} /> Chat</Button>
            <Button size="sm"><Video size={14} /> Book session</Button>
          </div>
          <div className="mt-5 border-t border-border pt-4">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold">Placement pipeline</h4>
              <span className="text-xs font-semibold text-primary">{placement.readiness}%</span>
            </div>
            <ol className="space-y-2">
              {placement.pipeline.map((s, i) => (
                <li key={s.stage} className="flex items-center gap-2 text-xs">
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${s.done ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                    {s.done ? "✓" : i + 1}
                  </div>
                  <span className={s.done ? "" : "text-muted-foreground"}>{s.stage}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Notifications + Badges */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2">
              <Bell size={14} className="text-primary" />
              <h3 className="text-sm font-semibold">Notifications</h3>
            </div>
            <Button variant="ghost" size="sm">Mark all read</Button>
          </div>
          <ul className="divide-y divide-border">
            {notifications.map((n, i) => (
              <li key={i} className="flex items-start gap-3 px-5 py-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{n.type}:</span>{" "}
                    <span className="text-muted-foreground">{n.text}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">{n.time} ago</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-gradient-to-br from-accent/10 via-card to-primary/10 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star size={14} className="text-accent" />
              <h3 className="text-sm font-semibold">Achievements</h3>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">Rank #{points.rank}/{points.total}</span>
          </div>
          <div className="mt-3 text-3xl font-bold">{points.value.toLocaleString()} <span className="text-xs font-medium text-muted-foreground">pts</span></div>
          <div className="mt-4 space-y-2">
            {badges.map((b) => (
              <div key={b.name} className="flex items-center justify-between rounded-lg border border-border bg-card/60 px-3 py-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-md ${b.earned ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}`}>
                    <Award size={14} />
                  </div>
                  {b.name}
                </div>
                {b.earned
                  ? <StatusBadge tone="success">Earned</StatusBadge>
                  : <StatusBadge tone="neutral">Locked</StatusBadge>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Dashboard;
