import { Navigate, Route, Routes } from "react-router-dom";

import AbonnementPage from "@/pages/AbonnementPage";
import AccompagnementPage from "@/pages/AccompagnementPage";
import EngagementsPage from "@/pages/EngagementsPage";
import FormationsPage from "@/pages/FormationsPage";
import GrappesPage from "@/pages/GrappesPage";
import HelpSupportPage from "@/pages/HelpSupportPage";
import Index from "@/pages/Index";
import LegalNoticesPage from "@/pages/LegalNoticesPage";
import NotFound from "@/pages/NotFound";
import OffresPage from "@/pages/OffresPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import QuizPage from "@/pages/QuizPage";
import RessourcesPage from "@/pages/RessourcesPage";
import SecteurAHIPage from "@/pages/SecteurAHIPage";
import SecteurHandicapPage from "@/pages/SecteurHandicapPage";
import SecteurPDSPage from "@/pages/SecteurPDSPage";
import SecteurPDEPage from "@/pages/SecteurPDEPage";
import SitemapPage from "@/pages/SitemapPage";
import SONSCompliancePage from "@/pages/SONSCompliancePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/conformite-sons" element={<SONSCompliancePage />} />
    <Route path="/grappes-esms" element={<GrappesPage />} />
    <Route path="/accompagnement" element={<AccompagnementPage />} />
    <Route path="/formations" element={<FormationsPage />} />
    <Route path="/engagements" element={<EngagementsPage />} />
    <Route path="/quiz-segur" element={<QuizPage />} />
    <Route path="/secteur/handicap" element={<SecteurHandicapPage />} />
    <Route path="/secteur/protection-enfance" element={<SecteurPDEPage />} />
    <Route path="/secteur/insertion-ahi" element={<SecteurAHIPage />} />
    <Route
      path="/secteur/camsp-cmpp"
      element={<Navigate to="/secteur/personnes-difficultes-specifiques" replace />}
    />
    <Route path="/secteur/personnes-difficultes-specifiques" element={<SecteurPDSPage />} />
    <Route path="/offres" element={<OffresPage />} />
    <Route path="/abonnement" element={<AbonnementPage />} />
    <Route path="/ressources" element={<RessourcesPage />} />
    <Route path="/aide-support" element={<HelpSupportPage />} />
    <Route path="/mentions-legales" element={<LegalNoticesPage />} />
    <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
    <Route path="/plan-du-site" element={<SitemapPage />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
