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
        detailedSections={[
          {
            title: "Les enjeux du secteur PDS",
            content: "Les LHSS (Lits Halte Soins Santé) accueillent des personnes sans domicile fixe nécessitant des soins médicaux mais pas d'hospitalisation. Les ACT (Appartements de Coordination Thérapeutique) hébergent des personnes en situation de fragilité médicale et sociale. Les CAARUD (Centres d'Accueil et d'Accompagnement à la Réduction des Risques pour Usagers de Drogues) assurent un accompagnement de proximité avec une dimension sanitaire forte.\n\nDans ces structures, le suivi social (logement, droits sociaux, démarches administratives) doit s'articuler avec le suivi médical (soins, traitements, DMP, rappels) sans cloisonnement artificiel.",
          },
          {
            title: "L'articulation social et médical dans Silao",
            content: "Le dossier usager relie les dimensions sociales et médicales : accompagnement au logement, budget personnel, droits sociaux, dossier médical, traitements en cours, rappels de rendez-vous médicaux. Les équipes sociales et médicales partagent les informations nécessaires à leur mission, avec des droits d'accès configurables par rôle.\n\nLes rappels automatiques aident à maintenir la continuité de prise en charge dans des contextes souvent instables. Le DMP facilite le partage sécurisé de documents de santé avec les partenaires autorisés.",
          },
          {
            title: "Conformité Ségur pour les structures PDS",
            content: "Le référentiel Ségur impose aux structures à forte composante médicale une identification INS qualifiée, un partage sécurisé via MSSanté, une alimentation du DMP et une traçabilité des accès. Silao intègre ces obligations dans sa conception, ce qui épargne à vos équipes les contrôles manuels et les mises à jour réglementaires.",
          },
        ]}
        seoPath="/secteur/personnes-difficultes-specifiques"
        faqSectorId="pds"
        faqTitle="les personnes en difficultés spécifiques"
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
          "Dossier médical et dossier social reliés dans le même outil avec droits d'accès configurables.",
          "Accès au DMP facilité pour le partage sécurisé de documents de santé avec les partenaires.",
          "Rappels automatiques de rendez-vous médicaux pour maintenir la continuité de prise en charge.",
          "Identification INS qualifiée et partage via MSSanté intégrés pour la conformité Ségur.",
          "Traçabilité des actions sociales, médicales et administratives pour le pilotage et le reporting.",
        ]}
        modules={[
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
