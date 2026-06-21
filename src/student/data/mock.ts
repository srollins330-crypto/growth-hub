export const student = {
  name: "Aarav Patel",
  firstName: "Aarav",
  id: "SLT-2025-1042",
  course: "UI/UX Design Professional",
  batch: "Batch B27 · Weekend",
  email: "aarav.patel@gmail.com",
  mobile: "+91 98102 44512",
  alt: "+91 91234 56789",
  dob: "12 Mar 2002",
  gender: "Male",
  address: "B-204, Lotus Heights, Andheri West",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400053",
  qualification: "B.Des (Communication Design)",
  college: "Symbiosis Institute of Design",
  degree: "Bachelor's",
  passingYear: "2024",
  status: "Fresher",
  experience: "0–1 yr",
  goal: "Product Designer at a SaaS startup",
};

export const kpis = {
  progress: 65,
  attendance: 92,
  projects: { done: 7, total: 10 },
  placement: 78,
  fees: 10000,
  nextClass: { date: "Mon, 23 Jun", time: "7:00 PM IST", topic: "Design Systems Deep Dive" },
};

export const modules = [
  { name: "Introduction to Design", pct: 100, status: "Completed", last: "12 Apr", feedback: "Excellent grasp of fundamentals." },
  { name: "UI Design Fundamentals", pct: 100, status: "Completed", last: "28 Apr", feedback: "Strong visual hierarchy." },
  { name: "Typography", pct: 100, status: "Completed", last: "06 May", feedback: "Refined type pairings." },
  { name: "Color Theory", pct: 100, status: "Completed", last: "14 May", feedback: "Great use of accessible palettes." },
  { name: "Design Systems", pct: 80, status: "In Progress", last: "18 Jun", feedback: "Tokenize spacing scale." },
  { name: "Wireframing", pct: 60, status: "In Progress", last: "20 Jun", feedback: "Iterate on low-fi flows." },
  { name: "UX Research", pct: 30, status: "In Progress", last: "21 Jun", feedback: "Define personas next." },
  { name: "User Flows", pct: 10, status: "Pending", last: "—", feedback: "Starts next week." },
  { name: "Prototyping", pct: 0, status: "Pending", last: "—", feedback: "—" },
  { name: "Portfolio Development", pct: 0, status: "Pending", last: "—", feedback: "—" },
  { name: "Interview Preparation", pct: 0, status: "Pending", last: "—", feedback: "—" },
];

export const attendance = {
  current: 92,
  required: 75,
  present: 46,
  absent: 4,
  leave: 2,
  monthly: [
    { m: "Jan", v: 95 }, { m: "Feb", v: 88 }, { m: "Mar", v: 91 },
    { m: "Apr", v: 96 }, { m: "May", v: 90 }, { m: "Jun", v: 92 },
  ],
};

export const assignments = [
  { name: "Wireframe a Food Delivery App", due: "24 Jun", status: "Pending", grade: "—", feedback: "—" },
  { name: "Build Color Palette System", due: "18 Jun", status: "Submitted", grade: "—", feedback: "Awaiting review" },
  { name: "Typography Pairing Study", due: "10 Jun", status: "Under Review", grade: "—", feedback: "—" },
  { name: "Design System Tokens", due: "02 Jun", status: "Approved", grade: "A", feedback: "Clean and scalable." },
  { name: "UX Research Plan", due: "26 Jun", status: "Pending", grade: "—", feedback: "—" },
  { name: "Mobile App Onboarding", due: "20 May", status: "Approved", grade: "A+", feedback: "Outstanding flow." },
];

export const portfolioLinks = [
  { label: "Behance", value: "behance.net/aaravpatel", verified: true },
  { label: "Dribbble", value: "dribbble.com/aaravp", verified: true },
  { label: "Figma", value: "figma.com/@aaravpatel", verified: true },
  { label: "Framer", value: "aarav.framer.website", verified: false },
  { label: "Personal Website", value: "aaravpatel.design", verified: false },
];

export const projects = [
  { name: "Food Delivery App", tag: "Mobile", pct: 100 },
  { name: "Banking App", tag: "Mobile", pct: 85 },
  { name: "Travel App", tag: "Mobile", pct: 70 },
  { name: "Analytics Dashboard", tag: "SaaS", pct: 90 },
  { name: "E-commerce Website", tag: "Web", pct: 60 },
  { name: "Fitness Mobile App", tag: "Mobile", pct: 40 },
  { name: "SaaS Product Design", tag: "SaaS", pct: 20 },
];

export const placement = {
  resume: "Under Review",
  portfolio: "Approved",
  mockScore: 82,
  applied: 14,
  upcoming: 3,
  readiness: 78,
  pipeline: [
    { stage: "Resume Building", done: true },
    { stage: "Portfolio Completion", done: true },
    { stage: "Mock Interview", done: true },
    { stage: "Job Applications", done: true },
    { stage: "Interview Round", done: false },
    { stage: "Selected", done: false },
  ],
  companies: [
    { name: "Razorpay", role: "Product Designer", status: "Applied" },
    { name: "Zomato", role: "UI Designer", status: "Interview" },
    { name: "CRED", role: "Product Designer", status: "Interview" },
    { name: "Swiggy", role: "Visual Designer", status: "Applied" },
    { name: "Freshworks", role: "Product Designer", status: "Shortlisted" },
  ],
};

export const payments = {
  total: 65000,
  registration: 5000,
  scholarship: 5000,
  discount: 2000,
  paid: 53000,
  pending: 10000,
  nextDate: "10 Jul 2026",
  history: [
    { receipt: "RCP-1042-04", date: "10 Jun 2026", amount: 12000, mode: "UPI", status: "Paid" },
    { receipt: "RCP-1042-03", date: "10 May 2026", amount: 12000, mode: "Card", status: "Paid" },
    { receipt: "RCP-1042-02", date: "10 Apr 2026", amount: 12000, mode: "Netbanking", status: "Paid" },
    { receipt: "RCP-1042-01", date: "10 Mar 2026", amount: 17000, mode: "UPI", status: "Paid" },
  ],
  installments: [
    { label: "Installment 1", date: "10 Mar", paid: true },
    { label: "Installment 2", date: "10 Apr", paid: true },
    { label: "Installment 3", date: "10 May", paid: true },
    { label: "Installment 4", date: "10 Jun", paid: true },
    { label: "Installment 5", date: "10 Jul", paid: false },
    { label: "Final", date: "10 Aug", paid: false },
  ],
};

export const documents = [
  { name: "Aadhaar Card", size: "1.2 MB", date: "01 Mar 2026", status: "Verified" },
  { name: "PAN Card", size: "640 KB", date: "01 Mar 2026", status: "Verified" },
  { name: "Passport Photo", size: "320 KB", date: "01 Mar 2026", status: "Verified" },
  { name: "Resume.pdf", size: "1.8 MB", date: "12 Jun 2026", status: "Under Review" },
  { name: "Offer Letter", size: "210 KB", date: "26 Feb 2026", status: "Verified" },
  { name: "Course Certificate", size: "—", date: "—", status: "Locked" },
];

export const mentor = {
  name: "Riya Kapoor",
  title: "Sr. Product Designer @ Razorpay",
  exp: "8 yrs",
  email: "riya@slate.academy",
  phone: "+91 90000 22221",
};

export const notifications = [
  { type: "Class", text: "Design Systems Deep Dive — Mon 7:00 PM", time: "2h" },
  { type: "Assignment", text: "Wireframe a Food Delivery App due 24 Jun", time: "5h" },
  { type: "Fee", text: "₹10,000 installment due 10 Jul", time: "1d" },
  { type: "Placement", text: "CRED shortlisted you for interview round", time: "2d" },
  { type: "Announcement", text: "New Framer masterclass added to KnowledgeHub", time: "3d" },
];

export const badges = [
  { name: "Attendance Champion", earned: true },
  { name: "Assignment Master", earned: true },
  { name: "Portfolio Builder", earned: true },
  { name: "Interview Ready", earned: false },
  { name: "Placement Achiever", earned: false },
];

export const points = { value: 2840, rank: 12, total: 320 };
