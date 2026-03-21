import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToHome from "./components/BackToHome";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import CalendarPage from "./pages/CalendarPage";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Community from "./pages/Community";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.PROD ? "/remix-of-ddmotors1" : "/"}>
          <ScrollToTop />
          <BackToHome />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/chi-siamo" element={<About />} />
              <Route path="/raduni" element={<Events />} />
              <Route path="/galleria" element={<Gallery />} />
              <Route path="/calendario" element={<CalendarPage />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/community" element={<Community />} />
              <Route path="/progetti" element={<Projects />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);
export default App;
