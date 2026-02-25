import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { Home } from "lucide-react";

const SecteurAHIPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <main className="pt-16">
      <SecteurPageLayout
        icon={Home}
        name="Insertion / AHI"
        tagline="Le DUI au service de l'hébergement et de l'insertion"
        description="Silao accompagne les structures d'hébergement et d'insertion dans la gestion des parcours complexes : demandeurs d'asile, personnes sans abri, réfugiés. Un outil pensé pour la coordination multi-acteurs et le suivi des dispositifs."
        color="text-accent-foreground"
        bgColor="bg-accent"
        structures={[
          { name: "CHRS", description: "Centre d'Hébergement et de Réinsertion Sociale : accueil et accompagnement vers l'autonomie." },
          { name: "SIAO", description: "Service Intégré d'Accueil et d'Orientation : coordination des places d'hébergement sur le territoire." },
          { name: "CPH", description: "Centre Provisoire d'Hébergement : accueil des réfugiés reconnus." },
          { name: "CADA", description: "Centre d'Accueil pour Demandeurs d'Asile : hébergement et accompagnement administratif et juridique." },
        ]}
        benefits={[
          "Gestion du parcours d'insertion global (logement, emploi, santé, administratif)",
          "Suivi des dispositifs et des durées de prise en charge",
          "Coordination multi-acteurs (travailleurs sociaux, SIAO, préfecture)",
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
          "Facturation",
        ]}
        clients={[
          { name: "AJP", quote: "Silao nous aide à piloter nos places d'hébergement et à suivre les parcours d'insertion de manière fluide." },
        ]}
      />
    </main>
    <FooterSection />
  </div>
);

export default SecteurAHIPage;
