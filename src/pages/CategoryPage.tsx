import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Palette, Code, Megaphone, BarChart3 } from "lucide-react";

type SubCategory = { title: string; desc: string };

const categoryData: Record<string, { title: string; desc: string; icon: typeof Palette; color: string; subcategories: SubCategory[] }> = {
  design: {
    title: "Design",
    desc: "Master visual design, user experience, and creative tools.",
    icon: Palette,
    color: "bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
    subcategories: [
      { title: "Graphic Design", desc: "Branding, typography, and visual communication" },
      { title: "UI/UX Design", desc: "User interfaces, research, and prototyping" },
      { title: "Motion Design", desc: "Animation, video editing, and motion graphics" },
      { title: "Video Editing", desc: "Premiere Pro, After Effects, and storytelling" },
      { title: "3D Design", desc: "Blender, Spline, and 3D visualization" },
    ],
  },
  coding: {
    title: "Coding",
    desc: "Build web and mobile apps with modern frameworks.",
    icon: Code,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    subcategories: [
      { title: "MERN Stack", desc: "MongoDB, Express, React, Node.js" },
      { title: "MEAN Stack", desc: "MongoDB, Express, Angular, Node.js" },
      { title: "Full Stack Development", desc: "End-to-end web application development" },
      { title: "Frontend with React", desc: "Build modern UIs with React & TypeScript" },
      { title: "Python Development", desc: "Python for web, automation, and scripting" },
    ],
  },
  marketing: {
    title: "Marketing",
    desc: "Learn digital marketing strategies that drive real results.",
    icon: Megaphone,
    color: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    subcategories: [
      { title: "Social Media Marketing", desc: "Instagram, LinkedIn, X strategies" },
      { title: "Performance Marketing", desc: "Google Ads, Meta Ads, and analytics" },
      { title: "Content Marketing", desc: "Blog, video, and content strategy" },
      { title: "Email Marketing", desc: "Automation, funnels, and campaigns" },
      { title: "SEO", desc: "Search engine optimization fundamentals" },
      { title: "Marketing Basics", desc: "Core marketing principles and frameworks" },
    ],
  },
  data: {
    title: "Data",
    desc: "Analyze, visualize, and make data-driven decisions.",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    subcategories: [
      { title: "Data Analytics", desc: "Analysis, visualization, and dashboards" },
      { title: "Excel Mastery", desc: "Advanced formulas, pivot tables, and macros" },
      { title: "SQL", desc: "Database querying and management" },
      { title: "Python for Data", desc: "Pandas, NumPy, and data manipulation" },
    ],
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const data = categoryData[category || ""];

  if (!data) {
    return (
      <PageLayout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold">Category not found</h1>
          <Button asChild className="mt-4"><Link to="/courses">Browse Courses</Link></Button>
        </div>
      </PageLayout>
    );
  }

  const Icon = data.icon;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="container py-16 text-center md:py-24">
        <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${data.color}`}>
          <Icon size={32} />
        </div>
        <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl">
          {data.title} <span className="text-primary">Courses</span>
        </h1>
        <p className="animate-fade-up-delay-1 mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          {data.desc}
        </p>
      </section>

      {/* Subcategories */}
      <section className="container pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.subcategories.map((sub) => (
            <Link
              key={sub.title}
              to="/course"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300"
            >
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{sub.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{sub.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                View Courses <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default CategoryPage;
