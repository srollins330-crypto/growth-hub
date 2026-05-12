import { useEffect, useRef, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroVisual from "@/assets/hero-visual.jpg";
import {
  ArrowRight,
  Palette as PaletteIcon,
  Code2,
  Layers,
  Sparkles,
  Palette,
  Film,
  Layout,
  Box,
  Megaphone,
  BarChart3,
  Star,
  Quote,
  Zap,
  Trophy,
  GraduationCap,
  Briefcase,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ── Animated Counter ── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(end * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="font-display text-5xl font-bold text-gradient md:text-6xl">
      {val}
      {suffix}
    </span>
  );
}

/* ── Data ── */
const stats = [
  { value: 15, suffix: "+", title: "Skills That Matter", desc: "Curated courses for explorers, learners and go-getters alike.", icon: Sparkles },
  { value: 30, suffix: "+", title: "Learning by Doing", desc: "Assignments, projects and certificates to build real-world capabilities.", icon: Zap },
  { value: 48, suffix: "Y", title: "Industry Experience", desc: "The cumulative industry experience of our mentors.", icon: GraduationCap },
  { value: 96, suffix: "+", title: "Hiring Partners", desc: "Ample employment opportunities waiting to be fulfilled.", icon: Briefcase },
  { value: 128, suffix: "+", title: "Success Stories", desc: "Placement opportunities provided to our students.", icon: Trophy },
  { value: 5000, suffix: "+", title: "Slate-ers Strong", desc: "A growing community of ambitious learners building futures.", icon: Users },
];

const courses = [
  { icon: Palette, title: "Graphic Design", desc: "Tell visual stories through compelling designs made with the latest software.", tint: "from-pink-500/20 to-fuchsia-500/10" },
  { icon: Film, title: "Motion Graphics", desc: "Bring life to your visuals through animation and special effects.", tint: "from-orange-500/20 to-amber-500/10" },
  { icon: Layout, title: "UI/UX Design", desc: "Create aesthetic, engaging digital interfaces that impress and perform.", tint: "from-blue-500/20 to-cyan-500/10" },
  { icon: Box, title: "3D Design", desc: "Elevate ideas through space designs, product mock-ups and cinematic effects.", tint: "from-purple-500/20 to-indigo-500/10" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Become a sought-after marketer with sharp business insights and tools.", tint: "from-emerald-500/20 to-teal-500/10" },
  { icon: BarChart3, title: "Data Science & Analytics", desc: "Make sense of business data through the latest tools and techniques.", tint: "from-violet-500/20 to-blue-500/10" },
];

const testimonials = [
  { name: "Ananya R.", role: "UX Designer @ Google", quote: "Slate Academy didn't just teach me design — it gave me the confidence to ship work I'm actually proud of. Got hired in 8 months.", initials: "AR", rating: 5 },
  { name: "Rohan K.", role: "Full Stack Dev @ Razorpay", quote: "The mentorship felt like having a senior dev in my corner 24/7. Career switch made simple.", initials: "RK", rating: 5 },
  { name: "Priya M.", role: "Freelance Designer", quote: "I landed my first 3 clients within weeks of graduating. The portfolio I built here did the talking.", initials: "PM", rating: 5 },
  { name: "Karan S.", role: "Data Analyst @ Swiggy", quote: "Real projects, real feedback, real growth. No fluff, exactly what was promised.", initials: "KS", rating: 5 },
  { name: "Meera J.", role: "Motion Designer", quote: "Learning here felt less like a chore and more like a cheat code. Loved every minute.", initials: "MJ", rating: 5 },
];

/* ── Page ── */
const Index = () => {
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTIdx((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <PageLayout>
      {/* ─────────── HERO (Split Screen) ─────────── */}
      <section className="relative -mt-16 min-h-screen overflow-hidden bg-hero pt-24 md:-mt-20 md:pt-28">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px] animate-pulse-glow" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="container relative grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2 lg:gap-8 lg:py-0">
          {/* LEFT — Content */}
          <div className="relative z-10">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Cohort '26 enrolment is now live
            </div>

            <h1 className="animate-fade-up-delay-1 mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
              <span className="text-gradient">OWN YOUR SLATE.</span>
              <br />
              <span className="text-gradient-brand">WRITE YOUR FUTURE.</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Welcome to a place where ambition meets action. At Slate Academy, we help you write your story —
              while you hold the chalk. Real curiosity meets real skills, delivered through industry-ready courses
              in graphic design, UI/UX, data science, digital marketing and 3D design.
              <span className="mt-2 block text-foreground/70">No fluff. No filler. Just real growth — and real fun along the way.</span>
            </p>

            <div className="animate-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="group rounded-full bg-gradient-primary px-8 text-base shadow-xl shadow-primary/30 transition-all hover:shadow-primary/60 hover:opacity-95">
                <Link to="/courses">
                  Explore Courses
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-8 text-base backdrop-blur-md hover:bg-white/10">
                <Link to="/courses" className="story-link">Start Your Career</Link>
              </Button>
            </div>

            <div className="animate-fade-up-delay-3 mt-10 flex items-center gap-6 text-xs text-muted-foreground/80">
              <div className="flex -space-x-2">
                {["AR","RK","PM","MJ"].map((i, k) => (
                  <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-primary text-[10px] font-bold text-white" style={{ zIndex: 10 - k }}>{i}</div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">5,000+ Slate-ers</p>
                <p>building futures right now</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="animate-fade-up-delay-2 relative h-[420px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-card/40 shadow-2xl shadow-primary/20 backdrop-blur-sm">
              <img
                src={heroVisual}
                alt="Floating UI design screens, 3D objects and creative tools illustrating Slate Academy's modern learning experience"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/30" />

              <div className="animate-float absolute left-4 top-6 flex items-center gap-3 rounded-2xl border border-white/15 glass-strong px-4 py-3 shadow-xl sm:left-6 sm:top-10">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-white">
                  <PaletteIcon size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight">UI/UX Design</p>
                  <p className="text-[10px] text-muted-foreground">12 weeks · Live</p>
                </div>
              </div>

              <div className="animate-float-slow absolute right-4 top-1/3 flex items-center gap-3 rounded-2xl border border-white/15 glass-strong px-4 py-3 shadow-xl sm:right-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/80 text-white">
                  <Layers size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight">3D Design</p>
                  <p className="text-[10px] text-muted-foreground">Cohort '26</p>
                </div>
              </div>

              <div className="animate-float absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/15 glass-strong px-4 py-3 shadow-xl" style={{ animationDelay: "1.2s" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/80 text-white">
                  <Code2 size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight">96+ Hiring Partners</p>
                  <p className="text-[10px] text-muted-foreground">Placement-ready</p>
                </div>
              </div>

              <div className="absolute right-8 bottom-10 h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_8px_hsl(var(--primary)/0.6)] animate-pulse" />
              <div className="absolute left-1/2 top-12 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_16px_6px_hsl(var(--accent)/0.6)] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden pb-12">
          <div className="flex w-max animate-marquee gap-12 text-sm font-medium text-muted-foreground/60">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>✦ Skills In. Limits Out.</span>
                <span>✦ Fresh Slate. Fearless Future.</span>
                <span>✦ Dream It. Slate It. Own It.</span>
                <span>✦ Your Future. Your Rules.</span>
                <span>✦ New Skills. Fresh Start. Clean Slate.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── WHY SLATE ─────────── */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Slate</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Because <span className="text-gradient-brand">average</span> was never your thing.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Built for learners who want results, not certificates that collect dust.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md glow-hover"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon size={20} />
                  </div>
                  <Counter end={s.value} suffix={s.suffix} />
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── COURSES ─────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Catalogue</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                What's on your <span className="text-gradient-brand">slate?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                From design to data, from 3D to marketing — pick a skill, start a journey, own the outcome.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 backdrop-blur">
              <Link to="/courses">View all courses <ArrowRight size={14} /></Link>
            </Button>
          </div>

          {/* Horizontal scroll slider */}
          <div className="mt-12 -mx-4 overflow-x-auto scrollbar-hide px-4 pb-6">
            <div className="flex gap-6">
              {courses.map((c) => (
                <Link
                  key={c.title}
                  to="/courses"
                  className={`group relative flex min-w-[300px] max-w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 glow-hover sm:min-w-[340px]`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.tint} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-lg shadow-primary/20">
                      <c.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Know More
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            "Learning feels less like a chore and more like a cheat code."
          </p>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Slate-ers</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              What our students <span className="text-gradient-brand">actually say.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Real stories. Real outcomes. Zero scripted hype.</p>
          </div>

          {/* Featured testimonial */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 glass p-8 md:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <Quote size={36} className="text-primary/60" />
                <p key={tIdx} className="animate-fade-up mt-5 font-display text-2xl font-medium leading-relaxed md:text-3xl">
                  "{testimonials[tIdx].quote}"
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
                      {testimonials[tIdx].initials}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonials[tIdx].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[tIdx].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots & arrows */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => setTIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === tIdx ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTIdx((p) => (p + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <p className="mt-12 text-center text-xs uppercase tracking-widest text-muted-foreground/60">
            Real Google Reviews coming soon · Video testimonials in production
          </p>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 animate-gradient" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[120px] animate-pulse-glow" />

        <div className="container relative text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
            Your move
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-gradient">Your story isn't</span><br />
            <span className="text-gradient-brand">written yet.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
            Join thousands of learners who chose to pick up their slate and start building something brilliant.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-white px-10 text-base font-bold text-background shadow-2xl hover:bg-white/90">
              <Link to="/courses">ENROL FOR FREE <ArrowRight size={18} /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-8 text-base hover:bg-white/10">
              <Link to="/about">Talk to a mentor</Link>
            </Button>
          </div>
          <p className="mt-12 font-display text-sm italic text-foreground/60">
            "Let's build something brilliant. Starting with you."
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
