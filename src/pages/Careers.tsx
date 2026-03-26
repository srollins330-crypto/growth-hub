import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Zap, Palette, Heart, MapPin, ExternalLink } from "lucide-react";

const perks = [
  { icon: Zap, title: "Fast Growth", desc: "Accelerate your career with rapid learning opportunities." },
  { icon: Palette, title: "Creative Freedom", desc: "Own your projects and bring bold ideas to life." },
  { icon: Heart, title: "Real Impact", desc: "Help millions of learners unlock their potential." },
  { icon: MapPin, title: "Flexible Work", desc: "Remote-first culture — work from anywhere." },
];

const roles = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote" },
  { title: "Product Designer", dept: "Design", location: "Remote" },
  { title: "Content Strategist", dept: "Marketing", location: "Remote" },
  { title: "Data Analyst", dept: "Data", location: "Hybrid — NYC" },
  { title: "Community Manager", dept: "Growth", location: "Remote" },
];

const CareersPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="container py-20 text-center md:py-28">
      <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        Build the Future of<br />
        <span className="text-primary">Learning With Us</span>
      </h1>
      <p className="animate-fade-up-delay-1 mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
        Join a team that helps people grow — and grow with them.
      </p>
    </section>

    {/* Why Work With Us */}
    <section className="bg-surface">
      <div className="container py-16">
        <h2 className="animate-fade-up text-center text-2xl font-bold">Why Work With Us</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <perk.icon size={20} />
              </div>
              <h3 className="font-semibold">{perk.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Roles */}
    <section className="container py-16">
      <h2 className="animate-fade-up text-center text-2xl font-bold">Open Roles</h2>
      <div className="mx-auto mt-10 max-w-2xl space-y-3">
        {roles.map((role) => (
          <div key={role.title} className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
            <div>
              <h4 className="font-semibold">{role.title}</h4>
              <p className="mt-0.5 text-sm text-muted-foreground">{role.dept} · {role.location}</p>
            </div>
            <Button size="sm" variant="outline" className="gap-1">
              Apply <ExternalLink size={14} />
            </Button>
          </div>
        ))}
      </div>
    </section>

    {/* Culture */}
    <section className="bg-surface">
      <div className="container py-16 text-center">
        <h2 className="animate-fade-up text-2xl font-bold">Our Culture</h2>
        <p className="animate-fade-up-delay-1 mx-auto mt-4 max-w-2xl text-muted-foreground">
          We're a team of curious builders who believe in learning by doing. We value ownership, radical honesty, and the kind of collaboration that turns good ideas into great products.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary">
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground">Don't see a role?</h2>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
          We're always looking for great people. Reach out anyway.
        </p>
        <Button size="lg" variant="secondary" className="mt-6">
          Send Resume
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default CareersPage;
