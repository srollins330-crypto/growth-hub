import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CalendarDays,
  FileText,
  Image as ImageIcon,
  CreditCard,
  MessagesSquare,
  BarChart3,
  Settings,
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Sparkles,
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
    label: "Overview",
    items: [{ to: "/admin", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "CRM",
    items: [
      { to: "/admin/leads", label: "Leads", icon: Sparkles },
      { to: "/admin/students", label: "Students", icon: Users },
    ],
  },
  {
    label: "Academy",
    items: [
      { to: "/admin/courses", label: "Courses", icon: BookOpen },
      { to: "/admin/classes", label: "Classes", icon: CalendarDays },
      { to: "/admin/teachers", label: "Teachers", icon: GraduationCap },
    ],
  },
  {
    label: "Website",
    items: [
      { to: "/admin/cms", label: "Pages", icon: FileText },
      { to: "/admin/blog", label: "Blog", icon: FileText },
      { to: "/admin/media", label: "Media", icon: ImageIcon },
    ],
  },
  {
    label: "Business",
    items: [
      { to: "/admin/payments", label: "Payments", icon: CreditCard },
      { to: "/admin/communication", label: "Communication", icon: MessagesSquare },
      { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/admin/settings", label: "Settings", icon: Settings },
    ],
  },
];

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("admin-theme") as "light" | "dark") || "light";
  });
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("admin-theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")) };
};

const SidebarContent = ({ onNavigate }: { onNavigate?: () => void }) => {
  const location = useLocation();
  return (
    <div className="flex h-full flex-col">
      <Link to="/admin" className="flex items-center gap-2 px-5 py-5" onClick={onNavigate}>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GraduationCap size={20} />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-bold">Slate Academy</span>
          <span className="text-[11px] text-muted-foreground">Admin Console</span>
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
                  item.to === "/admin"
                    ? location.pathname === "/admin"
                    : location.pathname.startsWith(item.to);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/admin"}
                    onClick={onNavigate}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
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
      </nav>

      <div className="mx-3 mb-4 rounded-xl border border-border bg-secondary/60 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Sparkles size={14} className="text-primary" />
          AI Insights
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Trial → paid conversion up 12% this month.
        </p>
      </div>
    </div>
  );
};

const AdminLayout = ({ children, title, subtitle, actions }: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) => {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72 border-r border-border bg-card">
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
        {/* Top bar */}
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
            <Input placeholder="Search students, courses, leads…" className="h-9 pl-9 bg-secondary/60 border-transparent focus-visible:bg-background" />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
              <Bell size={16} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
            </Button>
            <button className="flex items-center gap-2 rounded-lg border border-border px-2 py-1.5 hover:bg-secondary">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                SA
              </div>
              <div className="hidden text-left leading-tight md:block">
                <div className="text-xs font-semibold">Sara Admin</div>
                <div className="text-[10px] text-muted-foreground">Super Admin</div>
              </div>
              <ChevronDown size={14} className="hidden text-muted-foreground md:block" />
            </button>
          </div>
        </header>

        {/* Page header */}
        <div className="border-b border-border bg-card/40 px-4 py-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
            </div>
            {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
