import { MessageCircle, Phone, Mail, HelpCircle, Ticket } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I submit an assignment?", a: "Go to Assignments → Upload. Accepted formats: PDF, Figma link, ZIP up to 50MB." },
  { q: "What's the minimum attendance?", a: "75% across live sessions. Below this you may be marked ineligible for placement." },
  { q: "When will I get my certificate?", a: "After completing 100% of modules and final portfolio review by your mentor." },
  { q: "How do EMI payments work?", a: "Installments auto-renew on the 10th of every month. You can pre-pay anytime from Payments." },
  { q: "How do placements work?", a: "Once you reach 80% readiness, our placement team starts shortlisting you for partner companies." },
];

const Support = () => (
  <StudentLayout title="Support" subtitle="We're with you at every step.">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { icon: Ticket, label: "Raise ticket", desc: "Avg reply 4h" },
        { icon: MessageCircle, label: "WhatsApp", desc: "+91 90000 00000" },
        { icon: Phone, label: "Call support", desc: "10am – 8pm IST" },
        { icon: Mail, label: "Email", desc: "help@slate.academy" },
      ].map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon size={18} />
            </div>
            <h3 className="mt-3 text-sm font-semibold">{c.label}</h3>
            <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>
            <Button size="sm" className="mt-3 w-full" variant="outline">Open</Button>
          </div>
        );
      })}
    </div>

    <div className="mt-6 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2">
        <HelpCircle size={16} className="text-primary" />
        <h3 className="text-sm font-semibold">Frequently asked</h3>
      </div>
      <Accordion type="single" collapsible className="mt-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`f-${i}`}>
            <AccordionTrigger className="text-sm">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </StudentLayout>
);

export default Support;
