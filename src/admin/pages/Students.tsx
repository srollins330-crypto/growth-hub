import { Download, Plus, Search } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StatusBadge from "../components/StatusBadge";
import { students } from "../data/mock";

const Students = () => (
  <AdminLayout
    title="Students"
    subtitle="Manage profiles, attendance, and payment status."
    actions={
      <>
        <Button variant="outline" size="sm"><Download size={14} /> Export</Button>
        <Button size="sm"><Plus size={14} /> Add Student</Button>
      </>
    }
  >
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <div className="relative flex-1 max-w-sm">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search by name or email…" className="h-9 pl-9" />
      </div>
      <div className="flex gap-1 rounded-lg border border-border bg-card p-1 text-xs">
        {["All", "Active", "On hold", "Alumni"].map((t, i) => (
          <button key={t} className={`rounded-md px-3 py-1.5 font-medium ${i === 0 ? "bg-secondary" : "text-muted-foreground hover:bg-secondary/60"}`}>
            {t}
          </button>
        ))}
      </div>
    </div>

    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-xs text-muted-foreground">
            <tr>
              <th className="px-5 py-3 text-left font-medium">Student</th>
              <th className="px-5 py-3 text-left font-medium">Course</th>
              <th className="px-5 py-3 text-left font-medium">Joined</th>
              <th className="px-5 py-3 text-left font-medium">Attendance</th>
              <th className="px-5 py-3 text-left font-medium">Fees</th>
              <th className="px-5 py-3 text-left font-medium">Status</th>
              <th className="px-5 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t border-border hover:bg-secondary/30">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-medium">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-muted-foreground">{s.course}</td>
                <td className="px-5 py-3 text-muted-foreground">{s.joined}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${s.attendance}%` }}
                      />
                    </div>
                    <span className="text-xs">{s.attendance}%</span>
                  </div>
                </td>
                <td className="px-5 py-3"><StatusBadge>{s.fees}</StatusBadge></td>
                <td className="px-5 py-3"><StatusBadge>{s.status}</StatusBadge></td>
                <td className="px-5 py-3 text-right">
                  <Button variant="ghost" size="sm">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
);

export default Students;
