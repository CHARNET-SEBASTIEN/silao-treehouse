import { Route, Routes } from "react-router-dom";

import AbonnementPage from "@/pages/AbonnementPage";
import AccompagnementPage from "@/pages/AccompagnementPage";
import EngagementsPage from "@/pages/EngagementsPage";
import GrappesPage from "@/pages/GrappesPage";
import HelpSupportPage from "@/pages/HelpSupportPage";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import OffresPage from "@/pages/OffresPage";
import QuizPage from "@/pages/QuizPage";
import RessourcesPage from "@/pages/RessourcesPage";
import SecteurAHIPage from "@/pages/SecteurAHIPage";
import SecteurCAMSPPage from "@/pages/SecteurCAMSPPage";
import SecteurHandicapPage from "@/pages/SecteurHandicapPage";
import SecteurPDEPage from "@/pages/SecteurPDEPage";
import SitemapPage from "@/pages/SitemapPage";
import SONSCompliancePage from "@/pages/SONSCompliancePage";

const AppRoutes = () => (
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
    <Route path="/aide-support" element={<HelpSupportPage />} />
    <Route path="/plan-du-site" element={<SitemapPage />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
