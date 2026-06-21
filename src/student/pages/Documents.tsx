import { Eye, Download, RefreshCcw, FileText } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { documents } from "../data/mock";

const Documents = () => (
  <StudentLayout title="Documents" subtitle="Your secure document vault.">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {documents.map((d) => (
        <div key={d.name} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText size={18} />
            </div>
            <StatusBadge tone={d.status === "Verified" ? "success" : d.status === "Locked" ? "neutral" : "warning"}>{d.status}</StatusBadge>
          </div>
          <h3 className="mt-3 text-sm font-semibold">{d.name}</h3>
          <div className="mt-1 text-xs text-muted-foreground">{d.size} · {d.date}</div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <Button size="sm" variant="outline"><Eye size={14} /></Button>
            <Button size="sm" variant="outline"><Download size={14} /></Button>
            <Button size="sm" variant="outline"><RefreshCcw size={14} /></Button>
          </div>
        </div>
      ))}
    </div>
  </StudentLayout>
);

export default Documents;
