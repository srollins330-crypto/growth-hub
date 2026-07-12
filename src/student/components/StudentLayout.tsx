import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, FileBadge, CalendarCheck, Briefcase, Trophy,
  CreditCard, FileText, User, LifeBuoy, Search, Bell, Sun, Moon, Menu, X,
  ChevronDown, GraduationCap, Award, Upload, Receipt, Video, Sparkles, LogOut, Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type NavGroup = {
  label: string;
  items: { to: string; label: string; icon: typeof LayoutDashboard }[];
};

const NAV: NavGroup[] = [
  {
    label: "Main Menu",
    items: [
      { to: "/student", label: "Dashboard", icon: LayoutDashboard },
      { to: "/student/course", label: "My Course", icon: BookOpen },
      { to: "/student/assignments", label: "Assignments", icon: FileBadge },
      { to: "/student/attendance", label: "Attendance", icon: CalendarCheck },
      { to: "/student/portfolio", label: "Portfolio", icon: Trophy },
      { to: "/student/placements", label: "Placements", icon: Briefcase },
      { to: "/student/payments", label: "Payments", icon: CreditCard },
      { to: "/student/documents", label: "Documents", icon: FileText },
      { to: "/student/profile", label: "Profile", icon: User },
      { to: "/student/support", label: "Support", icon: LifeBuoy },
    ],
  },
];

const QUICK = [
  { label: "Download Certificate", icon: Award, to: "/student/certificate" },
  { label: "Upload Assignment", icon: Upload, to: "/student/upload-assignment" },
  { label: "View Fee Receipt", icon: Receipt, to: "/student/fee-receipt" },
  { label: "Book Mentor Session", icon: Video, to: "/student/book-mentor" },
];

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("student-theme") as "light" | "dark") || "dark";
  });
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    localStorage.setItem("student-theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")) };
};

const SidebarContent = ({ onNavigate }: { onNavigate?: () => void }) => {
  const location = useLocation();
  return (
    <div className="flex h-full flex-col">
      <Link to="/student" className="flex items-center gap-2 px-5 py-5" onClick={onNavigate}>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <GraduationCap size={20} />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-bold">Slate Academy</span>
          <span className="text-[11px] text-muted-foreground">Student Portal</span>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        {NAV.map((group) => (
          <div key={group.label} className="mb-5">
            <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {group.label}
            </div>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.to === "/student"
                    ? location.pathname === "/student"
                    : location.pathname === item.to;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/student"}
                    onClick={onNavigate}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    <Icon size={16} />
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mb-5">
          <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Quick Actions
          </div>
          <div className="flex flex-col gap-0.5">
            {QUICK.map((q) => {
              const Icon = q.icon;
              return (
                <NavLink
                  key={q.label}
                  to={q.to}
                  onClick={onNavigate}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  <Icon size={16} />
                  {q.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="mx-3 mb-4 rounded-xl border border-border bg-gradient-to-br from-primary/10 via-accent/10 to-transparent p-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Sparkles size={14} className="text-primary" />
          Streak: 12 days
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Keep going! You're 78% placement ready.
        </p>
      </div>
    </div>
  );
};

const StudentLayout = ({ children, title, subtitle, actions }: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) => {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card lg:block">
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 border-r border-border bg-card overflow-y-auto">
            <button
              className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground hover:bg-secondary"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
          <button
            className="rounded-md p-2 text-muted-foreground hover:bg-secondary lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
          <div className="relative hidden flex-1 max-w-md md:block">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search lessons, assignments, mentors…" className="h-9 pl-9 bg-secondary/60 border-transparent focus-visible:bg-background" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
              <Bell size={16} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Settings" className="hidden md:inline-flex">
              <Settings size={16} />
            </Button>
            <button className="flex items-center gap-2 rounded-lg border border-border px-2 py-1.5 hover:bg-secondary">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-primary-foreground">AR</div>
              <div className="hidden text-left leading-tight md:block">
                <div className="text-xs font-semibold">Aarav Patel</div>
                <div className="text-[10px] text-muted-foreground">SLT-2025-1042 · UI/UX · Batch B27</div>
              </div>
              <ChevronDown size={14} className="hidden text-muted-foreground md:block" />
            </button>
            <Button variant="ghost" size="icon" aria-label="Logout" className="hidden md:inline-flex">
              <LogOut size={16} />
            </Button>
          </div>
        </header>

        <div className="border-b border-border bg-card/40 px-4 py-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
            </div>
            {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
          </div>
        </div>

        <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
};

export default StudentLayout;
