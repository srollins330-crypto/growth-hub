import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Code,
  BarChart3,
  Megaphone,
  Users,
  Lightbulb,
  Briefcase,
  BookOpen,
  FolderKanban,
  Rocket,
  CheckCircle2,
  Quote,
  GraduationCap,
  Trophy,
  TrendingUp,
} from "lucide-react";

/* ─── Data ─── */

const stats = [
  { value: "15,000+", label: "Students Enrolled" },
  { value: "94%", label: "Completion Rate" },
  { value: "87%", label: "Got Hired" },
  { value: "4.9★", label: "Average Rating" },
];

const categories = [
  { icon: Palette, title: "Design", desc: "UI/UX, Graphic Design, Motion & 3D", href: "/courses/design", color: "bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-400" },
  { icon: Code, title: "Coding", desc: "Full Stack, MERN, MEAN & more", href: "/courses/coding", color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400" },
  { icon: Megaphone, title: "Marketing", desc: "SEO, Social Media, Content & Ads", href: "/courses/marketing", color: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400" },
  { icon: BarChart3, title: "Data", desc: "Analytics, SQL, Python & Excel", href: "/courses/data", color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400" },
];

const valueProps = [
  { icon: Lightbulb, title: "Learn by Doing", desc: "Real projects from day one — not just theory." },
  { icon: Users, title: "Expert Mentorship", desc: "1-on-1 guidance from industry professionals." },
  { icon: Briefcase, title: "Career Support", desc: "Resume reviews, mock interviews & job referrals." },
];

const featuredCourses = [
  { title: "UI/UX Design", tag: "Beginner", duration: "6 months", href: "/course" },
  { title: "Full Stack Development", tag: "Intermediate", duration: "12 months", href: "/courses/coding" },
  { title: "Data Analytics", tag: "Beginner", duration: "4 months", href: "/courses/data" },
  { title: "Social Media Marketing", tag: "Beginner", duration: "3 months", href: "/courses/marketing" },
  { title: "Graphic Design", tag: "Beginner", duration: "6 months", href: "/courses/design" },
];

const steps = [
  { icon: BookOpen, label: "Learn", desc: "Master core concepts" },
  { icon: Code, label: "Practice", desc: "Solve real challenges" },
  { icon: FolderKanban, label: "Build", desc: "Create your portfolio" },
  { icon: Rocket, label: "Get Hired", desc: "Land your dream role" },
];

const testimonials = [
  { name: "Ananya R.", role: "UX Designer at Google", quote: "Slate Academy's hands-on approach got me my dream job in 8 months.", initials: "AR" },
  { name: "Rohan K.", role: "Full Stack Dev at Razorpay", quote: "The mentorship and real projects made all the difference in my career switch.", initials: "RK" },
  { name: "Priya M.", role: "Freelance Designer", quote: "I landed my first 3 clients within weeks of graduating. Incredible value.", initials: "PM" },
];

/* ─── Page ─── */
const Index = () => (
  <PageLayout>
    {/* ── HERO ── */}
    <section className="container py-20 text-center md:py-28">
      <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        Learn Skills That Actually<br />
        <span className="text-primary">Get You Hired</span>
      </h1>
      <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
        Design, Code, Market & Analyze — with real-world projects and career support.
      </p>
      <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link to="/courses">Start Learning <ArrowRight size={16} /></Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/courses">Explore Courses</Link>
        </Button>
      </div>
    </section>

    {/* ── TRUST STRIP ── */}
    <section className="border-y border-border bg-surface">
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-foreground md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CATEGORIES ── */}
    <section className="container py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
        What Do You Want to Learn?
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to={cat.href}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}>
              <cat.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold">{cat.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Explore <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* ── VALUE PROPOSITION ── */}
    <section className="bg-surface">
      <div className="container py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Why Slate Academy?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <v.icon size={20} />
              </div>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FEATURED COURSES ── */}
    <section className="container py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Courses</h2>
        <Button asChild variant="ghost" className="hidden sm:flex">
          <Link to="/courses">View All <ArrowRight size={14} /></Link>
        </Button>
      </div>
      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {featuredCourses.map((c) => (
          <Link
            key={c.title}
            to={c.href}
            className="min-w-[260px] shrink-0 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md hover:-translate-y-0.5 duration-300"
          >
            <div className="mb-3 aspect-[16/9] rounded-lg bg-accent" />
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{c.tag}</span>
              <span className="text-xs text-muted-foreground">{c.duration}</span>
            </div>
            <h3 className="mt-2 font-semibold">{c.title}</h3>
          </Link>
        ))}
      </div>
      <Button asChild variant="outline" className="mt-4 w-full sm:hidden">
        <Link to="/courses">View All Courses</Link>
      </Button>
    </section>

    {/* ── LEARNING FLOW ── */}
    <section className="bg-surface">
      <div className="container py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Your Learning Journey
        </h2>
        <div className="mt-10 flex flex-col items-center gap-0 md:flex-row md:justify-center md:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon size={22} />
                </div>
                <h4 className="mt-3 text-sm font-bold">{step.label}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-6 hidden h-px w-16 bg-border md:block" />
              )}
              {i < steps.length - 1 && (
                <div className="my-2 block h-8 w-px bg-border md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <section className="container py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
        What Our Students Say
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
            <Quote size={20} className="text-primary/40" />
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

    {/* ── FINAL CTA ── */}
    <section className="bg-primary">
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
          Start Your Learning Journey
        </h2>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
          Join 15,000+ learners building real skills for real careers.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-6">
          <Link to="/courses">Explore Courses <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default Index;
