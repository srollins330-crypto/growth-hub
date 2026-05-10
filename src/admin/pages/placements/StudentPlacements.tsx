import { Plus } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import DataTable, { StatusBadge } from "../../components/DataTable";
import { Button } from "@/components/ui/button";
import { studentPlacements } from "../../data/mock";

const StudentPlacements = () => (
  <AdminLayout
    title="Student Placements"
    subtitle="Placement journey from interview to joining."
    actions={<Button size="sm"><Plus size={14} /> Log Placement</Button>}
  >
    <DataTable
      rows={studentPlacements}
      columns={[
        { key: "student", label: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
        { key: "company", label: "Company" },
        { key: "role", label: "Role" },
        { key: "ctc", label: "CTC" },
        { key: "status", label: "Status", render: (r) => <StatusBadge>{r.status}</StatusBadge> },
        { key: "date", label: "Date" },
      ]}
    />
  </AdminLayout>
);

export default StudentPlacements;
