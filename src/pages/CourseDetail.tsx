import PageLayout from "@/components/PageLayout";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Award,
  Quote,
  Layers,
  Search,
  PenTool,
  Figma,
  FolderKanban,
  Users,
  Briefcase,
  BookOpen,
  TrendingUp,
  Sparkles,
  GraduationCap,
  Heart,
} from "lucide-react";
import { useState, useEffect } from "react";

import heroMockup from "@/assets/hero-mockup.jpg";
import portfolioFintech from "@/assets/portfolio-fintech.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioHealth from "@/assets/portfolio-health.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import toolFigma from "@/assets/tools/figma.png";
import toolMiro from "@/assets/tools/miro.png";
import toolNotion from "@/assets/tools/notion.png";
import toolChatgpt from "@/assets/tools/chatgpt.png";
import toolFramer from "@/assets/tools/framer.png";
import toolProtopie from "@/assets/tools/protopie.png";
import toolSpline from "@/assets/tools/spline.png";

/* ─── Data ─── */

const trustStats = [
  { value: "5,000+", label: "Students Trained" },
  { value: "120+", label: "Real Projects" },
  { value: "87%", label: "Placed in 6 Months" },
  { value: "4.9★", label: "Average Rating" },
];

const whatYoullLearn = [
  { icon: Layers, title: "UI Design Fundamentals", desc: "Visual hierarchy, layout, typography & color theory" },
  { icon: Search, title: "UX Research & Design Thinking", desc: "User interviews, personas, journey maps & testing" },
  { icon: PenTool, title: "Wireframing & Prototyping", desc: "Low-fi to high-fi prototypes with interactions" },
  { icon: Figma, title: "Figma Mastery", desc: "Components, auto-layout, variables & design systems" },
  { icon: FolderKanban, title: "Real Client Projects", desc: "End-to-end case studies for your portfolio" },
  { icon: Sparkles, title: "AI in Design", desc: "Use AI tools to supercharge your design workflow" },
];

const whySlate = [
  { icon: BookOpen, title: "Industry-Focused Curriculum", desc: "Built with hiring managers to match real job requirements." },
  { icon: Users, title: "Live Mentorship", desc: "1-on-1 guidance from senior designers at top companies." },
  { icon: FolderKanban, title: "Portfolio & Case Studies", desc: "Graduate with 5+ polished projects ready for interviews." },
  { icon: Briefcase, title: "Placement Assistance", desc: "Resume prep, mock interviews & hiring partner network." },
];

const studentOutcomes = [
  { role: "UI Designer", salary: "₹4–8 LPA", icon: PenTool },
  { role: "UX Designer", salary: "₹6–12 LPA", icon: Search },
  { role: "Product Designer", salary: "₹10–20 LPA", icon: Layers },
];

const transformations = [
  { before: "BCA student with no design skills", after: "UX Designer at a fintech startup — ₹7 LPA", name: "Ankit S." },
  { before: "Marketing executive looking to switch", after: "Product Designer at a SaaS company — ₹12 LPA", name: "Meera P." },
];

const testimonials = [
  { name: "Ananya R.", role: "UX Designer at Google", quote: "Slate Academy's hands-on approach got me my dream job. The portfolio I built was my biggest asset.", initials: "AR" },
  { name: "Rohan K.", role: "Product Designer at Razorpay", quote: "I switched from marketing to design in 8 months. The mentorship made all the difference.", initials: "RK" },
  { name: "Priya M.", role: "Freelance UI Designer", quote: "I landed 3 freelance clients within weeks of graduating. Incredible value for money.", initials: "PM" },
  { name: "Karthik V.", role: "UI Designer at Swiggy", quote: "The real projects and career guidance gave me the confidence to crack top interviews.", initials: "KV" },
];

const tools = [
  { name: "Figma", logo: toolFigma },
  { name: "Miro", logo: toolMiro },
  { name: "Notion", logo: toolNotion },
  { name: "ChatGPT", logo: toolChatgpt },
  { name: "Framer", logo: toolFramer },
  { name: "ProtoPie", logo: toolProtopie },
  { name: "Spline", logo: toolSpline },
];

const curriculum = [
  { title: "Module 1 — Design Thinking & UX Foundations", content: "Introduction to UX principles, design thinking process, user psychology, and problem-solving frameworks." },
  { title: "Module 2 — User Research & Analysis", content: "Conducting interviews, surveys, persona creation, empathy mapping, and competitive analysis." },
  { title: "Module 3 — Information Architecture & Wireframing", content: "Site maps, user flows, card sorting, low-fi and mid-fi wireframes." },
  { title: "Module 4 — Visual Design & UI Systems", content: "Typography, color theory, layout grids, component design, and scalable design systems." },
  { title: "Module 5 — Prototyping & Interaction Design", content: "Interactive prototypes in Figma, micro-interactions, animation principles, and developer handoff." },
  { title: "Module 6 — Portfolio & Career Preparation", content: "End-to-end case studies, portfolio design, interview prep, and personal branding." },
];

const faqs = [
  { q: "How long is the course?", a: "The course is 6 months (24 weeks) with live sessions, self-paced content, and project deadlines." },
  { q: "Is this beginner-friendly?", a: "Yes! No prior design experience needed. We start from absolute fundamentals." },
  { q: "Do you offer placement support?", a: "Yes — resume reviews, mock interviews, portfolio feedback, and direct referrals to hiring partners." },
  { q: "What tools are covered?", a: "Figma, Miro, Notion, Framer, ProtoPie, Spline, and AI design tools like ChatGPT." },
  { q: "Can I pay in EMIs?", a: "Yes, we offer no-cost EMI starting at ₹4,167/month for 6 months." },
];

const portfolioItems = [
  { name: "Siddhi Sharma", project: "FinTech Dashboard", image: portfolioFintech },
  { name: "Kishan Jha", project: "E-commerce Redesign", image: portfolioEcommerce },
  { name: "Suraj Negi", project: "Health App Concept", image: portfolioHealth },
  { name: "Aspirations Digital", project: "SaaS Landing Page", image: portfolioSaas },
];

/* ─── Helpers ─── */
const SectionHeading = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{children}</h2>
    {sub && <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{sub}</p>}
  </div>
);

/* ─── Page ─── */
const CourseDetail = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PageLayout>
      {/* ── 1. HERO ── */}
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              UI/UX Design Course
            </span>
            <h1 className="animate-fade-up mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-[3.5rem]">
              Become a Job-Ready{" "}
              <span className="text-primary">UI/UX Designer</span>
            </h1>
            <p className="animate-fade-up-delay-1 mt-5 max-w-lg text-lg text-muted-foreground">
              Learn design from scratch and build real-world projects with Slate Academy.
            </p>
            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Button size="lg">
                Enroll Now <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Download Curriculum
              </Button>
            </div>
            {/* Trust stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-extrabold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-up-delay-1 overflow-hidden rounded-2xl shadow-xl">
            <img
              src={heroMockup}
              alt="UI/UX Design Dashboard Mockup"
              width={1280}
              height={832}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 2. COURSE OVERVIEW ── */}
      <section className="border-y border-border bg-surface">
        <div className="container py-16">
          <SectionHeading sub="A comprehensive program designed to take you from complete beginner to a confident, job-ready UI/UX designer.">
            Course Overview
          </SectionHeading>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {["Beginner to advanced curriculum", "12+ real-world projects", "Portfolio-ready case studies", "1-on-1 mentorship sessions"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 size={18} className="shrink-0 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT YOU'LL LEARN ── */}
      <section className="container py-16">
        <SectionHeading sub="Master every skill you need to design products people love.">
          What You'll Learn
        </SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatYoullLearn.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5 duration-300"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon size={22} />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. WHY SLATE ACADEMY ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading sub="Here's why 5,000+ students chose Slate Academy.">
            Why Choose Slate Academy
          </SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whySlate.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. STUDENT OUTCOMES ── */}
      <section className="container py-16">
        <SectionHeading sub="Where our graduates end up — and what they earn.">
          Student Outcomes
        </SectionHeading>
        {/* Roles & salaries */}
        <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-3">
          {studentOutcomes.map((o) => (
            <div key={o.role} className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <o.icon size={22} />
              </div>
              <h4 className="font-semibold">{o.role}</h4>
              <p className="mt-1 text-lg font-bold text-primary">{o.salary}</p>
            </div>
          ))}
        </div>
        {/* Transformations */}
        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          {transformations.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.name}</p>
              <div className="mt-3 flex items-start gap-3">
                <span className="mt-1 shrink-0 rounded bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">Before</span>
                <p className="text-sm text-muted-foreground">{t.before}</p>
              </div>
              <div className="mt-2 flex items-start gap-3">
                <span className="mt-1 shrink-0 rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">After</span>
                <p className="text-sm font-medium text-foreground">{t.after}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. PORTFOLIO SHOWCASE ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading sub="Real projects built by our students during the course.">
            Student Portfolio
          </SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((p) => (
              <div key={p.name} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={`${p.project} by ${p.name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="mt-0.5 text-sm text-muted-foreground">{p.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TOOLS ── */}
      <section className="container py-16">
        <SectionHeading sub="Industry-standard tools you'll master.">
          Tools Covered
        </SectionHeading>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-4 gap-5 sm:grid-cols-7">
          {tools.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
              <img src={t.logo} alt={`${t.name} logo`} loading="lazy" className="h-10 w-10 object-contain" />
              <span className="text-xs font-medium text-muted-foreground">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. CURRICULUM ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading sub="6 months of structured, hands-on learning.">
            Curriculum
          </SectionHeading>
          <Accordion type="single" collapsible className="mx-auto mt-10 max-w-2xl">
            {curriculum.map((mod, i) => (
              <AccordionItem key={i} value={`mod-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold">{mod.title}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{mod.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── 9. PRICING ── */}
      <section className="container py-16">
        <div className="mx-auto max-w-lg rounded-2xl border-2 border-primary bg-card p-8 text-center shadow-lg">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Limited Seats
          </span>
          <h2 className="mt-4 text-4xl font-extrabold">₹25,000</h2>
          <p className="mt-2 text-muted-foreground">One-time payment · No hidden charges</p>
          <div className="mt-4 flex flex-col items-center gap-1 text-sm text-muted-foreground">
            <span>Or EMI at <strong className="text-foreground">₹4,167/month</strong> × 6 months</span>
          </div>
          <Button size="lg" className="mt-6 w-full">
            Secure Your Spot <ArrowRight size={16} />
          </Button>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield size={12} /> 7-day money-back guarantee</span>
            <span className="flex items-center gap-1"><Award size={12} /> Certificate included</span>
          </div>
        </div>
      </section>

      {/* ── 10. LEAD CAPTURE FORM ── */}
      <section className="bg-surface" id="apply">
        <div className="container py-16">
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Not Sure Yet? <span className="text-primary">Talk to Us.</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Get a free counselling call, personalized career roadmap, and detailed curriculum — no obligations.
              </p>
              <ul className="mt-6 space-y-3">
                {["Free 1-on-1 career counselling", "Personalized learning roadmap", "Detailed curriculum walkthrough", "Scholarship & EMI guidance"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* ── 11. TESTIMONIALS ── */}
      <section className="container py-16">
        <SectionHeading sub="Hear from designers who started right where you are.">
          What Our Students Say
        </SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <Quote size={18} className="text-primary/40" />
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12. FAQ ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <Accordion type="single" collapsible className="mx-auto mt-10 max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── 13. FINAL CTA ── */}
      <section className="bg-primary">
        <div className="container py-16 text-center">
          <GraduationCap size={40} className="mx-auto text-primary-foreground/80" />
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Start Your Design Career Today
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Join 5,000+ learners who transformed their careers with Slate Academy.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <a href="#apply">Enroll Now <ArrowRight size={16} /></a>
          </Button>
        </div>
      </section>

      {/* ── STICKY CTA ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">UI/UX Design Course</p>
            <p className="text-xs text-muted-foreground">₹25,000 · EMI available</p>
          </div>
          <Button size="lg" asChild>
            <a href="#apply">Enroll Now <ArrowRight size={16} /></a>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CourseDetail;
