import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { Home } from "lucide-react";

const SecteurAHIPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Home}
        name="Accueil, hébergement et insertion — AHI"
        tagline="Le DUI au service des parcours d'hébergement et d'insertion"
        description="Silao accompagne les structures AHI dans la gestion des parcours complexes: accompagnement social, hébergement, orientation, accès au logement et suivi administratif dans un outil commun."
        seoPath="/secteur/insertion-ahi"
        color="text-accent-foreground"
        bgColor="bg-accent"
        structures={[
          { name: "Accueil de jour", description: "Suivi des situations, orientation, accès aux droits et accompagnement de proximité." },
          { name: "CHRS", description: "Centre d'Hébergement et de Réinsertion Sociale : accueil et accompagnement vers l'autonomie." },
          { name: "HUDA / CADA", description: "Hébergement de demandeurs d'asile et suivi administratif ou juridique associé." },
          { name: "CPH", description: "Centre Provisoire d'Hébergement : accueil des réfugiés reconnus." },
          { name: "AVDL / IML", description: "Accompagnement vers le logement et l'insertion dans des dispositifs multi-acteurs." },
        ]}
        benefits={[
          "Gestion du parcours d'insertion global (logement, emploi, santé, administratif)",
          "Suivi des dispositifs et des durées de prise en charge",
          "Coordination multi-acteurs (travailleurs sociaux, partenaires logement, préfecture)",
          "Gestion des places et du taux d'occupation en temps réel",
          "Conformité aux obligations de reporting DGCS / DRIHL",
          "Suivi des demandes d'asile et des titres de séjour",
          "Tableaux de bord d'activité pour les financeurs",
          "Interface simplifiée pour les équipes de terrain",
        ]}
        modules={[
          "Dossier Usager Informatisé",
          "Plan d'accompagnement",
          "Gestion des hébergements",
          "Suivi administratif & juridique",
          "Transmissions",
          "Agenda partagé",
          "GED & documents",
          "Reporting DGCS",
          "Statistiques d'activité",
          "Gestion locative",
        ]}
        clients={[
          { name: "AJP", quote: "Silao nous aide à piloter nos places d'hébergement et à suivre les parcours d'insertion de manière fluide." },
        ]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurAHIPage;
