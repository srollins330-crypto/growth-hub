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
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  FolderKanban,
  Award,
  Briefcase,
  Download,
  PhoneCall,
  Layers,
  Search,
  GitBranch,
  PenTool,
  MousePointerClick,
  ClipboardCheck,
  Bot,
  Code2,
  Compass,
  Rocket,
  GraduationCap,
  Star,
  Quote,
  Trophy,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroVisual from "@/assets/uiux-hero.jpg";
import certificateImg from "@/assets/uiux-certificate.jpg";
import portfolioFintech from "@/assets/portfolio-fintech.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioHealth from "@/assets/portfolio-health.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";

/* ───────────────── Data ───────────────── */

const highlights = [
  { icon: Calendar, label: "16 Weeks", sub: "Cohort program" },
  { icon: Bot, label: "AI-Empowered", sub: "Modern workflows" },
  { icon: FolderKanban, label: "Portfolio", sub: "Real projects" },
  { icon: Award, label: "Adobe Certified", sub: "Industry creds" },
  { icon: Briefcase, label: "Guaranteed", sub: "Internship" },
];

const learnFeatures = [
  { icon: Layers, title: "UI Design", desc: "Visual hierarchy, spacing & component systems." },
  { icon: Search, title: "UX Fundamentals", desc: "User research, personas & journey mapping." },
  { icon: GitBranch, title: "Information Architecture", desc: "Structuring content and navigation." },
  { icon: PenTool, title: "Wireframing", desc: "Low and high fidelity wireframes." },
  { icon: MousePointerClick, title: "Interactive Prototyping", desc: "Build realistic product interactions." },
  { icon: ClipboardCheck, title: "Usability Testing", desc: "Test and iterate on real users." },
  { icon: Bot, title: "AI-Powered Design", desc: "ChatGPT, Gemini & AI workflows." },
  { icon: Code2, title: "Developer Handoff", desc: "Specs, assets and collaboration." },
];

const toolGroups = [
  {
    title: "Design Tools",
    tools: ["Adobe Figma", "Adobe FigJam", "Balsamiq", "ProtoPie", "Framer", "Notion", "Miro", "Marvel", "Figma Dev Mode"],
  },
  { title: "AI Tools", tools: ["ChatGPT", "Google Gemini", "Visily AI"] },
  { title: "Portfolio Platforms", tools: ["Behance"] },
];

const roadmap = [
  "Design Foundations",
  "UX Research",
  "Information Architecture",
  "Wireframing",
  "UI Design",
  "Prototyping",
  "Portfolio Building",
  "Placement Preparation",
];

const masterCards = [
  { icon: Compass, title: "End-to-End Product Design", desc: "Design complete digital products from research to prototype." },
  { icon: PenTool, title: "Figma Expertise", desc: "Master Figma and industry-standard workflows." },
  { icon: Bot, title: "AI-Powered Design", desc: "Use AI to accelerate ideation, research and content." },
  { icon: FolderKanban, title: "Portfolio Development", desc: "Build real-world case studies that impress recruiters." },
  { icon: Rocket, title: "Product Thinking", desc: "Design, technology and business — in one playbook." },
  { icon: Briefcase, title: "Career Readiness", desc: "UI, UX, Product, Research and App Designer roles." },
];

const walkAway = [
  "Industry-Ready Portfolio",
  "Adobe Certifications",
  "Real Client Projects",
  "AI Design Skills",
  "Product Design Thinking",
  "Placement Preparation",
  "Guaranteed Internship",
  "100% Placement Guarantee",
];

const programs = [
  {
    level: "Level 1",
    name: "Professional",
    tag: "Foundation → Pro",
    desc: "From an enthusiast to a professional. Learn the skills that matter most.",
    duration: "4 Months",
    features: [
      "3 Classes per Week",
      "2 Weekend Classes",
      "Advanced Figma Training",
      "UI Design Systems",
      "UX Research",
      "Portfolio Building",
      "Live Projects",
      "Guaranteed Internship",
    ],
    highlight: false,
  },
  {
    level: "Level 2",
    name: "Expert",
    tag: "AI-Powered Mastery",
    desc: "This is what separates the great from the good. Arm yourself with the power of AI.",
    duration: "1 Month",
    features: [
      "3 Classes per Week",
      "Generative AI Training",
      "Advanced AI Workflows",
      "Additional Design Tools",
      "Video Editing Tools",
      "Personality Development",
      "Communication Skills",
      "Presentation Skills",
      "Interview Preparation",
      "Mock Interviews",
      "Guaranteed Internship",
    ],
    highlight: true,
  },
];

const projects = [
  { title: "Food Delivery App", tools: "Figma · ProtoPie", level: "Intermediate", industry: "FoodTech", image: portfolioEcommerce },
  { title: "E-Commerce Platform", tools: "Figma · Framer", level: "Advanced", industry: "Retail", image: portfolioEcommerce },
  { title: "Healthcare Dashboard", tools: "Figma · Miro", level: "Advanced", industry: "HealthTech", image: portfolioHealth },
  { title: "Travel Booking App", tools: "Figma · ProtoPie", level: "Intermediate", industry: "Travel", image: portfolioSaas },
  { title: "Fintech Mobile App", tools: "Figma · Framer", level: "Advanced", industry: "Fintech", image: portfolioFintech },
  { title: "SaaS Admin Dashboard", tools: "Figma · Dev Mode", level: "Pro", industry: "SaaS", image: portfolioSaas },
];

const careerRoles = [
  { role: "UI Designer", salary: "₹4 – 8 LPA" },
  { role: "UX Designer", salary: "₹6 – 12 LPA" },
  { role: "Product Designer", salary: "₹10 – 20 LPA" },
  { role: "UX Researcher", salary: "₹7 – 14 LPA" },
  { role: "Interaction Designer", salary: "₹8 – 16 LPA" },
  { role: "Visual Designer", salary: "₹5 – 10 LPA" },
];

const careerSupport = ["Placement Support", "Resume Building", "LinkedIn Optimization", "Mock Interviews", "Portfolio Reviews"];

const stories = [
  { name: "Ananya R.", role: "UX Designer", company: "Google", initials: "AR", quote: "The portfolio I built at Slate was the single biggest reason I cracked Google." },
  { name: "Rohan K.", role: "Product Designer", company: "Razorpay", initials: "RK", quote: "I switched from marketing to product design in 8 months. The mentorship was unreal." },
  { name: "Priya M.", role: "UI Designer", company: "Swiggy", initials: "PM", quote: "Landed 3 freelance clients before graduating. Slate genuinely changed my trajectory." },
];

const faqs = [
  { q: "Who can join this course?", a: "Anyone passionate about design — students, working professionals or career switchers. No prior experience required." },
  { q: "Do I need prior experience?", a: "Not at all. The curriculum starts from absolute fundamentals and gradually moves into advanced workflows." },
  { q: "Is the course beginner friendly?", a: "Yes. Our cohort structure, mentorship and live doubt-clearing make it ideal for beginners." },
  { q: "Will I get recordings?", a: "Yes, every live class is recorded and added to your dashboard for lifetime access." },
  { q: "Is internship guaranteed?", a: "Absolutely. Every learner who completes the program is placed in a guaranteed internship." },
  { q: "What tools will I learn?", a: "Figma, FigJam, ProtoPie, Framer, Miro, Notion, Visily AI, ChatGPT, Gemini and more." },
  { q: "How does placement support work?", a: "Resume reviews, mock interviews, portfolio audits and direct referrals to our hiring partner network." },
  { q: "Will I build a portfolio?", a: "Yes — you'll graduate with 6+ industry-grade case studies ready for interviews." },
];

/* ───────────────── Helpers ───────────────── */

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">{subtitle}</p>}
  </div>
);

/* ───────────────── Page ───────────────── */

const CourseDetail = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="light bg-background text-foreground">
    <PageLayout>
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container relative py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                🔥 Most Popular Design Program
              </span>
              <h1 className="animate-fade-up-delay-1 font-display mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                BECOME A <br />
                <span className="text-gradient-brand">UI/UX DESIGNER</span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-5 text-lg font-medium text-foreground/90 md:text-xl">
                Build digital experiences people fall in love with.
              </p>
              <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-muted-foreground">
                From understanding users to building digital experiences they love, your learning journey at Slate is purely transformative.
                Right from research and wireframes to polished prototypes, you train to be a designer that impresses users, clients and managers alike.
              </p>

              {/* Highlights */}
              <div className="animate-fade-up-delay-3 mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {highlights.map((h) => (
                  <div key={h.label} className="glass rounded-xl p-3 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40">
                    <h.icon size={20} className="mx-auto text-primary" />
                    <p className="mt-2 text-sm font-semibold leading-tight">{h.label}</p>
                    <p className="text-[10px] text-muted-foreground">{h.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="bg-gradient-primary border-0 text-primary-foreground hover:opacity-90">
                  Enroll Now <ArrowRight size={16} />
                </Button>
                <Button size="lg" variant="outline" className="glass">
                  <Download size={16} /> Download Curriculum
                </Button>
                <Button size="lg" variant="ghost">
                  <PhoneCall size={16} /> Talk to a Counsellor
                </Button>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="animate-fade-up-delay-2 relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />
              <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
                <img
                  src={heroVisual}
                  alt="UI/UX design workspace with Figma screens, wireframes and design system"
                  width={1280}
                  height={1024}
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
              {/* Floating chips */}
              <div className="glass absolute -left-4 top-10 hidden rounded-2xl p-3 shadow-lg animate-float md:flex md:items-center md:gap-2">
                <PenTool size={18} className="text-primary" />
                <div>
                  <p className="text-xs font-semibold">Figma Mastery</p>
                  <p className="text-[10px] text-muted-foreground">Auto-layout · Variables</p>
                </div>
              </div>
              <div className="glass absolute -right-4 bottom-10 hidden rounded-2xl p-3 shadow-lg animate-float-slow md:flex md:items-center md:gap-2">
                <Bot size={18} className="text-accent" />
                <div>
                  <p className="text-xs font-semibold">AI Workflows</p>
                  <p className="text-[10px] text-muted-foreground">ChatGPT · Gemini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE OVERVIEW ──────────────────── */}
      <section className="container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Course Overview
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Become a <span className="text-gradient-brand">Job-Ready</span> UI/UX Designer
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
              Learn to design digital experiences from the ground up at the best UI/UX design institute in Delhi.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Researching users", "Mapping journeys", "Building wireframes", "Crafting interfaces", "Designing real-world products", "Working with AI tools"].map((t) => (
                <li key={t} className="glass flex items-center gap-2.5 rounded-xl p-3">
                  <CheckCircle2 size={16} className="shrink-0 text-primary" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
            <div className="glass-strong relative grid grid-cols-2 gap-4 rounded-3xl p-6">
              {[
                { v: "5,000+", l: "Students Trained" },
                { v: "120+", l: "Real Projects" },
                { v: "87%", l: "Placed in 6 Months" },
                { v: "4.9★", l: "Avg. Rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border/50 bg-card/40 p-5 text-center">
                  <p className="font-display text-3xl font-extrabold text-gradient-brand">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S IN STORE ──────────────────── */}
      <section className="relative border-y border-border bg-surface py-20 md:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="What's In Store"
            title={<>Everything you need to <span className="text-gradient-brand">ship great design</span></>}
            subtitle="8 focus areas. Hands-on practice. Built around real-world product workflows."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learnFeatures.map((f) => (
              <div key={f.title} className="glass glow-hover group rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <f.icon size={22} />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────── */}
      <section className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Toolstack"
          title={<>Tools You'll <span className="text-gradient-brand">Master</span></>}
          subtitle="Industry-standard design, AI and collaboration tools — fluently."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {toolGroups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.tools.map((t) => (
                  <span key={t} className="rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROADMAP ──────────────────────────── */}
      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="Learning Roadmap"
            title={<>Your 8-Phase Journey to a <span className="text-gradient-brand">Design Career</span></>}
            subtitle="A structured path from absolute beginner to portfolio-ready professional."
          />
          <div className="relative mt-14 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex min-w-max items-stretch gap-4 px-1">
              {roadmap.map((phase, i) => (
                <div key={phase} className="flex items-center gap-4">
                  <div className="glass relative w-56 rounded-2xl p-5 transition-transform hover:-translate-y-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Phase {i + 1}</span>
                    <h4 className="mt-2 font-display text-lg font-semibold">{phase}</h4>
                    <div className="mt-3 h-1 w-10 rounded-full bg-gradient-primary" />
                  </div>
                  {i < roadmap.length - 1 && <ArrowRight className="shrink-0 text-primary/60" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL MASTER ───────────────── */}
      <section className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Outcomes"
          title={<>What You'll <span className="text-gradient-brand">Master</span></>}
          subtitle="Skills that translate directly into design jobs and freelance work."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {masterCards.map((m) => (
            <div key={m.title} className="glass glow-hover rounded-2xl p-6">
              <m.icon size={22} className="text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU WALK AWAY WITH ──────────── */}
      <section className="relative overflow-hidden border-y border-border bg-surface py-20 md:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="Included Outcomes"
            title={<>What You <span className="text-gradient-brand">Walk Away With</span></>}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {walkAway.map((w) => (
              <div key={w} className="glass flex items-center gap-3 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-sm font-semibold">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAM STRUCTURE ────────────────── */}
      <section className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Program Structure"
          title={<>Two Levels. One <span className="text-gradient-brand">Transformation.</span></>}
          subtitle="A modular path designed to take you from foundations to AI-powered expertise."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {programs.map((p) => (
            <div
              key={p.level}
              className={`relative rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? "glass-strong border-primary/40 glow"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Recommended
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.level}</p>
              <h3 className="font-display mt-2 text-3xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{p.tag}</p>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-card/40 px-4 py-3">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm font-semibold">Duration: {p.duration}</span>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button className={`mt-8 w-full ${p.highlight ? "bg-gradient-primary border-0 text-primary-foreground hover:opacity-90" : ""}`} variant={p.highlight ? "default" : "outline"}>
                <Download size={16} /> Download Curriculum
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO PROJECTS ───────────────── */}
      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="Portfolio Projects"
            title={<>Ship 6 <span className="text-gradient-brand">Real-World Projects</span></>}
            subtitle="Each project is a polished case study you can show to recruiters and clients."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="group glass overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg font-semibold">{p.title}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">{p.tools}</span>
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold text-accent">{p.level}</span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">{p.industry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER OPPORTUNITIES ─────────────── */}
      <section className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Career Opportunities"
          title={<>Roles You'll Be <span className="text-gradient-brand">Ready For</span></>}
          subtitle="Salary ranges based on India's design hiring market."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerRoles.map((r) => (
            <div key={r.role} className="glass glow-hover flex items-center justify-between rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <TrendingUp size={18} />
                </div>
                <p className="font-semibold">{r.role}</p>
              </div>
              <span className="font-display text-sm font-bold text-primary">{r.salary}</span>
            </div>
          ))}
        </div>
        <div className="glass mt-10 rounded-2xl p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Career Support</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {careerSupport.map((s) => (
              <span key={s} className="rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ──────────────────── */}
      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="Success Stories"
            title={<>Designers Who <span className="text-gradient-brand">Made It</span></>}
            subtitle="Real grads. Real roles. Real outcomes."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {stories.map((s) => (
              <div key={s.name} className="glass glow-hover rounded-2xl p-6">
                <Quote size={22} className="text-primary/50" />
                <p className="mt-3 text-sm text-foreground/90">"{s.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary font-bold text-primary-foreground">
                    {s.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.role} · {s.company}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION ────────────────────── */}
      <section className="container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl" />
            <div className="glass-strong relative overflow-hidden rounded-3xl p-3">
              <img src={certificateImg} alt="Slate Academy certification preview" loading="lazy" width={1024} height={768} className="h-auto w-full rounded-2xl" />
            </div>
          </div>
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Certification
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Earn Credentials That <span className="text-gradient-brand">Open Doors</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Walk away with industry-recognized certifications that strengthen your resume and signal trust to hiring managers.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Trophy, t: "Slate Academy Certification", d: "Verified completion credential with QR validation." },
                { icon: Award, t: "Adobe Certification Support", d: "Prep & guidance for Adobe credentials." },
                { icon: ShieldCheck, t: "Industry Recognition", d: "Endorsed by our hiring partner network." },
              ].map((c) => (
                <li key={c.t} className="glass flex items-start gap-3 rounded-xl p-4">
                  <c.icon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">{c.t}</p>
                    <p className="text-sm text-muted-foreground">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ────────────────────────── */}
      <section className="border-y border-border bg-surface py-20 md:py-28" id="apply">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Talk to a Counsellor
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Not Sure Yet? <span className="text-gradient-brand">Let's Chat.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Free 1-on-1 counselling, personalized career roadmap, and a detailed curriculum walkthrough — no obligations.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Free 1-on-1 career counselling", "Personalized learning roadmap", "Detailed curriculum walkthrough", "Scholarship & EMI guidance"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 size={16} className="shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <LeadCaptureForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section className="container py-20 md:py-28">
        <SectionHeader eyebrow="FAQ" title={<>Questions, <span className="text-gradient-brand">Answered.</span></>} />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass mb-3 rounded-xl border-0 px-5">
              <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="container relative">
          <div className="glass-strong mx-auto max-w-4xl rounded-3xl p-10 text-center md:p-16">
            <GraduationCap size={44} className="mx-auto text-primary" />
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Start Your <span className="text-gradient-brand">UI/UX Design Career</span> Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Learn industry-standard design skills, build an impressive portfolio, gain AI-powered design expertise,
              and become job-ready with Slate Academy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-gradient-primary border-0 text-primary-foreground hover:opacity-90">
                Enroll Now <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline" className="glass">
                <Download size={16} /> Download Curriculum
              </Button>
              <Button size="lg" variant="ghost">
                <PhoneCall size={16} /> Talk to a Counsellor
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> 7-day money-back</span>
              <span className="flex items-center gap-1.5"><Award size={14} /> Certification included</span>
              <span className="flex items-center gap-1.5"><Sparkles size={14} /> AI-empowered curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY CTA ───────────────────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border glass-strong transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between gap-3 py-3">
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">UI/UX Design Program</p>
            <p className="text-xs text-muted-foreground">16 Weeks · Guaranteed Internship · AI-Empowered</p>
          </div>
          <div className="ml-auto flex gap-2">
            <Button size="sm" variant="outline" className="hidden md:inline-flex">
              <Download size={14} /> Curriculum
            </Button>
            <Button size="sm" asChild className="bg-gradient-primary border-0 text-primary-foreground hover:opacity-90">
              <a href="#apply">Enroll Now <ArrowRight size={14} /></a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
    </div>
  );
};

export default CourseDetail;
