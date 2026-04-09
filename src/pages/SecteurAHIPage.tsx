import { Home } from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { filiereThemes } from "@/lib/filiereThemes";

const SecteurAHIPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Home}
        name="Accueil, hébergement et insertion — AHI"
        tagline="Un outil conçu pour tracer les actions et coordonner les parcours d'insertion"
        description="Le secteur de l'insertion a des besoins spécifiques auxquels Silao répond depuis plus de quinze ans. L'accompagnement de personnes en situation de détresse sociale ou administrative suppose des fonctionnalités capables d'assurer la traçabilité des actions et une bonne communication entre acteurs."
        seoPath="/secteur/insertion-ahi"
        faqSectorId="ahi"
        faqTitle="l'accueil, l'hébergement et l'insertion"
        color={filiereThemes.ahi.text}
        bgColor={filiereThemes.ahi.bg}
        borderColor={filiereThemes.ahi.border}
        structures={[
          {
            name: "Hébergement adultes seuls ou en famille",
            description:
              "Historisation et suivi des accompagnements pour les personnes seules comme pour les familles, en évitant la double saisie.",
          },
          {
            name: "Accompagnement au logement",
            description:
              "Suivi des démarches, traçabilité des actions et statistiques sur les affectations, la rotation et les délais de séjour.",
          },
          {
            name: "Adultes en suivi extérieur",
            description:
              "Gestion des logements, du budget personnel, des droits sociaux et de l'accompagnement vers l'emploi ou le logement.",
          },
          {
            name: "Personnes en régularisation",
            description:
              "Suivi des procédures liées au titre de séjour ainsi que des démarches administratives, juridiques et sociales.",
          },
          {
            name: "Accompagnement emploi et apprentissage des langues",
            description:
              "Coordination des actions d'accompagnement, y compris pour les liens familiaux, la comptabilisation individuelle ou famille et le suivi médical.",
          },
        ]}
        benefits={[
          "Traçabilité des actions d'accompagnement social, administratif et juridique.",
          "Bonne communication entre les acteurs sur le terrain grâce à un outil commun.",
          "Suivi des parcours d'hébergement, de logement, d'emploi et de santé.",
          "Création de liens entre plusieurs usagers pour gérer les situations familiales.",
          "Comptabilisation individuelle et/ou famille pour les besoins de statistiques et de facturation.",
        ]}
        modules={[
          "Plan d'accompagnement",
          "Gestion des hébergements",
          "Accompagnement au logement",
          "Suivi administratif et juridique",
          "Gestion du budget personnel",
          "Gestion des droits sociaux",
          "Accompagnement à l'emploi",
          "Apprentissage des langues",
          "Suivi médical",
        ]}
        clients={[]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurAHIPage;
