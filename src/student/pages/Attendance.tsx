import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import StudentLayout from "../components/StudentLayout";
import { attendance } from "../data/mock";

const days = Array.from({ length: 30 }, (_, i) => {
  const r = i % 7;
  return { d: i + 1, status: r === 0 ? "leave" : r === 3 && i > 10 ? "absent" : "present" };
});

const Attendance = () => (
  <StudentLayout
    title="Attendance"
    subtitle={`Current ${attendance.current}% · Required ${attendance.required}%`}
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Current %</div>
        <div className="mt-1 text-3xl font-bold text-emerald-500">{attendance.current}%</div>
        <div className="mt-2 text-xs text-muted-foreground">{attendance.current - attendance.required}% above min</div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Present days</div>
        <div className="mt-1 text-3xl font-bold">{attendance.present}</div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Absent days</div>
        <div className="mt-1 text-3xl font-bold text-destructive">{attendance.absent}</div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="text-xs text-muted-foreground">Leave days</div>
        <div className="mt-1 text-3xl font-bold text-amber-500">{attendance.leave}</div>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
        <h3 className="text-sm font-semibold">Monthly attendance</h3>
        <p className="text-xs text-muted-foreground">Last 6 months</p>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={attendance.monthly} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="att2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} axisLine={false} domain={[50, 100]} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="v" stroke="hsl(var(--primary))" fill="url(#att2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">June calendar</h3>
        <p className="text-xs text-muted-foreground">Daily attendance</p>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {days.map((d) => (
            <div
              key={d.d}
              className={`flex h-9 items-center justify-center rounded-md text-[11px] font-medium ${
                d.status === "present" ? "bg-emerald-500/15 text-emerald-500"
                : d.status === "absent" ? "bg-destructive/15 text-destructive"
                : "bg-amber-500/15 text-amber-500"
              }`}
            >
              {d.d}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Present</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-destructive" /> Absent</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" /> Leave</span>
        </div>
      </div>
    </div>
  </StudentLayout>
);

export default Attendance;
