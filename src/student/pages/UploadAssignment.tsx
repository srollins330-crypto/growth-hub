import { useState } from "react";
import { Upload, FileBadge, X, Link2, CheckCircle2, Clock } from "lucide-react";
import StudentLayout from "../components/StudentLayout";
import StatusBadge from "@/admin/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { assignments } from "../data/mock";

const UploadAssignment = () => {
  const [files, setFiles] = useState<{ name: string; size: string }[]>([
    { name: "wireframes-v3.fig", size: "4.8 MB" },
  ]);
  const [selected, setSelected] = useState(assignments.find((a) => a.status === "Pending")?.name ?? assignments[0].name);

  return (
    <StudentLayout
      title="Upload Assignment"
      subtitle="Submit your work for mentor review. PDF, Figma link or ZIP up to 50MB."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <label className="text-xs font-semibold text-muted-foreground">Assignment</label>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              {assignments.filter((a) => a.status !== "Approved").map((a) => (
                <option key={a.name} value={a.name}>{a.name} — due {a.due}</option>
              ))}
            </select>

            <div className="mt-6">
              <label className="text-xs font-semibold text-muted-foreground">Upload files</label>
              <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 px-6 py-10 text-center hover:border-primary/60 hover:bg-secondary/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Upload size={20} />
                </div>
                <div className="mt-3 text-sm font-medium">Drag & drop or click to browse</div>
                <div className="mt-1 text-xs text-muted-foreground">PDF, ZIP, PNG, JPG · Max 50 MB</div>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    const list = Array.from(e.target.files ?? []).map((f) => ({
                      name: f.name,
                      size: `${(f.size / 1024 / 1024).toFixed(1)} MB`,
                    }));
                    setFiles((prev) => [...prev, ...list]);
                  }}
                />
              </label>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm">
                      <div className="flex items-center gap-2">
                        <FileBadge size={14} className="text-primary" />
                        <span className="font-medium">{f.name}</span>
                        <span className="text-xs text-muted-foreground">{f.size}</span>
                      </div>
                      <button
                        className="rounded-md p-1 text-muted-foreground hover:bg-background"
                        onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold text-muted-foreground">Or paste a link (Figma, Behance, Loom)</label>
              <div className="relative mt-2">
                <Link2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="https://figma.com/file/…" className="pl-9" />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold text-muted-foreground">Notes for mentor (optional)</label>
              <Textarea placeholder="Anything you want your mentor to focus on…" className="mt-2 min-h-24" />
            </div>

            <div className="mt-6 flex items-center justify-end gap-2">
              <Button variant="outline" size="sm">Save draft</Button>
              <Button size="sm"><Upload size={14} /> Submit for review</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">Submission checklist</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {["Files under 50 MB", "Cover screen included", "Design tokens documented", "Named as per convention"].map((c) => (
                <li key={c} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 size={14} className="text-emerald-500" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">Recent submissions</h3>
            <ul className="mt-3 space-y-3">
              {assignments.slice(0, 4).map((a) => (
                <li key={a.name} className="flex items-start gap-3">
                  <Clock size={14} className="mt-1 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{a.name}</div>
                    <div className="text-xs text-muted-foreground">Due {a.due}</div>
                  </div>
                  <StatusBadge tone={a.status === "Approved" ? "success" : a.status === "Pending" ? "warning" : "info"}>
                    {a.status}
                  </StatusBadge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default UploadAssignment;
