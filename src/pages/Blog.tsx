import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "Design", "Coding", "Marketing", "Data"] as const;

type Post = {
  title: string;
  desc: string;
  category: string;
  readTime: string;
  featured?: boolean;
};

const posts: Post[] = [
  { title: "Why Every Designer Should Learn to Code", desc: "Bridging the gap between design and development can supercharge your career.", category: "Design", readTime: "5 min", featured: true },
  { title: "Top 10 Python Libraries for Data Science in 2026", desc: "A curated list of must-know libraries for aspiring data scientists.", category: "Data", readTime: "7 min", featured: true },
  { title: "The Future of No-Code Marketing Tools", desc: "How marketers are building campaigns without writing a single line of code.", category: "Marketing", readTime: "4 min", featured: true },
  { title: "Getting Started with TypeScript", desc: "A beginner-friendly guide to adding types to your JavaScript.", category: "Coding", readTime: "6 min" },
  { title: "UX Research on a Budget", desc: "Practical methods to validate your designs without spending thousands.", category: "Design", readTime: "4 min" },
  { title: "SQL Fundamentals You Need to Know", desc: "Master the basics of querying databases for any data role.", category: "Data", readTime: "5 min" },
  { title: "Content Marketing Playbook for Startups", desc: "Build an audience from zero with proven content strategies.", category: "Marketing", readTime: "6 min" },
  { title: "React Performance Tips", desc: "Simple techniques to make your React apps blazing fast.", category: "Coding", readTime: "5 min" },
];

const BlogPage = () => {
  const [active, setActive] = useState<string>("All");

  const featured = posts.filter((p) => p.featured);
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="container py-20 text-center md:py-28">
        <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Learn, Explore, <span className="text-primary">Grow</span>
        </h1>
        <p className="animate-fade-up-delay-1 mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Insights on design, coding, marketing & data.
        </p>
      </section>

      {/* Featured Posts */}
      <section className="bg-surface">
        <div className="container py-16">
          <h2 className="animate-fade-up text-2xl font-bold">Featured</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((post) => (
              <div key={post.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-accent" />
                <div className="p-5">
                  <span className="text-xs font-medium text-accent-foreground">{post.category}</span>
                  <h3 className="mt-2 font-semibold leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.desc}</p>
                  <Button variant="link" className="mt-3 h-auto p-0 text-sm">Read More →</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + All Posts */}
      <section className="container py-16">
        <h2 className="animate-fade-up text-2xl font-bold">All Posts</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <div key={post.title} className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-accent px-2 py-0.5 font-medium text-accent-foreground">{post.category}</span>
                <span>{post.readTime} read</span>
              </div>
              <h3 className="mt-3 font-semibold leading-snug">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.desc}</p>
              <Button variant="link" className="mt-3 h-auto p-0 text-sm">Read →</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary">
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground">Stay Updated</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Get the latest articles, tips, and resources delivered to your inbox.
          </p>
          <div className="mx-auto mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border-0 bg-primary-foreground/20 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
