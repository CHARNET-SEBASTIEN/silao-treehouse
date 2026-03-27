import { Stethoscope } from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { filiereThemes } from "@/lib/filiereThemes";

const SecteurPDSPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Stethoscope}
        name="Personnes en difficultés spécifiques — PDS"
        tagline="Le DUI pour les structures à la jonction entre le social et le médical"
        description="Le secteur PDS a des besoins spécifiques liés à sa double vocation, sociale et médicale. L'accompagnement implique une équipe pluridisciplinaire : la qualité de la communication interne et le suivi des rappels sont donc des priorités pour assurer une prise en charge lisible."
        seoPath="/secteur/personnes-difficultes-specifiques"
        color={filiereThemes.pds.text}
        bgColor={filiereThemes.pds.bg}
        borderColor={filiereThemes.pds.border}
        structures={[
          {
            name: "Suivi médical",
            description:
              "Accès au dossier médical de l'usager, à son DMP, et historisation du parcours de soin avec systèmes d'alerte.",
          },
          {
            name: "Accompagnement au logement",
            description:
              "Outils pour suivre les démarches d'accès au logement, tracer les actions et produire des statistiques sur les affectations.",
          },
          {
            name: "Adultes en suivi extérieur",
            description:
              "Gestion des logements, du budget personnel et des droits sociaux dans le cadre de l'accompagnement vers l'autonomie.",
          },
          {
            name: "Accompagnement à l'emploi",
            description:
              "Coordination des actions d'accompagnement au service d'un suivi global et individualisé.",
          },
        ]}
        benefits={[
          "Une bonne communication au sein des équipes devient un levier central de la prise en charge.",
          "Les rappels permettent un suivi de proximité pour chaque usager.",
          "Les outils articulent dimensions sociales, médicales et administratives dans un même cadre de travail.",
          "Les statistiques permettent de suivre l'évolution des affectations et des parcours.",
          "La coordination pluridisciplinaire est pensée comme une fonction native de l'outil.",
        ]}
        modules={[
          "Dossier Usager Informatisé",
          "Dossier médical",
          "DMP",
          "Rappels",
          "Accompagnement au logement",
          "Gestion des logements",
          "Budget personnel",
          "Droits sociaux",
          "États et statistiques",
          "Coordination pluridisciplinaire",
        ]}
        clients={[]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurPDSPage;
