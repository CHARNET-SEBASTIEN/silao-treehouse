import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import SONSCompliancePage from "./pages/SONSCompliancePage";
import GrappesPage from "./pages/GrappesPage";
import AccompagnementPage from "./pages/AccompagnementPage";
import EngagementsPage from "./pages/EngagementsPage";
import QuizPage from "./pages/QuizPage";
import SecteurHandicapPage from "./pages/SecteurHandicapPage";
import SecteurPDEPage from "./pages/SecteurPDEPage";
import SecteurAHIPage from "./pages/SecteurAHIPage";
import SecteurCAMSPPage from "./pages/SecteurCAMSPPage";
import OffresPage from "./pages/OffresPage";
import AbonnementPage from "./pages/AbonnementPage";
import RessourcesPage from "./pages/RessourcesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const scrollToHashTarget = (hash: string) => {
  const targetId = hash.replace("#", "");
  if (!targetId) return false;

  const element = document.getElementById(targetId);
  if (!element) return false;

  const headerOffset = 88;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  return true;
};

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    let attempts = 0;
    const maxAttempts = 12;

    const tryScroll = () => {
      if (scrollToHashTarget(location.hash)) return;
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 120);
      }
    };

    const frame = window.requestAnimationFrame(tryScroll);
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conformite-sons" element={<SONSCompliancePage />} />
          <Route path="/grappes-esms" element={<GrappesPage />} />
          <Route path="/accompagnement" element={<AccompagnementPage />} />
          <Route path="/engagements" element={<EngagementsPage />} />
          <Route path="/quiz-segur" element={<QuizPage />} />
          <Route path="/secteur/handicap" element={<SecteurHandicapPage />} />
          <Route path="/secteur/protection-enfance" element={<SecteurPDEPage />} />
          <Route path="/secteur/insertion-ahi" element={<SecteurAHIPage />} />
          <Route path="/secteur/camsp-cmpp" element={<SecteurCAMSPPage />} />
          <Route path="/offres" element={<OffresPage />} />
          <Route path="/abonnement" element={<AbonnementPage />} />
          <Route path="/ressources" element={<RessourcesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
