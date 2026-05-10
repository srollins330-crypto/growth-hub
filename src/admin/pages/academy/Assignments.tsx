import { Plus } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import DataTable, { StatusBadge } from "../../components/DataTable";
import { Button } from "@/components/ui/button";
import { assignments } from "../../data/mock";

const Assignments = () => (
  <AdminLayout
    title="Assignments"
    subtitle="Track submissions and grading across all courses."
    actions={<Button size="sm"><Plus size={14} /> New Assignment</Button>}
  >
    <DataTable
      rows={assignments}
      columns={[
        { key: "title", label: "Title", render: (r) => <span className="font-medium">{r.title}</span> },
        { key: "course", label: "Course" },
        { key: "submissions", label: "Submissions" },
        { key: "due", label: "Due" },
        { key: "status", label: "Status", render: (r) => <StatusBadge>{r.status}</StatusBadge> },
      ]}
    />
  </AdminLayout>
);

export default Assignments;
