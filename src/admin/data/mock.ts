// Centralized mock data for the admin panel.
// Replace with real API/Cloud queries when backend is wired up.

export const overviewStats = [
  { label: "Total Students", value: "1,284", delta: "+12.4%", trend: "up" as const },
  { label: "Active Courses", value: "24", delta: "+3", trend: "up" as const },
  { label: "Revenue (AED)", value: "284,500", delta: "+18.2%", trend: "up" as const },
  { label: "New Leads", value: "67", delta: "-4.1%", trend: "down" as const },
];

export const revenueSeries = [
  { month: "Jan", revenue: 18400, students: 420 },
  { month: "Feb", revenue: 21200, students: 468 },
  { month: "Mar", revenue: 24800, students: 530 },
  { month: "Apr", revenue: 26100, students: 612 },
  { month: "May", revenue: 29400, students: 705 },
  { month: "Jun", revenue: 32800, students: 812 },
  { month: "Jul", revenue: 35600, students: 940 },
  { month: "Aug", revenue: 38900, students: 1024 },
  { month: "Sep", revenue: 42100, students: 1128 },
  { month: "Oct", revenue: 45800, students: 1210 },
  { month: "Nov", revenue: 48200, students: 1262 },
  { month: "Dec", revenue: 52400, students: 1284 },
];

export const conversionSeries = [
  { stage: "Visitors", value: 12400 },
  { stage: "Leads", value: 1820 },
  { stage: "Trials", value: 640 },
  { stage: "Converted", value: 284 },
];

export type LeadStage = "New" | "Contacted" | "Trial Done" | "Converted";

export const leads: {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  stage: LeadStage;
  source: string;
  createdAt: string;
}[] = [
  { id: "L-1024", name: "Aarav Mehta", email: "aarav@example.com", phone: "+971 50 123 4567", course: "IGCSE Math", stage: "New", source: "Website", createdAt: "2h ago" },
  { id: "L-1023", name: "Sara Khan", email: "sara@example.com", phone: "+971 55 884 1290", course: "A Levels Physics", stage: "Contacted", source: "Instagram", createdAt: "5h ago" },
  { id: "L-1022", name: "Omar Hassan", email: "omar@example.com", phone: "+971 52 442 3399", course: "SAT Prep", stage: "Trial Done", source: "Referral", createdAt: "1d ago" },
  { id: "L-1021", name: "Lina Ahmed", email: "lina@example.com", phone: "+971 56 220 1144", course: "IGCSE English", stage: "Converted", source: "Google Ads", createdAt: "2d ago" },
  { id: "L-1020", name: "Yusuf Ali", email: "yusuf@example.com", phone: "+971 50 778 9012", course: "A Levels Bio", stage: "New", source: "Website", createdAt: "3d ago" },
  { id: "L-1019", name: "Maya Patel", email: "maya@example.com", phone: "+971 55 110 8847", course: "SAT Prep", stage: "Contacted", source: "Facebook", createdAt: "4d ago" },
  { id: "L-1018", name: "Hassan Raza", email: "hassan@example.com", phone: "+971 52 901 2233", course: "IGCSE Math", stage: "Trial Done", source: "Website", createdAt: "5d ago" },
  { id: "L-1017", name: "Noor Sheikh", email: "noor@example.com", phone: "+971 56 334 5566", course: "A Levels Chem", stage: "Converted", source: "Referral", createdAt: "1w ago" },
];

export const students = [
  { id: "S-2041", name: "Aarav Mehta", email: "aarav@example.com", course: "IGCSE Math", joined: "Mar 2025", status: "Active", attendance: 94, fees: "Paid" },
  { id: "S-2040", name: "Lina Ahmed", email: "lina@example.com", course: "IGCSE English", joined: "Feb 2025", status: "Active", attendance: 88, fees: "Paid" },
  { id: "S-2039", name: "Noor Sheikh", email: "noor@example.com", course: "A Levels Chem", joined: "Jan 2025", status: "Active", attendance: 96, fees: "Paid" },
  { id: "S-2038", name: "Daniel Cruz", email: "daniel@example.com", course: "SAT Prep", joined: "Jan 2025", status: "On hold", attendance: 62, fees: "Overdue" },
  { id: "S-2037", name: "Riya Joshi", email: "riya@example.com", course: "A Levels Physics", joined: "Dec 2024", status: "Active", attendance: 91, fees: "Paid" },
  { id: "S-2036", name: "Kabir Singh", email: "kabir@example.com", course: "IGCSE Math", joined: "Nov 2024", status: "Active", attendance: 85, fees: "Pending" },
];

export const courses = [
  { id: "C-01", name: "IGCSE Mathematics", level: "IGCSE", students: 184, teacher: "Dr. Anjali Rao", price: 1200, currency: "AED", status: "Live" },
  { id: "C-02", name: "IGCSE English Literature", level: "IGCSE", students: 142, teacher: "Mr. James Whitaker", price: 1100, currency: "AED", status: "Live" },
  { id: "C-03", name: "A Levels Physics", level: "A Levels", students: 96, teacher: "Dr. Karim Idris", price: 1800, currency: "AED", status: "Live" },
  { id: "C-04", name: "A Levels Chemistry", level: "A Levels", students: 88, teacher: "Ms. Priya Nair", price: 1800, currency: "AED", status: "Live" },
  { id: "C-05", name: "A Levels Biology", level: "A Levels", students: 74, teacher: "Dr. Hala Mansour", price: 1800, currency: "AED", status: "Live" },
  { id: "C-06", name: "SAT Preparation", level: "Test Prep", students: 212, teacher: "Mr. Daniel Cruz", price: 2400, currency: "AED", status: "Live" },
  { id: "C-07", name: "IELTS Academic", level: "Test Prep", students: 132, teacher: "Ms. Emma Clarke", price: 1600, currency: "AED", status: "Draft" },
  { id: "C-08", name: "IGCSE Computer Science", level: "IGCSE", students: 56, teacher: "Mr. Aman Verma", price: 1300, currency: "AED", status: "Live" },
];

export const classes = [
  { id: "CL-501", course: "IGCSE Math", teacher: "Dr. Anjali Rao", date: "Today", time: "4:00 PM", duration: "60 min", students: 18, platform: "Zoom" },
  { id: "CL-502", course: "A Levels Physics", teacher: "Dr. Karim Idris", date: "Today", time: "6:00 PM", duration: "90 min", students: 12, platform: "Google Meet" },
  { id: "CL-503", course: "SAT Prep", teacher: "Mr. Daniel Cruz", date: "Tomorrow", time: "5:00 PM", duration: "120 min", students: 24, platform: "Zoom" },
  { id: "CL-504", course: "IGCSE English", teacher: "Mr. James Whitaker", date: "Tomorrow", time: "7:00 PM", duration: "60 min", students: 16, platform: "Zoom" },
  { id: "CL-505", course: "A Levels Chem", teacher: "Ms. Priya Nair", date: "Wed", time: "4:30 PM", duration: "90 min", students: 14, platform: "Google Meet" },
];

export const teachers = [
  { id: "T-101", name: "Dr. Anjali Rao", email: "anjali@slate.ac", subject: "Mathematics", students: 184, classes: 12, rating: 4.9 },
  { id: "T-102", name: "Mr. James Whitaker", email: "james@slate.ac", subject: "English", students: 142, classes: 10, rating: 4.8 },
  { id: "T-103", name: "Dr. Karim Idris", email: "karim@slate.ac", subject: "Physics", students: 96, classes: 8, rating: 4.9 },
  { id: "T-104", name: "Ms. Priya Nair", email: "priya@slate.ac", subject: "Chemistry", students: 88, classes: 8, rating: 4.7 },
  { id: "T-105", name: "Dr. Hala Mansour", email: "hala@slate.ac", subject: "Biology", students: 74, classes: 6, rating: 4.8 },
  { id: "T-106", name: "Mr. Daniel Cruz", email: "daniel@slate.ac", subject: "SAT", students: 212, classes: 14, rating: 4.9 },
];

export const blogPosts = [
  { id: "B-09", title: "How to Score 8+ in IELTS Writing", category: "Test Prep", status: "Published", author: "Emma Clarke", date: "Apr 12, 2026" },
  { id: "B-08", title: "Top 5 Mistakes in IGCSE Math Exams", category: "IGCSE", status: "Published", author: "Anjali Rao", date: "Apr 08, 2026" },
  { id: "B-07", title: "A Levels vs IB: Which is Right for You?", category: "Guides", status: "Published", author: "Slate Editorial", date: "Apr 02, 2026" },
  { id: "B-06", title: "SAT Math Formula Sheet (2026)", category: "Test Prep", status: "Draft", author: "Daniel Cruz", date: "Mar 28, 2026" },
  { id: "B-05", title: "How Live Classes Improve Outcomes", category: "Insights", status: "Scheduled", author: "Slate Editorial", date: "Apr 22, 2026" },
];

export const homepageSections = [
  { id: "sec-hero", type: "Hero", title: "Become a Job-Ready UI/UX Designer", visible: true },
  { id: "sec-trust", type: "Trust Strip", title: "5,000+ students · 87% placement", visible: true },
  { id: "sec-services", type: "Services", title: "What we teach", visible: true },
  { id: "sec-testi", type: "Testimonials", title: "Loved by students", visible: true },
  { id: "sec-faq", type: "FAQ", title: "Frequently asked questions", visible: true },
  { id: "sec-cta", type: "CTA", title: "Start your design career today", visible: true },
];

export const payments = [
  { id: "INV-9821", student: "Aarav Mehta", course: "IGCSE Math", amount: 1200, currency: "AED", status: "Paid", date: "Apr 14" },
  { id: "INV-9820", student: "Lina Ahmed", course: "IGCSE English", amount: 1100, currency: "AED", status: "Paid", date: "Apr 13" },
  { id: "INV-9819", student: "Daniel Cruz", course: "SAT Prep", amount: 2400, currency: "AED", status: "Overdue", date: "Apr 10" },
  { id: "INV-9818", student: "Riya Joshi", course: "A Levels Physics", amount: 1800, currency: "AED", status: "Paid", date: "Apr 09" },
  { id: "INV-9817", student: "Kabir Singh", course: "IGCSE Math", amount: 1200, currency: "AED", status: "Pending", date: "Apr 08" },
  { id: "INV-9816", student: "Noor Sheikh", course: "A Levels Chem", amount: 1800, currency: "AED", status: "Paid", date: "Apr 06" },
];

export const recentActivity = [
  { who: "Aarav Mehta", what: "enrolled in IGCSE Math", when: "12 min ago" },
  { who: "Sara Khan", what: "booked a trial class", when: "38 min ago" },
  { who: "Dr. Anjali Rao", what: "uploaded a recording", when: "1 hr ago" },
  { who: "Lina Ahmed", what: "paid AED 1,100", when: "2 hr ago" },
  { who: "Daniel Cruz", what: "marked attendance for SAT Prep", when: "3 hr ago" },
];
