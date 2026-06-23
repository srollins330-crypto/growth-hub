import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import CategoryPage from "./pages/CategoryPage";
import CourseDetail from "./pages/CourseDetail";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./admin/pages/Dashboard";
import AdminLeads from "./admin/pages/Leads";
import AdminStudents from "./admin/pages/Students";
import AdminCourses from "./admin/pages/Courses";
import AdminClasses from "./admin/pages/Classes";
import AdminTeachers from "./admin/pages/Teachers";
import AdminCMS from "./admin/pages/CMS";
import AdminBlog from "./admin/pages/Blog";
import AdminMedia from "./admin/pages/Media";
import AdminPayments from "./admin/pages/Payments";
import AdminCommunication from "./admin/pages/Communication";
import AdminAnalytics from "./admin/pages/Analytics";
import AdminSettings from "./admin/pages/Settings";

import FollowUps from "./admin/pages/crm/FollowUps";
import CallLogs from "./admin/pages/crm/CallLogs";
import Campaigns from "./admin/pages/crm/Campaigns";
import LeadWorkspace from "./admin/pages/crm/LeadWorkspace";
import CommandCenter from "./admin/pages/crm/CommandCenter";

import RecordedCourses from "./admin/pages/academy/RecordedCourses";
import KnowledgeHub from "./admin/pages/academy/KnowledgeHub";
import Assignments from "./admin/pages/academy/Assignments";
import Certificates from "./admin/pages/academy/Certificates";

import HiringPartners from "./admin/pages/placements/HiringPartners";
import StudentPlacementsAdmin from "./admin/pages/placements/StudentPlacements";
import Opportunities from "./admin/pages/placements/Opportunities";
import SuccessStories from "./admin/pages/placements/SuccessStories";
import PlacementAnalytics from "./admin/pages/placements/PlacementAnalytics";

import LandingPages from "./admin/pages/website/LandingPages";
import NavigationMenus from "./admin/pages/website/NavigationMenus";
import Forms from "./admin/pages/website/Forms";
import SEO from "./admin/pages/website/SEO";
import Testimonials from "./admin/pages/website/Testimonials";

import EmailCampaigns from "./admin/pages/marketing/EmailCampaigns";
import WhatsAppCampaigns from "./admin/pages/marketing/WhatsAppCampaigns";
import Referrals from "./admin/pages/marketing/Referrals";
import Affiliates from "./admin/pages/marketing/Affiliates";
import MarketingCoupons from "./admin/pages/marketing/Coupons";

import Installments from "./admin/pages/finance/Installments";
import RevenueReports from "./admin/pages/finance/RevenueReports";

import StudentDashboard from "./student/pages/Dashboard";
import StudentMyCourse from "./student/pages/MyCourse";
import StudentAssignments from "./student/pages/Assignments";
import StudentAttendance from "./student/pages/Attendance";
import StudentPortfolio from "./student/pages/Portfolio";
import StudentPlacements from "./student/pages/Placements";
import StudentPayments from "./student/pages/Payments";
import StudentDocuments from "./student/pages/Documents";
import StudentProfile from "./student/pages/Profile";
import StudentSupport from "./student/pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:category" element={<CategoryPage />} />
          <Route path="/course" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/leads" element={<AdminLeads />} />
          <Route path="/admin/leads/:id" element={<LeadWorkspace />} />
          <Route path="/admin/crm/command-center" element={<CommandCenter />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/classes" element={<AdminClasses />} />
          <Route path="/admin/teachers" element={<AdminTeachers />} />
          <Route path="/admin/cms" element={<AdminCMS />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/media" element={<AdminMedia />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/communication" element={<AdminCommunication />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* CRM */}
          <Route path="/admin/crm/follow-ups" element={<FollowUps />} />
          <Route path="/admin/crm/call-logs" element={<CallLogs />} />
          <Route path="/admin/crm/campaigns" element={<Campaigns />} />

          {/* Academy */}
          <Route path="/admin/academy/recorded" element={<RecordedCourses />} />
          <Route path="/admin/academy/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/admin/academy/assignments" element={<Assignments />} />
          <Route path="/admin/academy/certificates" element={<Certificates />} />

          {/* Placements */}
          <Route path="/admin/placements/partners" element={<HiringPartners />} />
          <Route path="/admin/placements/students" element={<StudentPlacementsAdmin />} />
          <Route path="/admin/placements/opportunities" element={<Opportunities />} />
          <Route path="/admin/placements/success-stories" element={<SuccessStories />} />
          <Route path="/admin/placements/analytics" element={<PlacementAnalytics />} />

          {/* Website */}
          <Route path="/admin/website/landing-pages" element={<LandingPages />} />
          <Route path="/admin/website/navigation" element={<NavigationMenus />} />
          <Route path="/admin/website/forms" element={<Forms />} />
          <Route path="/admin/website/seo" element={<SEO />} />
          <Route path="/admin/website/testimonials" element={<Testimonials />} />

          {/* Marketing */}
          <Route path="/admin/marketing/email" element={<EmailCampaigns />} />
          <Route path="/admin/marketing/whatsapp" element={<WhatsAppCampaigns />} />
          <Route path="/admin/marketing/referrals" element={<Referrals />} />
          <Route path="/admin/marketing/affiliates" element={<Affiliates />} />
          <Route path="/admin/marketing/coupons" element={<MarketingCoupons />} />

          {/* Finance */}
          <Route path="/admin/finance/installments" element={<Installments />} />
          <Route path="/admin/finance/revenue" element={<RevenueReports />} />

          {/* Student Portal */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/course" element={<StudentMyCourse />} />
          <Route path="/student/assignments" element={<StudentAssignments />} />
          <Route path="/student/attendance" element={<StudentAttendance />} />
          <Route path="/student/portfolio" element={<StudentPortfolio />} />
          <Route path="/student/placements" element={<StudentPlacements />} />
          <Route path="/student/payments" element={<StudentPayments />} />
          <Route path="/student/documents" element={<StudentDocuments />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/support" element={<StudentSupport />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
