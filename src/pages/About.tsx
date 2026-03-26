import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Users, TrendingUp, Lightbulb, Code, FolderKanban, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const whatWeDo = [
  { icon: Lightbulb, title: "Learn by Doing", desc: "Hands-on projects from day one, not just theory." },
  { icon: Code, title: "Industry-Relevant Courses", desc: "Curriculum designed with top companies in mind." },
  { icon: Users, title: "Mentorship & Support", desc: "1-on-1 guidance from experienced professionals." },
  { icon: TrendingUp, title: "Career Growth", desc: "Resume reviews, interview prep, and job referrals." },
];

const steps = [
  { icon: BookOpen, label: "Learn", desc: "Master core concepts" },
  { icon: Code, label: "Practice", desc: "Solve real challenges" },
  { icon: FolderKanban, label: "Build Projects", desc: "Create your portfolio" },
  { icon: Rocket, label: "Get Job Ready", desc: "Land your dream role" },
];

const team = [
  { name: "Priya Sharma", role: "CEO & Co-founder" },
  { name: "Alex Chen", role: "CTO & Co-founder" },
  { name: "Maya Johnson", role: "Head of Curriculum" },
];

const AboutPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="container py-20 text-center md:py-28">
      <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        We Help You Build Skills<br />
        <span className="text-primary">That Matter</span>
      </h1>
      <p className="animate-fade-up-delay-1 mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
        From beginner to job-ready with real-world learning.
      </p>
    </section>

    {/* Mission */}
    <section className="bg-surface">
      <div className="container py-16 text-center">
        <h2 className="animate-fade-up text-2xl font-bold">Our Mission</h2>
        <p className="animate-fade-up-delay-1 mx-auto mt-4 max-w-2xl text-muted-foreground">
          We believe education should be practical, accessible, and career-focused. Our platform connects learners with real-world projects, industry mentors, and the skills employers actually look for.
        </p>
      </div>
    </section>

    {/* What We Do */}
    <section className="container py-16">
      <h2 className="animate-fade-up text-center text-2xl font-bold">What We Do</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whatWeDo.map((item, i) => (
          <div
            key={item.title}
            className={`animate-fade-up-delay-${Math.min(i, 3)} group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg`}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <item.icon size={20} />
            </div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Approach */}
    <section className="bg-surface">
      <div className="container py-16">
        <h2 className="animate-fade-up text-center text-2xl font-bold">Our Approach</h2>
        <div className="mt-10 flex flex-col items-center gap-0 md:flex-row md:gap-0">
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
                <div className="mx-4 hidden h-px w-16 bg-border md:block" />
              )}
              {i < steps.length - 1 && (
                <div className="my-2 block h-8 w-px bg-border md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="container py-16">
      <h2 className="animate-fade-up text-center text-2xl font-bold">Meet the Team</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {team.map((member) => (
          <div key={member.name} className="w-56 rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
              {member.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h4 className="font-semibold">{member.name}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary">
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground">Start Learning Today</h2>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
          Join thousands of learners building real skills for real careers.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-6">
          <Link to="/">Explore Courses</Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default AboutPage;
