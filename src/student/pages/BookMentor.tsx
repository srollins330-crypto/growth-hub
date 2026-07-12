import { useState } from "react";
import { Video, CalendarDays, Clock, CheckCircle2, Star, MessageSquare } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { mentor } from "../data/mock";

const sessionTypes = [
  { id: "portfolio", label: "Portfolio Review", dur: "30 min", desc: "Get detailed feedback on your latest project." },
  { id: "career", label: "Career Guidance", dur: "45 min", desc: "Roadmap for placements, roles and salary bands." },
  { id: "doubt", label: "Doubt Clearing", dur: "20 min", desc: "One-on-one help on the current module." },
  { id: "mock", label: "Mock Interview", dur: "60 min", desc: "Simulated design interview with rubric feedback." },
];

const days = [
  { d: "Mon", n: "14" }, { d: "Tue", n: "15" }, { d: "Wed", n: "16" },
  { d: "Thu", n: "17" }, { d: "Fri", n: "18" }, { d: "Sat", n: "19" }, { d: "Sun", n: "20" },
];
const slots = ["10:00 AM", "11:30 AM", "1:00 PM", "3:30 PM", "5:00 PM", "6:30 PM", "8:00 PM"];

const upcoming = [
  { title: "Portfolio Review · Riya Kapoor", when: "Sat 19 Jul · 5:00 PM", status: "Confirmed" },
  { title: "Doubt Clearing · Design Systems", when: "Mon 21 Jul · 7:00 PM", status: "Pending" },
];

const BookMentor = () => {
  const [type, setType] = useState("portfolio");
  const [day, setDay] = useState("16");
  const [slot, setSlot] = useState("5:00 PM");

  return (
    <StudentLayout
      title="Book Mentor Session"
      subtitle="1-on-1 sessions with industry mentors — free for enrolled students."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold">1. Choose session type</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sessionTypes.map((s) => {
                const active = type === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setType(s.id)}
                    className={`rounded-xl border p-4 text-left transition ${active ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">{s.label}</div>
                      {active && <CheckCircle2 size={14} className="text-primary" />}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
                    <div className="mt-3 flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock size={11} /> {s.dur}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">2. Pick a day & slot</h3>
              <div className="text-xs text-muted-foreground">July 2026 · IST</div>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-2">
              {days.map((x) => {
                const active = day === x.n;
                return (
                  <button
                    key={x.n}
                    onClick={() => setDay(x.n)}
                    className={`rounded-lg border py-3 text-center transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"}`}
                  >
                    <div className="text-[10px] uppercase tracking-wider opacity-70">{x.d}</div>
                    <div className="mt-1 text-lg font-bold">{x.n}</div>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {slots.map((t) => {
                const active = slot === t;
                return (
                  <button
                    key={t}
                    onClick={() => setSlot(t)}
                    className={`rounded-lg border py-2 text-xs font-medium transition ${active ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/40"}`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold">3. Anything for your mentor?</h3>
            <Textarea placeholder="Share your goal, questions or a link to your work…" className="mt-3 min-h-24" />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{sessionTypes.find((s) => s.id === type)?.label}</span> · Wed {day} Jul · {slot} · Google Meet
              </div>
              <Button size="sm"><Video size={14} /> Confirm booking</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                RK
              </div>
              <div>
                <div className="text-sm font-semibold">{mentor.name}</div>
                <div className="text-xs text-muted-foreground">{mentor.title}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-secondary/60 p-2">
                <div className="text-[10px] text-muted-foreground">Exp</div>
                <div className="mt-0.5 font-semibold">{mentor.exp}</div>
              </div>
              <div className="rounded-lg bg-secondary/60 p-2">
                <div className="text-[10px] text-muted-foreground">Rating</div>
                <div className="mt-0.5 flex items-center justify-center gap-1 font-semibold"><Star size={11} className="fill-amber-400 text-amber-400" /> 4.9</div>
              </div>
              <div className="rounded-lg bg-secondary/60 p-2">
                <div className="text-[10px] text-muted-foreground">Sessions</div>
                <div className="mt-0.5 font-semibold">312</div>
              </div>
            </div>
            <Button size="sm" variant="outline" className="mt-4 w-full"><MessageSquare size={14} /> Message mentor</Button>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <CalendarDays size={14} className="text-primary" /> Upcoming sessions
            </div>
            <ul className="mt-4 space-y-3">
              {upcoming.map((u) => (
                <li key={u.title} className="rounded-lg border border-border p-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{u.title}</div>
                      <div className="text-xs text-muted-foreground">{u.when}</div>
                    </div>
                    <StatusBadge tone={u.status === "Confirmed" ? "success" : "warning"}>{u.status}</StatusBadge>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-5">
            <div className="text-sm font-semibold">Sessions left this month</div>
            <div className="mt-2 text-3xl font-bold">3 / 6</div>
            <div className="mt-1 text-xs text-muted-foreground">Refreshes on 1 Aug 2026</div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default BookMentor;
