import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Design", "Coding", "Marketing", "Data"] as const;

type Course = {
  title: string;
  category: string;
  tag: string;
  duration: string;
  href: string;
};

const courses: Course[] = [
  { title: "UI/UX Design", category: "Design", tag: "Beginner", duration: "6 months", href: "/course" },
  { title: "Graphic Design Mastery", category: "Design", tag: "Beginner", duration: "4 months", href: "/course" },
  { title: "Motion Design", category: "Design", tag: "Intermediate", duration: "3 months", href: "/course" },
  { title: "Full Stack (MERN)", category: "Coding", tag: "Intermediate", duration: "12 months", href: "/course" },
  { title: "Frontend with React", category: "Coding", tag: "Beginner", duration: "6 months", href: "/course" },
  { title: "Python Development", category: "Coding", tag: "Beginner", duration: "6 months", href: "/course" },
  { title: "Social Media Marketing", category: "Marketing", tag: "Beginner", duration: "3 months", href: "/course" },
  { title: "SEO & Content Strategy", category: "Marketing", tag: "Intermediate", duration: "4 months", href: "/course" },
  { title: "Data Analytics", category: "Data", tag: "Beginner", duration: "4 months", href: "/course" },
  { title: "SQL & Databases", category: "Data", tag: "Beginner", duration: "2 months", href: "/course" },
  { title: "Python for Data Science", category: "Data", tag: "Intermediate", duration: "6 months", href: "/course" },
  { title: "Performance Marketing", category: "Marketing", tag: "Advanced", duration: "3 months", href: "/course" },
];

const Courses = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="container py-16 text-center md:py-24">
        <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl">
          Explore <span className="text-primary">Courses</span>
        </h1>
        <p className="animate-fade-up-delay-1 mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          Find the perfect course to launch or level up your career.
        </p>
      </section>

      {/* Filter + Grid */}
      <section className="container pb-20">
        {/* Sticky filter bar */}
        <div className="sticky top-16 z-40 -mx-2 mb-8 flex gap-2 overflow-x-auto bg-background/80 px-2 py-3 backdrop-blur-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((c) => (
            <Link
              key={c.title}
              to={c.href}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300"
            >
              <div className="mb-3 aspect-[16/9] rounded-lg bg-accent" />
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  c.tag === "Beginner" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                    : c.tag === "Advanced" ? "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400"
                    : "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                }`}>
                  {c.tag}
                </span>
                <span className="text-xs text-muted-foreground">{c.duration}</span>
              </div>
              <h3 className="mt-2 font-semibold group-hover:text-primary transition-colors">{c.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                View <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Courses;
