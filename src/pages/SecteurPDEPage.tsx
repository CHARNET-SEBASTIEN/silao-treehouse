import { Baby } from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { filiereThemes } from "@/lib/filiereThemes";

const SecteurPDEPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Baby}
        name="Protection de l'enfance — PDE"
        tagline="Le secteur historique de Silao, pensé pour l'hébergement comme pour le milieu ouvert"
        description="La protection de l'enfance est le tout premier secteur pour lequel Silao a dédié ses fonctionnalités. L'outil couvre les besoins de l'hébergement, du milieu ouvert, de l'accueil familial et des accompagnements spécifiques, avec une adaptation continue aux réalités terrain."
        seoPath="/secteur/protection-enfance"
        faqSectorId="pde"
        faqTitle="la protection de l'enfance"
        color={filiereThemes.pde.text}
        bgColor={filiereThemes.pde.bg}
        borderColor={filiereThemes.pde.border}
        structures={[
          {
            name: "Enfance et jeunesse avec hébergement",
            description:
              "Gestion de l'argent de poche, de l'habillement, des fratries et traçabilité des opérations saisies.",
          },
          {
            name: "Adolescents et adultes en suivi extérieur",
            description:
              "Suivi vers l'autonomie avec logement, budget personnel, droits sociaux et accompagnement vers l'emploi.",
          },
          {
            name: "Accueil en famille",
            description:
              "Gestion des assistants familiaux, des agréments, des places disponibles et historisation des accueils.",
          },
          {
            name: "Lieux de vie et dispositifs expérimentaux",
            description:
              "Un accompagnement dédié pour des prises en charge spécifiques, évolutives ou innovantes.",
          },
        ]}
        benefits={[
          "L'agenda et le cahier de liaison constituent deux des piliers de l'activité.",
          "Les fonctionnalités ont été conçues pour répondre aux besoins de l'hébergement comme du milieu ouvert.",
          "Les liens entre membres d'une fratrie permettent de mutualiser les informations utiles entre plusieurs fiches usagers.",
          "Le suivi des présences intègre un circuit de validation sur deux niveaux et des exports pour la facturation ou les statistiques.",
          "Silao est aujourd'hui référencé DSR Ségur MS2 PDE.",
        ]}
        modules={[
          "Agenda",
          "Cahier de liaison",
          "Gestion des fratries",
          "Argent de poche et habillement",
          "Gestion des logements",
          "Gestion des droits sociaux",
          "Suivi des présences",
          "Accueil familial",
          "Exports statistiques et facturation",
        ]}
        clients={[]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurPDEPage;
