import { Plus, Award, ShieldCheck } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import DataTable from "../../components/DataTable";
import { Button } from "@/components/ui/button";
import { certificates } from "../../data/mock";

const Certificates = () => (
  <AdminLayout
    title="Certificates"
    subtitle="Issue, verify, and manage student certificates."
    actions={<Button size="sm"><Plus size={14} /> Issue Certificate</Button>}
  >
    <DataTable
      rows={certificates}
      columns={[
        { key: "id", label: "Certificate ID", render: (r) => (
          <div className="flex items-center gap-2"><Award size={14} className="text-primary" /><span className="font-mono text-xs">{r.id}</span></div>
        ) },
        { key: "student", label: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
        { key: "course", label: "Course" },
        { key: "issued", label: "Issued" },
        { key: "verified", label: "Verified", render: (r) => r.verified ? (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400"><ShieldCheck size={12} />Verified</span>
        ) : <span className="text-xs text-muted-foreground">—</span> },
      ]}
    />
  </AdminLayout>
);

export default Certificates;
