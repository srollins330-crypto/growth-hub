import { Link } from "react-router-dom";
import AdminLayout from "@/admin/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Phone, MessageCircle, Search, Plus, CheckCircle2 } from "lucide-react";
import { crmLeads } from "@/admin/data/crm";
import { cn } from "@/lib/utils";

const today = "2026-06-23";

function bucketize() {
  const tToday: typeof crmLeads = [];
  const overdue: typeof crmLeads = [];
  const upcoming: typeof crmLeads = [];
  const hot: typeof crmLeads = [];
  const cold: typeof crmLeads = [];
  const ready: typeof crmLeads = [];
  for (const l of crmLeads) {
    const d = new Date(l.nextFollowUp.at);
    const t = new Date(today);
    if (d.toDateString() === t.toDateString()) tToday.push(l);
    else if (d < t) overdue.push(l);
    else upcoming.push(l);
    if (l.probability >= 81) ready.push(l);
    else if (l.probability >= 51) hot.push(l);
    else if (l.probability < 21) cold.push(l);
  }
  return { tToday, overdue, upcoming, hot, cold, ready };
}

const Row = ({ l, tone }: { l: typeof crmLeads[number]; tone?: string }) => (
  <li className="flex items-center gap-3 p-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
      {l.name.split(" ").map(p=>p[0]).join("").slice(0,2)}
    </div>
    <div className="min-w-0 flex-1">
      <Link to={`/admin/leads/${l.id}`} className="block text-sm font-semibold hover:text-primary">{l.name}</Link>
      <div className="truncate text-xs text-muted-foreground">{l.nextFollowUp.purpose} · {l.course}</div>
    </div>
    <span className={cn("hidden rounded-md px-2 py-1 text-[10px] font-bold uppercase md:inline", tone ?? (l.nextFollowUp.priority === "High" ? "crm-tone-red" : "crm-tone-blue"))}>
      {tone ? `${l.probability}%` : l.nextFollowUp.priority}
    </span>
    <span className="hidden text-xs text-muted-foreground md:inline">
      {new Date(l.nextFollowUp.at).toLocaleString("en-IN",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit",hour12:true})}
    </span>
    <Button size="icon" variant="outline" className="h-9 w-9"><Phone size={14}/></Button>
    <Button size="icon" variant="outline" className="h-9 w-9"><MessageCircle size={14}/></Button>
    <Button size="icon" variant="outline" className="h-9 w-9"><CheckCircle2 size={14}/></Button>
  </li>
);

const List = ({ items, tone }: { items: typeof crmLeads; tone?: string }) => (
  <div className="rounded-xl border border-border bg-card">
    <ul className="divide-y divide-border">
      {items.map(l => <Row key={l.id} l={l} tone={tone} />)}
      {items.length === 0 && <li className="p-8 text-center text-sm text-muted-foreground">Nothing here.</li>}
    </ul>
  </div>
);

const FollowUps = () => {
  const b = bucketize();
  return (
    <div className="crm-scope">
      <AdminLayout
        title="Follow-ups"
        subtitle="Stay on top of every lead conversation."
        actions={
          <>
            <div className="relative hidden md:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input className="h-9 w-64 pl-9" placeholder="Search leads…" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90"><Plus size={14} className="mr-1" /> New follow-up</Button>
          </>
        }
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[
            { l: "Today", v: b.tToday.length, t: "crm-tone-blue" },
            { l: "Overdue", v: b.overdue.length, t: "crm-tone-red" },
            { l: "Upcoming", v: b.upcoming.length, t: "crm-tone-slate" },
            { l: "Hot", v: b.hot.length, t: "crm-tone-orange" },
            { l: "Ready", v: b.ready.length, t: "crm-tone-green" },
            { l: "Cold", v: b.cold.length, t: "crm-tone-slate" },
          ].map(k => (
            <div key={k.l} className="rounded-xl border border-border bg-card p-4">
              <div className={cn("inline-block rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase", k.t)}>{k.l}</div>
              <div className="mt-2 text-2xl font-bold">{k.v}</div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="today" className="mt-6">
          <TabsList className="bg-muted/60">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="hot">Hot</TabsTrigger>
            <TabsTrigger value="ready">Admission Ready</TabsTrigger>
            <TabsTrigger value="cold">Cold</TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="mt-4"><List items={b.tToday} /></TabsContent>
          <TabsContent value="overdue" className="mt-4"><List items={b.overdue} tone="crm-tone-red" /></TabsContent>
          <TabsContent value="upcoming" className="mt-4"><List items={b.upcoming} /></TabsContent>
          <TabsContent value="hot" className="mt-4"><List items={b.hot} tone="crm-tone-orange" /></TabsContent>
          <TabsContent value="ready" className="mt-4"><List items={b.ready} tone="crm-tone-green" /></TabsContent>
          <TabsContent value="cold" className="mt-4"><List items={b.cold} tone="crm-tone-slate" /></TabsContent>
        </Tabs>
      </AdminLayout>
    </div>
  );
};

export default FollowUps;
