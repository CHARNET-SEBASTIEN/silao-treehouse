import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SONSCompliancePage from "./pages/SONSCompliancePage";
import GrappesPage from "./pages/GrappesPage";
import AccompagnementPage from "./pages/AccompagnementPage";
import EngagementsPage from "./pages/EngagementsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conformite-sons" element={<SONSCompliancePage />} />
          <Route path="/grappes-esms" element={<GrappesPage />} />
          <Route path="/accompagnement" element={<AccompagnementPage />} />
          <Route path="/engagements" element={<EngagementsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
