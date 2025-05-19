import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminInfo from "./pages/AdminInfo";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import Login from "./pages/Login";
import AuthCallback from "./pages/AuthCallback";
import AboutAbuSwe7l from "./pages/AboutAbuSwe7l";
import { useEffect, useState } from "react";
import Verify from "./pages/Verify";
import AdBox from "@/components/AdBox";


const queryClient = new QueryClient();

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen">
          {/* Scroll Progress Bar */}
          <div className="fixed top-0 left-0 w-full z-[200]">
            <div
              className="h-1 bg-gradient-to-r from-[#3b82f6] via-[#5a6cff] to-[#3b82f6] transition-all duration-200"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <AdBox />
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin-info" element={<AdminInfo />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/about-abuswe7l" element={<AboutAbuSwe7l />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/login" element={<Login />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
