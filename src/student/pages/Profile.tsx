import StudentLayout from "../components/StudentLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { student } from "../data/mock";

const Section = ({ title, children }: any) => (
  <div className="rounded-xl border border-border bg-card p-6">
    <h3 className="text-sm font-semibold">{title}</h3>
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
  </div>
);

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <Label className="text-xs text-muted-foreground">{label}</Label>
    <Input defaultValue={value} className="mt-1" />
  </div>
);

const Profile = () => (
  <StudentLayout title="Profile" subtitle="Manage your personal & academic information." actions={<Button size="sm">Save changes</Button>}>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-primary-foreground">AR</div>
          <div>
            <div className="text-base font-semibold">{student.name}</div>
            <div className="text-xs text-muted-foreground">{student.id}</div>
            <div className="text-xs text-muted-foreground">{student.course}</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg bg-secondary/60 p-2"><div className="text-muted-foreground">Batch</div><div className="mt-0.5 font-semibold">{student.batch.split(" · ")[0]}</div></div>
          <div className="rounded-lg bg-secondary/60 p-2"><div className="text-muted-foreground">Goal</div><div className="mt-0.5 font-semibold truncate">{student.goal}</div></div>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <Section title="Personal information">
          <Field label="Full name" value={student.name} />
          <Field label="Student ID" value={student.id} />
          <Field label="Mobile" value={student.mobile} />
          <Field label="Alternate" value={student.alt} />
          <Field label="Email" value={student.email} />
          <Field label="Date of birth" value={student.dob} />
          <Field label="Gender" value={student.gender} />
          <Field label="City" value={student.city} />
          <Field label="State" value={student.state} />
          <Field label="Pincode" value={student.pincode} />
        </Section>

        <Section title="Education">
          <Field label="Qualification" value={student.qualification} />
          <Field label="College" value={student.college} />
          <Field label="Degree" value={student.degree} />
          <Field label="Passing year" value={student.passingYear} />
        </Section>

        <Section title="Career">
          <Field label="Current status" value={student.status} />
          <Field label="Experience" value={student.experience} />
          <Field label="Career goal" value={student.goal} />
        </Section>
      </div>
    </div>
  </StudentLayout>
);

export default Profile;
