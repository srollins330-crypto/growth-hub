import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const courses = [
  "UI/UX Design",
  "Full Stack Development",
  "Data Analytics",
  "Digital Marketing",
  "Graphic Design",
];

const LeadCaptureForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 size={28} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold">Application Received!</h3>
        <p className="text-sm text-muted-foreground">
          Our counsellor will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-8 shadow-lg"
    >
      <h3 className="text-xl font-bold">Apply Now</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get a free counselling session & curriculum guide.
      </p>

      <div className="mt-6 space-y-4">
        <Input placeholder="Full Name" required maxLength={100} />
        <Input placeholder="Mobile Number" type="tel" required maxLength={15} pattern="[0-9]{10,15}" />
        <Input placeholder="Email Address" type="email" required maxLength={255} />
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Course Interested In" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        Apply Now
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. We respect your privacy.
      </p>
    </form>
  );
};

export default LeadCaptureForm;
