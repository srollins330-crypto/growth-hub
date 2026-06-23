// Rich CRM mock data — counsellor productivity focused.

export type LeadStage =
  | "New Lead" | "Contacted" | "Interested" | "Demo Booked"
  | "Demo Attended" | "Negotiation" | "Admission" | "Lost";

export type CallOutcome =
  | "Connected" | "Busy" | "Call Back Later" | "Interested" | "Very Interested"
  | "Not Interested" | "Wrong Number" | "Admission Confirmed"
  | "Joined Competitor" | "No Response";

export type Objection =
  | "Fees" | "Time" | "Parents" | "College" | "Job"
  | "Competition" | "Location" | "Online Preference" | "Confidence";

export type Activity = {
  id: string;
  at: string; // ISO
  type: "call" | "whatsapp" | "email" | "demo" | "note" | "stage" | "created" | "follow-up";
  title: string;
  body?: string;
  outcome?: CallOutcome;
  durationMin?: number;
  counsellor: string;
  next?: { at: string; purpose: string };
};

export type CrmLead = {
  id: string;
  name: string;
  avatar?: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  occupation: string;
  college: string;
  source: string;
  campaign: string;
  course: string;
  budget: string;
  parentName: string;
  parentPhone: string;
  score: number; // 0-100
  probability: number; // 0-100
  stage: LeadStage;
  counsellor: string;
  branch: string;
  createdAt: string;
  daysOld: number;
  lastActivity: string;
  nextFollowUp: { at: string; purpose: string; priority: "High" | "Medium" | "Low" };
  objections: Objection[];
  activities: Activity[];
};

const today = "2026-06-23";

export const crmLeads: CrmLead[] = [
  {
    id: "L-2041",
    name: "Aarav Mehta",
    phone: "+91 98 1234 5678",
    whatsapp: "+91 98 1234 5678",
    email: "aarav.mehta@example.com",
    city: "Bengaluru",
    occupation: "Final-year student",
    college: "PES University",
    source: "Meta Ads",
    campaign: "UIUX June Campaign",
    course: "UI/UX Design — Professional",
    budget: "₹25,000 – ₹35,000",
    parentName: "Rakesh Mehta",
    parentPhone: "+91 98 1111 4422",
    score: 84,
    probability: 78,
    stage: "Negotiation",
    counsellor: "Rahul Sharma",
    branch: "Bengaluru HQ",
    createdAt: "2026-06-18",
    daysOld: 5,
    lastActivity: "Call · 12 min · Interested",
    nextFollowUp: { at: "2026-06-25T17:00", purpose: "Discuss EMI option", priority: "High" },
    objections: ["Fees", "Parents"],
    activities: [
      {
        id: "A1", at: "2026-06-23T11:45", type: "call",
        title: "Call completed", outcome: "Interested", durationMin: 12,
        body: "Student wants weekend batch. Concerned about full upfront fees. Father will discuss after salary date (28th).",
        counsellor: "Rahul Sharma",
        next: { at: "2026-06-25T17:00", purpose: "Discuss EMI option" },
      },
      {
        id: "A2", at: "2026-06-22T16:00", type: "whatsapp",
        title: "WhatsApp sent — Brochure",
        body: "Shared UI/UX brochure & EMI plan PDF. Opened: Yes · Admission link clicked: No",
        counsellor: "Rahul Sharma",
      },
      {
        id: "A3", at: "2026-06-20T14:00", type: "demo",
        title: "Demo class attended",
        body: "Loved the UI Design Module preview. Asked thoughtful questions on portfolio building. Concern: unable to pay full amount upfront.",
        counsellor: "Rahul Sharma",
      },
      {
        id: "A4", at: "2026-06-19T10:20", type: "note",
        title: "Note added",
        body: "Father wants EMI option. Prefers weekend classes. Budget ~₹25k. Needs scholarship discussion.",
        counsellor: "Rahul Sharma",
      },
      {
        id: "A5", at: "2026-06-18T18:00", type: "created",
        title: "Lead created",
        body: "Source: Meta Ads · Campaign: UIUX June Campaign",
        counsellor: "System",
      },
    ],
  },
  {
    id: "L-2040",
    name: "Sara Khan",
    phone: "+91 99 8841 2900",
    whatsapp: "+91 99 8841 2900",
    email: "sara.khan@example.com",
    city: "Mumbai",
    occupation: "Working professional",
    college: "Mumbai University",
    source: "Instagram",
    campaign: "Full-Stack Free Trial",
    course: "Full-Stack Development",
    budget: "₹40,000 – ₹50,000",
    parentName: "—",
    parentPhone: "—",
    score: 72,
    probability: 64,
    stage: "Demo Booked",
    counsellor: "Rahul Sharma",
    branch: "Bengaluru HQ",
    createdAt: "2026-06-20",
    daysOld: 3,
    lastActivity: "WhatsApp · brochure opened",
    nextFollowUp: { at: "2026-06-23T18:30", purpose: "Demo reminder", priority: "High" },
    objections: ["Time"],
    activities: [
      { id: "B1", at: "2026-06-22T13:02", type: "call", title: "Call completed", outcome: "Very Interested", durationMin: 8, body: "Confirmed demo for tomorrow 7 PM. Will join from office.", counsellor: "Rahul Sharma" },
      { id: "B2", at: "2026-06-20T17:30", type: "created", title: "Lead created", body: "Source: Instagram · Campaign: Full-Stack Free Trial", counsellor: "System" },
    ],
  },
  {
    id: "L-2039",
    name: "Omar Hassan",
    phone: "+91 97 4423 3990",
    whatsapp: "+91 97 4423 3990",
    email: "omar@example.com",
    city: "Hyderabad",
    occupation: "Fresher",
    college: "Osmania University",
    source: "Referral",
    campaign: "Student referral",
    course: "Data Analytics Pro",
    budget: "₹30,000",
    parentName: "Yusuf Hassan",
    parentPhone: "+91 97 1111 0099",
    score: 58,
    probability: 42,
    stage: "Interested",
    counsellor: "Neha Patel",
    branch: "Hyderabad",
    createdAt: "2026-06-16",
    daysOld: 7,
    lastActivity: "Call · 6 min · Call back later",
    nextFollowUp: { at: "2026-06-23T16:00", purpose: "Fee discussion", priority: "Medium" },
    objections: ["Fees", "Confidence"],
    activities: [
      { id: "C1", at: "2026-06-21T11:18", type: "call", title: "Call completed", outcome: "Call Back Later", durationMin: 6, body: "Asked to call after exams (23rd).", counsellor: "Neha Patel" },
      { id: "C2", at: "2026-06-16T09:00", type: "created", title: "Lead created", body: "Source: Referral", counsellor: "System" },
    ],
  },
  {
    id: "L-2038",
    name: "Lina Ahmed",
    phone: "+91 96 2201 1440",
    whatsapp: "+91 96 2201 1440",
    email: "lina@example.com",
    city: "Delhi",
    occupation: "MBA graduate",
    college: "DU",
    source: "Google Ads",
    campaign: "Marketing Bootcamp",
    course: "Digital Marketing 360",
    budget: "₹22,000",
    parentName: "—",
    parentPhone: "—",
    score: 91,
    probability: 88,
    stage: "Admission",
    counsellor: "Arjun M.",
    branch: "Delhi NCR",
    createdAt: "2026-06-10",
    daysOld: 13,
    lastActivity: "Admission confirmed",
    nextFollowUp: { at: "2026-06-24T11:00", purpose: "Document collection", priority: "High" },
    objections: [],
    activities: [
      { id: "D1", at: "2026-06-22T15:00", type: "call", title: "Call completed", outcome: "Admission Confirmed", durationMin: 18, body: "Token amount paid. Will share docs by 24th.", counsellor: "Arjun M." },
      { id: "D2", at: "2026-06-10T11:00", type: "created", title: "Lead created", counsellor: "System" },
    ],
  },
  {
    id: "L-2037",
    name: "Vikram Iyer",
    phone: "+91 94 5566 7788",
    whatsapp: "+91 94 5566 7788",
    email: "vikram@example.com",
    city: "Chennai",
    occupation: "Working professional",
    college: "Anna University",
    source: "WhatsApp",
    campaign: "Organic",
    course: "UI/UX Design — Expert",
    budget: "₹35,000",
    parentName: "—",
    parentPhone: "—",
    score: 28,
    probability: 14,
    stage: "Contacted",
    counsellor: "Rahul Sharma",
    branch: "Bengaluru HQ",
    createdAt: "2026-05-20",
    daysOld: 34,
    lastActivity: "No response · 4 attempts",
    nextFollowUp: { at: "2026-06-22T10:00", purpose: "Re-engagement", priority: "Low" },
    objections: ["Online Preference"],
    activities: [
      { id: "E1", at: "2026-06-15T10:00", type: "call", title: "Call attempt", outcome: "No Response", counsellor: "Rahul Sharma" },
      { id: "E2", at: "2026-05-20T12:00", type: "created", title: "Lead created", counsellor: "System" },
    ],
  },
];

export const counsellorMe = {
  name: "Rahul Sharma",
  role: "Sr. Counsellor",
  branch: "Bengaluru HQ",
};

export const counsellorKpis = [
  { label: "My Calls Today", value: 14, target: 25, tone: "blue" },
  { label: "Follow-ups Today", value: 9, target: 12, tone: "blue" },
  { label: "Overdue", value: 3, target: 0, tone: "red" },
  { label: "Hot Leads", value: 7, target: 0, tone: "orange" },
  { label: "Admissions (MTD)", value: 6, target: 10, tone: "green" },
  { label: "Revenue (MTD)", value: "₹1.84L", target: "₹3L", tone: "green" },
];

export const branchPerformance = [
  { branch: "Bengaluru HQ", leads: 412, admissions: 68, conversion: "16.5%", revenue: "₹18.4L" },
  { branch: "Delhi NCR", leads: 318, admissions: 51, conversion: "16.0%", revenue: "₹14.2L" },
  { branch: "Hyderabad", leads: 264, admissions: 38, conversion: "14.4%", revenue: "₹10.8L" },
  { branch: "Mumbai", leads: 201, admissions: 29, conversion: "14.4%", revenue: "₹8.1L" },
];

export const counsellorLeaderboard = [
  { name: "Arjun M.", branch: "Delhi NCR", admissions: 22, revenue: "₹6.4L", conv: "24%" },
  { name: "Rahul Sharma", branch: "Bengaluru HQ", admissions: 18, revenue: "₹5.2L", conv: "21%" },
  { name: "Neha Patel", branch: "Hyderabad", admissions: 14, revenue: "₹4.1L", conv: "18%" },
  { name: "Riya S.", branch: "Mumbai", admissions: 11, revenue: "₹3.6L", conv: "17%" },
];

export function getLead(id: string) {
  return crmLeads.find((l) => l.id === id) ?? crmLeads[0];
}
