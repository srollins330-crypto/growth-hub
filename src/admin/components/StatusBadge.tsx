import { cn } from "@/lib/utils";

const TONES: Record<string, string> = {
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  danger: "bg-destructive/10 text-destructive border-destructive/20",
  info: "bg-primary/10 text-primary border-primary/20",
  neutral: "bg-secondary text-muted-foreground border-border",
};

const map = (label: string): keyof typeof TONES => {
  const k = label.toLowerCase();
  if (["paid", "active", "live", "published", "converted", "completed"].includes(k)) return "success";
  if (["pending", "draft", "scheduled", "trial done", "contacted", "on hold"].includes(k)) return "warning";
  if (["overdue", "failed", "cancelled"].includes(k)) return "danger";
  if (["new"].includes(k)) return "info";
  return "neutral";
};

const StatusBadge = ({ children, tone }: { children: string; tone?: keyof typeof TONES }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
      TONES[tone || map(children)],
    )}
  >
    {children}
  </span>
);

export default StatusBadge;
