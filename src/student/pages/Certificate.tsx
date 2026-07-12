import { Award, Download, Share2, Linkedin, Copy, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { student } from "../data/mock";

const requirements = [
  { label: "Complete all modules", done: false, pct: 65 },
  { label: "Submit final portfolio", done: false, pct: 70 },
  { label: "Attendance above 75%", done: true, pct: 92 },
  { label: "Clear all installments", done: false, pct: 82 },
  { label: "Mentor sign-off", done: false, pct: 0 },
];

const past = [
  { name: "Foundations of Design", date: "12 Apr 2026", id: "SLT-FD-1042", verified: true },
  { name: "Typography Mastery", date: "06 May 2026", id: "SLT-TM-1042", verified: true },
  { name: "Color Theory in UI", date: "14 May 2026", id: "SLT-CT-1042", verified: true },
];

const Certificate = () => {
  const unlocked = requirements.every((r) => r.done);
  return (
    <StudentLayout
      title="Download Certificate"
      subtitle="Your industry-recognised proof of skill — issued on program completion."
      actions={
        <>
          <Button variant="outline" size="sm"><Share2 size={14} /> Share</Button>
          <Button size="sm" disabled={!unlocked}><Download size={14} /> {unlocked ? "Download PDF" : "Locked"}</Button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, #000 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
            <div className="relative flex flex-col items-center rounded-xl border border-border bg-card p-10 text-center">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Slate Academy</div>
              <div className="mt-1 text-xs text-muted-foreground">Certificate of Completion</div>
              <Award size={38} className="mt-6 text-primary" />
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">This is to certify that</div>
              <div className="mt-2 font-serif text-3xl font-bold">{student.name}</div>
              <div className="mt-4 max-w-md text-sm text-muted-foreground">
                has successfully completed the <span className="font-medium text-foreground">{student.course}</span> program with distinction.
              </div>
              <div className="mt-8 flex w-full items-end justify-between px-4 text-xs">
                <div className="text-left">
                  <div className="border-b border-border pb-1 font-serif text-sm italic">Riya Kapoor</div>
                  <div className="mt-1 text-muted-foreground">Mentor · Program Lead</div>
                </div>
                <div className="text-right">
                  <div className="text-muted-foreground">Certificate ID</div>
                  <div className="mt-0.5 font-mono">SLT-UX-{student.id.split("-").pop()}</div>
                </div>
              </div>
              {!unlocked && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-background/70 backdrop-blur-[1px]">
                  <div className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground">
                    <Lock size={12} className="mr-1 inline" /> Unlocks at 100% program completion
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h3 className="text-sm font-semibold">Previously earned certificates</h3>
            </div>
            <ul className="divide-y divide-border">
              {past.map((c) => (
                <li key={c.id} className="flex items-center gap-4 px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{c.name}</div>
                    <div className="text-xs text-muted-foreground">Issued {c.date} · {c.id}</div>
                  </div>
                  <StatusBadge tone="success"><ShieldCheck size={12} className="mr-1" /> Verified</StatusBadge>
                  <Button size="sm" variant="outline"><Download size={14} /></Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">Unlock requirements</h3>
            <div className="mt-4 space-y-3">
              {requirements.map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className={r.done ? "text-emerald-500" : "text-muted-foreground"} />
                      <span className={r.done ? "text-foreground" : "text-muted-foreground"}>{r.label}</span>
                    </div>
                    <span className="text-muted-foreground">{r.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className={`h-full rounded-full ${r.done ? "bg-emerald-500" : "bg-gradient-to-r from-primary to-accent"}`} style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">Share your achievement</h3>
            <p className="mt-1 text-xs text-muted-foreground">Once unlocked, add it to your résumé and social profiles.</p>
            <div className="mt-4 space-y-2">
              <Button size="sm" variant="outline" className="w-full justify-start"><Linkedin size={14} /> Add to LinkedIn</Button>
              <Button size="sm" variant="outline" className="w-full justify-start"><Copy size={14} /> Copy verify link</Button>
              <Button size="sm" variant="outline" className="w-full justify-start"><Share2 size={14} /> Share via WhatsApp</Button>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Certificate;
