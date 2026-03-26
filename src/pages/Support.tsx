import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How do I reset my password?", a: "Click 'Login' then 'Forgot Password'. You'll receive an email with a reset link." },
  { q: "Can I switch courses after enrolling?", a: "Yes — contact support within 7 days of enrollment to transfer to a different course at no extra cost." },
  { q: "How do I download my certificate?", a: "Once you complete all modules, certificates are available in your Dashboard under the Certificates section." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and offer EMI options on select courses." },
  { q: "Is there a refund policy?", a: "We offer a 7-day money-back guarantee on all courses. No questions asked." },
  { q: "How do I contact my mentor?", a: "Use the in-course chat to message your assigned mentor during business hours. Expect a response within 24 hours." },
];

const Support = () => {
  const [search, setSearch] = useState("");
  const filteredFaqs = search
    ? faqs.filter((f) => f.q.toLowerCase().includes(search.toLowerCase()))
    : faqs;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="container py-16 text-center md:py-24">
        <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl">
          How Can We <span className="text-primary">Help?</span>
        </h1>
        <p className="animate-fade-up-delay-1 mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          Find answers or reach out — we're here for you.
        </p>
        {/* Search */}
        <div className="animate-fade-up-delay-2 relative mx-auto mt-8 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-16">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-6 max-w-2xl">
          {filteredFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="py-4 text-sm text-muted-foreground">No results found. Try a different search or contact us below.</p>
          )}
        </Accordion>
      </section>

      {/* Contact Options */}
      <section className="bg-surface">
        <div className="container py-16">
          <h2 className="text-2xl font-bold">Still Need Help?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Mail size={20} />
              </div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">We'll respond within 24 hours.</p>
              <p className="mt-3 text-sm font-medium text-primary">support@slateacademy.com</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-semibold">Live Chat</h3>
              <p className="mt-1 text-sm text-muted-foreground">Available Mon–Fri, 9 AM – 6 PM IST.</p>
              <Button size="sm" className="mt-3">Start Chat</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold">Submit a Request</h2>
        <form className="mt-6 max-w-lg space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Your name" />
          <Input type="email" placeholder="Email address" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Describe your issue..." rows={4} />
          <Button type="submit" size="lg">Send Message</Button>
        </form>
      </section>
    </PageLayout>
  );
};

export default Support;
