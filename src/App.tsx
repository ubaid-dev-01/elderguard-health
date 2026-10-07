import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import PublicLayout from "./components/layout/PublicLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Book from "./pages/Book";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import StaffLogin from "./pages/StaffLogin";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DashboardResidents from "./pages/dashboard/DashboardResidents";
import DashboardCare from "./pages/dashboard/DashboardCare";
import DashboardSchedule from "./pages/dashboard/DashboardSchedule";
import DashboardMedication from "./pages/dashboard/DashboardMedication";
import DashboardBilling from "./pages/dashboard/DashboardBilling";
import DashboardFamily from "./pages/dashboard/DashboardFamily";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";
import DashboardSettings from "./pages/dashboard/DashboardSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/book" element={<Book />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staff-login" element={<StaffLogin />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="residents" element={<DashboardResidents />} />
            <Route path="care" element={<DashboardCare />} />
            <Route path="schedule" element={<DashboardSchedule />} />
            <Route path="medication" element={<DashboardMedication />} />
            <Route path="billing" element={<DashboardBilling />} />
            <Route path="family" element={<DashboardFamily />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
