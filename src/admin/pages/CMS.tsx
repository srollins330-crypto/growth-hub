import { Eye, EyeOff, GripVertical, Plus, Save } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { homepageSections } from "../data/mock";

const CMS = () => (
  <AdminLayout
    title="Website CMS"
    subtitle="Edit homepage sections, SEO, and brand content."
    actions={<Button size="sm"><Save size={14} /> Publish Changes</Button>}
  >
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-xl border border-border bg-card lg:col-span-2">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h3 className="text-sm font-semibold">Homepage Sections</h3>
            <p className="text-xs text-muted-foreground">Drag to reorder. Toggle visibility.</p>
          </div>
          <Button variant="outline" size="sm"><Plus size={14} /> Add Section</Button>
        </div>
        <ul className="divide-y divide-border">
          {homepageSections.map((s) => (
            <li key={s.id} className="flex items-center gap-3 px-5 py-3">
              <GripVertical size={14} className="text-muted-foreground" />
              <div className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                {s.type}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">{s.title}</div>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                {s.visible ? <Eye size={14} /> : <EyeOff size={14} />}
              </button>
              <Button variant="ghost" size="sm">Edit</Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">SEO Controls</h3>
        <p className="text-xs text-muted-foreground">Homepage metadata</p>
        <div className="mt-4 space-y-3">
          <div>
            <label className="text-xs font-medium">Meta Title</label>
            <Input className="mt-1 h-9" defaultValue="Slate Academy — Learn Skills That Get You Hired" />
          </div>
          <div>
            <label className="text-xs font-medium">Meta Description</label>
            <Input className="mt-1 h-9" defaultValue="IGCSE, A Levels, SAT prep & more. Live classes, mentorship & outcomes." />
          </div>
          <div>
            <label className="text-xs font-medium">Keywords</label>
            <Input className="mt-1 h-9" defaultValue="IGCSE Dubai, A Levels, SAT prep, online tuition" />
          </div>
          <div>
            <label className="text-xs font-medium">Canonical URL</label>
            <Input className="mt-1 h-9" defaultValue="https://slate.academy/" />
          </div>
          <Button size="sm" className="w-full">Save SEO</Button>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default CMS;
