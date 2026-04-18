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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/leads" element={<AdminLeads />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
