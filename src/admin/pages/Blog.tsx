import { Plus, Search } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StatusBadge from "../components/StatusBadge";
import { blogPosts } from "../data/mock";

const Blog = () => (
  <AdminLayout
    title="Blog"
    subtitle="Write, schedule, and publish posts."
    actions={<Button size="sm"><Plus size={14} /> New Post</Button>}
  >
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <div className="relative flex-1 max-w-sm">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search posts…" className="h-9 pl-9" />
      </div>
    </div>

    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <table className="w-full text-sm">
        <thead className="bg-secondary/40 text-xs text-muted-foreground">
          <tr>
            <th className="px-5 py-3 text-left font-medium">Title</th>
            <th className="px-5 py-3 text-left font-medium">Category</th>
            <th className="px-5 py-3 text-left font-medium">Author</th>
            <th className="px-5 py-3 text-left font-medium">Status</th>
            <th className="px-5 py-3 text-left font-medium">Date</th>
            <th className="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((p) => (
            <tr key={p.id} className="border-t border-border hover:bg-secondary/30">
              <td className="px-5 py-3 font-medium">{p.title}</td>
              <td className="px-5 py-3 text-muted-foreground">{p.category}</td>
              <td className="px-5 py-3 text-muted-foreground">{p.author}</td>
              <td className="px-5 py-3"><StatusBadge>{p.status}</StatusBadge></td>
              <td className="px-5 py-3 text-muted-foreground">{p.date}</td>
              <td className="px-5 py-3 text-right">
                <Button variant="ghost" size="sm">Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </AdminLayout>
);

export default Blog;
