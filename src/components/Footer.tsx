import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-surface">
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h4 className="mb-3 text-sm font-bold text-foreground">
            Slate<span className="text-primary"> Academy</span>
          </h4>
          <p className="text-sm text-muted-foreground">
            Building skills that matter for the careers of tomorrow.
          </p>
        </div>
        <div>
          <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li><span className="text-muted-foreground">Courses</span></li>
            <li><span className="text-muted-foreground">Support</span></li>
            <li><span className="text-muted-foreground">FAQ</span></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Social</h5>
          <ul className="space-y-2 text-sm">
            <li><span className="text-muted-foreground">Twitter</span></li>
            <li><span className="text-muted-foreground">LinkedIn</span></li>
            <li><span className="text-muted-foreground">Instagram</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Slate Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
