import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import AdminLayout from "@/admin/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Phone, MessageCircle, Mail, MapPin, Briefcase, Building2, Tag, Wallet,
  User, Calendar, Clock, AlertTriangle, Sparkles, ChevronLeft, Plus,
  PhoneCall, Video, FileText, CheckCircle2, XCircle, Send, Paperclip, Mic,
} from "lucide-react";
import { crmLeads, getLead, type Activity, type CrmLead } from "@/admin/data/crm";
import { cn } from "@/lib/utils";

const stageTone: Record<string, string> = {
  "New Lead": "crm-tone-slate",
  "Contacted": "crm-tone-blue",
  "Interested": "crm-tone-blue",
  "Demo Booked": "crm-tone-orange",
  "Demo Attended": "crm-tone-orange",
  "Negotiation": "crm-tone-orange",
  "Admission": "crm-tone-green",
  "Lost": "crm-tone-red",
};

function probabilityTone(p: number) {
  if (p >= 81) return { label: "Ready to Convert", tone: "crm-tone-green" };
  if (p >= 51) return { label: "Hot", tone: "crm-tone-orange" };
  if (p >= 21) return { label: "Warm", tone: "crm-tone-blue" };
  return { label: "Cold", tone: "crm-tone-slate" };
}

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hour12: true });
}
function daysUntil(iso: string) {
  const diff = Math.ceil((new Date(iso).getTime() - Date.now()) / 86400000);
  return diff;
}

const ActivityIcon = ({ t }: { t: Activity["type"] }) => {
  const map: Record<Activity["type"], any> = {
    call: PhoneCall, whatsapp: MessageCircle, email: Mail,
    demo: Video, note: FileText, stage: Tag, created: Sparkles, "follow-up": Clock,
  };
  const I = map[t];
  return <I size={14} />;
};

function CallLogDialog({ lead }: { lead: CrmLead }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-11 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Phone size={16} /> Call
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Log call · {lead.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Outcome</label>
            <Select defaultValue="Interested">
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                {["Connected","Busy","Call Back Later","Interested","Very Interested","Not Interested","Wrong Number","Admission Confirmed","Joined Competitor","No Response"].map(o => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Duration</label>
            <Input className="mt-1" placeholder="e.g. 12 min" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Interest level</label>
            <Select defaultValue="High"><SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>{["Low","Medium","High","Very High"].map(o=><SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Admission probability</label>
            <Input className="mt-1" placeholder="0–100" defaultValue={lead.probability} />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold text-muted-foreground">Notes</label>
            <Textarea className="mt-1" rows={3} placeholder="What was discussed…" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Next follow-up date</label>
            <Input className="mt-1" type="date" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Time</label>
            <Input className="mt-1" type="time" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} className="bg-primary text-primary-foreground hover:bg-primary/90">Save call log</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const Kv = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-start gap-2.5 py-2">
    <Icon size={14} className="mt-0.5 text-muted-foreground" />
    <div className="min-w-0 flex-1">
      <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="truncate text-sm font-medium text-foreground">{value}</div>
    </div>
  </div>
);

const LeadWorkspace = () => {
  const { id } = useParams();
  const lead = useMemo(() => getLead(id ?? crmLeads[0].id), [id]);
  const prob = probabilityTone(lead.probability);
  const daysLeft = daysUntil(lead.nextFollowUp.at);
  const [note, setNote] = useState("");

  return (
    <div className="crm-scope">
      <AdminLayout
        title={lead.name}
        subtitle={`${lead.id} · ${lead.course} · ${lead.branch}`}
        actions={
          <>
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link to="/admin/leads"><ChevronLeft size={14} /> Back to pipeline</Link>
            </Button>
            <Button variant="outline" size="sm">Mark Lost</Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Convert to Student</Button>
          </>
        }
      >
        {/* Sticky next follow-up bar */}
        <div className="mb-6 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Clock size={18} />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Next follow-up</div>
              <div className="text-sm font-bold">{fmtDate(lead.nextFollowUp.at)} · {lead.nextFollowUp.purpose}</div>
            </div>
          </div>
          <Badge className={cn("rounded-md border-0 px-2 py-1 text-[11px] font-semibold", lead.nextFollowUp.priority === "High" ? "crm-tone-red" : "crm-tone-blue")}>
            {lead.nextFollowUp.priority} priority
          </Badge>
          <div className={cn("rounded-md px-2 py-1 text-[11px] font-semibold", daysLeft < 0 ? "crm-tone-red" : daysLeft === 0 ? "crm-tone-orange" : "crm-tone-blue")}>
            {daysLeft < 0 ? `${-daysLeft}d overdue` : daysLeft === 0 ? "Due today" : `${daysLeft}d left`}
          </div>
          <div className="ml-auto flex gap-2">
            <Button size="sm" variant="outline" className="gap-1"><Calendar size={14}/> Reschedule</Button>
            <Button size="sm" className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90"><CheckCircle2 size={14}/> Mark done</Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* LEFT — Profile */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {lead.name.split(" ").map(p=>p[0]).join("").slice(0,2)}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-base font-bold">{lead.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{lead.occupation}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <CallLogDialog lead={lead} />
                <Button variant="outline" className="h-11 w-full gap-2"><MessageCircle size={16}/> WhatsApp</Button>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 rounded-lg bg-muted/50 p-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{lead.score}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Lead score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{color:"hsl(var(--primary))"}}>{lead.probability}%</div>
                  <div className={cn("mt-0.5 inline-block rounded px-1.5 py-0.5 text-[9px] font-bold uppercase", prob.tone)}>{prob.label}</div>
                </div>
              </div>

              <div className="mt-5 divide-y divide-border">
                <Kv icon={Phone} label="Mobile" value={lead.phone} />
                <Kv icon={Mail} label="Email" value={lead.email} />
                <Kv icon={MapPin} label="City" value={lead.city} />
                <Kv icon={Briefcase} label="Occupation" value={lead.occupation} />
                <Kv icon={Building2} label="College" value={lead.college} />
                <Kv icon={Tag} label="Source" value={`${lead.source} · ${lead.campaign}`} />
                <Kv icon={Sparkles} label="Course" value={lead.course} />
                <Kv icon={Wallet} label="Budget" value={lead.budget} />
                <Kv icon={User} label="Parent" value={`${lead.parentName} · ${lead.parentPhone}`} />
                <Kv icon={User} label="Counsellor" value={lead.counsellor} />
                <Kv icon={Calendar} label="Created" value={`${lead.createdAt} · ${lead.daysOld}d old`} />
                <Kv icon={Clock} label="Last activity" value={lead.lastActivity} />
              </div>

              {lead.objections.length > 0 && (
                <div className="mt-5 rounded-lg border border-border p-3">
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    <AlertTriangle size={12} /> Objections
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {lead.objections.map(o => (
                      <span key={o} className="crm-tone-red rounded-md px-2 py-1 text-[11px] font-semibold">{o}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* CENTER — Timeline */}
          <section className="col-span-12 lg:col-span-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold">Lead Journey Timeline</h2>
                  <p className="text-xs text-muted-foreground">Every interaction is stored forever.</p>
                </div>
                <Badge className={cn("rounded-md border-0 px-2 py-1 text-[11px] font-semibold", stageTone[lead.stage])}>{lead.stage}</Badge>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="bg-muted/60">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="call">Calls</TabsTrigger>
                  <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                  <TabsTrigger value="note">Notes</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-5">
                  <ol className="relative ml-3 border-l border-border">
                    {lead.activities.map((a) => (
                      <li key={a.id} className="mb-6 ml-6">
                        <span className="absolute -left-[11px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary/10 text-primary ring-4 ring-card">
                          <ActivityIcon t={a.type} />
                        </span>
                        <div className="rounded-lg border border-border bg-background/40 p-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-bold">{a.title}</span>
                            {a.outcome && <span className="crm-tone-blue rounded-md px-1.5 py-0.5 text-[10px] font-semibold">{a.outcome}</span>}
                            {a.durationMin && <span className="text-[11px] text-muted-foreground">· {a.durationMin} min</span>}
                            <span className="ml-auto text-[11px] text-muted-foreground">{fmtDate(a.at)}</span>
                          </div>
                          {a.body && <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>}
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-[11px] text-muted-foreground">by {a.counsellor}</span>
                            {a.next && (
                              <span className="crm-tone-orange rounded-md px-2 py-0.5 text-[10px] font-semibold">
                                Next: {fmtDate(a.next.at)} · {a.next.purpose}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </TabsContent>
                <TabsContent value="call" className="mt-5 text-sm text-muted-foreground">Call-only filter wired to real data later.</TabsContent>
                <TabsContent value="whatsapp" className="mt-5 text-sm text-muted-foreground">WhatsApp-only filter wired to real data later.</TabsContent>
                <TabsContent value="note" className="mt-5 text-sm text-muted-foreground">Notes-only filter wired to real data later.</TabsContent>
              </Tabs>

              {/* Add note composer */}
              <div className="mt-6 rounded-lg border border-border p-3">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Add note</div>
                <Textarea value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Type a timestamped note…" rows={3} />
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Paperclip size={14}/></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Mic size={14}/></Button>
                  </div>
                  <Button size="sm" className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90"><Send size={14}/> Save note</Button>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT — Action Center */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-bold">Quick Actions</h3>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  { l: "Schedule", i: Calendar },
                  { l: "Book demo", i: Video },
                  { l: "Send brochure", i: FileText },
                  { l: "Fee structure", i: Wallet },
                  { l: "Convert", i: CheckCircle2 },
                  { l: "Mark lost", i: XCircle },
                ].map((b) => {
                  const I = b.i;
                  return (
                    <Button key={b.l} variant="outline" className="h-auto flex-col gap-1 py-3 text-xs">
                      <I size={16} /> {b.l}
                    </Button>
                  );
                })}
              </div>

              <div className="mt-5">
                <h3 className="text-sm font-bold">Admission Probability</h3>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${lead.probability}%` }} />
                </div>
                <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                  <span>0%</span><span className="font-semibold text-foreground">{lead.probability}% · {prob.label}</span><span>100%</span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-sm font-bold">Lead Health</h3>
                <div className="mt-2 space-y-2 text-xs">
                  {[
                    { k: "Calls answered", v: "3 / 4" },
                    { k: "Demo attended", v: "Yes" },
                    { k: "WhatsApp replies", v: "5" },
                    { k: "Fee discussed", v: "Yes" },
                    { k: "Parent involved", v: "Yes" },
                  ].map((r) => (
                    <div key={r.k} className="flex justify-between border-b border-border pb-1 last:border-0">
                      <span className="text-muted-foreground">{r.k}</span>
                      <span className="font-semibold">{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-dashed border-border p-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold"><Sparkles size={12} className="text-primary"/> Slate AI suggests</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Share EMI plan PDF on WhatsApp before the 25th call. Father responds faster to written details.
                </p>
                <Button size="sm" variant="outline" className="mt-2 h-7 w-full text-xs">Send now</Button>
              </div>
            </div>
          </aside>
        </div>
      </AdminLayout>
    </div>
  );
};

export default LeadWorkspace;
