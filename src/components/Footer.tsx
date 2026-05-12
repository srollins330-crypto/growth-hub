import { Link } from "react-router-dom";
import { Sparkles, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border bg-surface">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold">
              Slate<span className="text-gradient-brand"> Academy</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Your slate is yours. It's time to write something worth reading. Real skills,
            real growth, real fun along the way.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/60 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</h5>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="text-foreground/80 hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Learn</h5>
          <ul className="space-y-3 text-sm">
            <li><Link to="/courses" className="text-foreground/80 hover:text-primary transition-colors">Courses</Link></li>
            <li><Link to="/support" className="text-foreground/80 hover:text-primary transition-colors">Support</Link></li>
            <li><Link to="/support" className="text-foreground/80 hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stay Sharp</h5>
          <p className="text-sm text-muted-foreground">New skills. Fresh start. Clean slate.</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Slate Academy. All rights reserved.</p>
        <p>Skills In. Limits Out.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
