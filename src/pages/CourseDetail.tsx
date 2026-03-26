import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Star,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Award,
  Shield,
  Clock,
  Users,
  Figma,
  Palette,
  Layout,
  PenTool,
  Search,
  FileText,
  Layers,
  Monitor,
  Smartphone,
  Globe,
  BarChart3,
  Lightbulb,
  BookOpen,
  GraduationCap,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useState, useEffect } from "react";

/* ─── Data ─── */

const highlightChips = [
  "Beginner Friendly",
  "Portfolio Ready",
  "Real Projects",
  "Job Assistance",
];

const keyTakeaways = [
  "100% Placement Support",
  "Portfolio Building",
  "Real-world Projects",
  "Lifetime Access",
  "Mentorship Support",
  "Career Guidance",
  "Industry Tools Mastery",
  "UI/UX Case Studies",
];

const careerChips = [
  "UI/UX Designer",
  "Product Designer",
  "UX Researcher",
  "Interaction Designer",
  "Digital Product Specialist",
  "Freelance Designer",
];

const portfolioItems = [
  { name: "Siddhi Sharma", project: "FinTech Dashboard" },
  { name: "Kishan Jha", project: "E-commerce Redesign" },
  { name: "Suraj Negi", project: "Health App Concept" },
  { name: "Aspirations Digital", project: "SaaS Landing Page" },
];

const companies = ["Google", "Microsoft", "Deloitte", "KPMG", "HCL", "TCS", "Capgemini", "Snapdeal"];

const careerJourney = [
  { title: "Junior UI/UX Designer", years: "0–1 yrs", salary: "₹3–5 LPA", desc: "Start with wireframes & user research" },
  { title: "UI/UX Designer", years: "1–3 yrs", salary: "₹6–9 LPA", desc: "Own end-to-end design projects" },
  { title: "Senior Designer", years: "3–5 yrs", salary: "₹10–15 LPA", desc: "Lead design systems & teams" },
  { title: "Product Designer / Lead", years: "5+ yrs", salary: "₹18–25+ LPA", desc: "Shape product strategy & vision" },
];

const durationOptions = [
  {
    label: "6 Months",
    tag: "Certificate",
    benefits: ["UGC-recognised certificate", "Core UI/UX foundations", "2 portfolio projects"],
    highlighted: false,
  },
  {
    label: "12 Months",
    tag: "Diploma",
    benefits: ["Diploma credential", "Advanced prototyping", "5 portfolio projects", "Career coaching"],
    highlighted: true,
  },
  {
    label: "24 Months",
    tag: "Advanced",
    benefits: ["Master's-level depth", "10+ projects", "Internship placement", "1-on-1 mentorship"],
    highlighted: false,
  },
];

const achievements = [
  "Design real mobile & web apps",
  "Build a strong portfolio",
  "Master industry-standard tools",
  "Work on real-world projects",
  "Become job-ready in months",
];

const keyFeatures = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Typography",
  "Colour Theory",
  "Usability Testing",
  "UX Laws",
  "Case Studies",
  "Micro-interactions",
  "Heuristic Evaluation",
  "Design Thinking",
];

const skillsCovered = [
  "Mobile App Design",
  "Web Design",
  "Dashboard Design",
  "UX Case Studies",
  "Portfolio Building",
  "Responsive Design",
  "Landing Pages",
  "iOS Design System",
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Miro", icon: Layout },
  { name: "Notion", icon: FileText },
  { name: "ChatGPT", icon: Lightbulb },
  { name: "Framer", icon: Monitor },
  { name: "ProtoPie", icon: Smartphone },
  { name: "Balsamiq", icon: PenTool },
  { name: "FigJam", icon: Layers },
];

const curriculum = [
  { title: "Module 1 — UX Foundations", content: "Introduction to UX principles, design thinking, user psychology, and problem-solving frameworks." },
  { title: "Module 2 — User Research", content: "Conducting interviews, surveys, persona creation, empathy mapping, and competitive analysis." },
  { title: "Module 3 — Wireframing & IA", content: "Information architecture, site maps, user flows, low-fi and mid-fi wireframes." },
  { title: "Module 4 — UI Design", content: "Visual hierarchy, typography, color theory, layout grids, component design, and design systems." },
  { title: "Module 5 — Prototyping", content: "Interactive prototypes in Figma, micro-interactions, animation principles, and handoff." },
  { title: "Module 6 — Design Systems", content: "Building scalable design systems, tokens, component libraries, and documentation." },
  { title: "Module 7 — Case Study & Portfolio", content: "End-to-end case study creation, portfolio design, presentation skills, and job prep." },
];

const testimonials = [
  { name: "Ananya R.", role: "Junior UX Designer at Google", quote: "Slate Academy's hands-on approach got me my dream job. The portfolio I built during the course was my biggest asset in interviews." },
  { name: "Rohan K.", role: "Product Designer at a Startup", quote: "I switched from marketing to design in 8 months. The mentorship and real projects made all the difference." },
  { name: "Priya M.", role: "Freelance UI Designer", quote: "The career guidance and placement support helped me land my first 3 freelance clients within weeks of graduating." },
];

const faqs = [
  { q: "Is this course beginner-friendly?", a: "Absolutely! No prior design experience is needed. We start from the fundamentals and progressively build your skills." },
  { q: "Will I get job support after completing the course?", a: "Yes. We provide resume reviews, mock interviews, portfolio feedback, and connect you with hiring partners." },
  { q: "What tools do I need?", a: "A laptop with internet access. All tools like Figma, Miro, and FigJam are free to use. We'll guide you through setup." },
  { q: "Can I learn at my own pace?", a: "Yes — all content is available on-demand with live sessions for doubt-clearing and mentorship." },
  { q: "Is there a refund policy?", a: "We offer a 7-day money-back guarantee if the course isn't the right fit for you." },
];

/* ─── Chip Component ─── */
const Chip = ({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) => (
  <span
    className={`inline-block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
      accent
        ? "bg-primary/10 text-primary"
        : "border border-border bg-card text-foreground"
    }`}
  >
    {children}
  </span>
);

/* ─── Section Heading ─── */
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{children}</h2>
);

/* ─── Page ─── */
const CourseDetail = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(1);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PageLayout>
      {/* ── SECTION 1: HERO ── */}
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              UI/UX Design Course —{" "}
              <span className="text-primary">Become Job Ready</span>
            </h1>
            <p className="animate-fade-up-delay-1 mt-5 max-w-lg text-lg text-muted-foreground">
              Master UI/UX with real projects, portfolio building, and industry tools.
            </p>
            <div className="animate-fade-up-delay-2 mt-6 flex flex-wrap gap-2">
              {highlightChips.map((c) => (
                <Chip key={c} accent>{c}</Chip>
              ))}
            </div>
            <div className="animate-fade-up-delay-3 mt-8 flex gap-3">
              <Button size="lg">
                Enroll Now <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                View Curriculum
              </Button>
            </div>
          </div>
          <div className="animate-fade-up-delay-1 aspect-video overflow-hidden rounded-2xl bg-accent">
            <div className="flex h-full items-center justify-center text-accent-foreground/60">
              <Monitor size={64} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: KEY TAKEAWAYS ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading>Key Takeaways</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {keyTakeaways.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CAREER OPPORTUNITIES ── */}
      <section className="container py-16">
        <SectionHeading>Career Opportunities</SectionHeading>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {careerChips.map((c) => (
            <Chip key={c} accent>{c}</Chip>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: PORTFOLIO SHOWCASE ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading>Student Portfolio</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((p) => (
              <div
                key={p.name}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-accent flex items-center justify-center">
                  <Palette size={32} className="text-accent-foreground/40" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="mt-0.5 text-sm text-muted-foreground">{p.project}</p>
                  <Button variant="link" className="mt-2 h-auto p-0 text-sm">
                    View Project →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TRUST LOGOS ── */}
      <section className="container py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Our students work at top companies
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {companies.map((c) => (
            <span key={c} className="text-lg font-bold text-muted-foreground/60">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: CAREER JOURNEY ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading>Your Career Journey</SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerJourney.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6">
                <span className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 font-semibold">{step.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{step.years}</p>
                <p className="mt-2 text-sm font-bold text-primary">{step.salary}</p>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                {i < careerJourney.length - 1 && (
                  <ChevronRight
                    size={20}
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-border lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: DURATION OPTIONS ── */}
      <section className="container py-16">
        <SectionHeading>Choose Your Learning Path</SectionHeading>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {durationOptions.map((opt, i) => (
            <div
              key={opt.label}
              onClick={() => setSelectedDuration(i)}
              className={`relative cursor-pointer rounded-xl border-2 p-6 transition-all ${
                selectedDuration === i
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:shadow-md"
              } ${opt.highlighted ? "ring-2 ring-primary/20" : ""}`}
            >
              {opt.highlighted && (
                <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{opt.label}</h3>
              <span className="mt-1 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                {opt.tag}
              </span>
              <ul className="mt-4 space-y-2">
                {opt.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full"
                variant={selectedDuration === i ? "default" : "outline"}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: WHAT YOU'LL ACHIEVE ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading>What You'll Achieve</SectionHeading>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl">
            {achievements.map((a) => (
              <li key={a} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 size={18} className="shrink-0 text-primary" />
                <span className="text-sm font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 9: KEY FEATURES ── */}
      <section className="container py-16">
        <SectionHeading>Key Features</SectionHeading>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {keyFeatures.map((f) => (
            <Chip key={f}>{f}</Chip>
          ))}
        </div>
      </section>

      {/* ── SECTION 10: SKILLS COVERED ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading>Skills Covered</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {skillsCovered.map((s) => (
              <Chip key={s} accent>{s}</Chip>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: TOOLS ── */}
      <section className="container py-16">
        <SectionHeading>Tools You'll Use</SectionHeading>
        <div className="mt-8 grid grid-cols-4 gap-4 sm:grid-cols-8">
          {tools.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <t.icon size={28} className="text-foreground" />
              <span className="text-xs font-medium text-muted-foreground">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 12: CURRICULUM ── */}
      <section className="bg-surface">
        <div className="container py-16">
          <SectionHeading>Curriculum</SectionHeading>
          <Accordion type="single" collapsible className="mt-8 max-w-2xl">
            {curriculum.map((mod, i) => (
              <AccordionItem key={i} value={`mod-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {mod.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {mod.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── SECTION 13: TESTIMONIALS ── */}
      <section className="container py-16">
        <SectionHeading>What Our Students Say</SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <Quote size={20} className="text-primary/40" />
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
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

      {/* ── SECTION 14: PRICING & CTA ── */}
      <section className="bg-primary">
        <div className="container py-16 text-center">
          <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1 text-sm font-medium text-primary-foreground">
            Limited Seats Available
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Start at ₹4,999/month
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            EMI options available · 7-day money-back guarantee
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" variant="secondary">
              Enroll Now <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-primary-foreground/60">
            <span className="flex items-center gap-1"><Shield size={12} /> Secure payment</span>
            <span className="flex items-center gap-1"><Award size={12} /> Certificate included</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: FAQ ── */}
      <section className="container py-16">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <Accordion type="single" collapsible className="mt-8 max-w-2xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
            <p className="text-xs text-muted-foreground">Starting at ₹4,999/month</p>
          </div>
          <Button size="lg">
            Enroll Now <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CourseDetail;
