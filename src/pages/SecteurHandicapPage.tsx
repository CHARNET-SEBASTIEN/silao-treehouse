import { Accessibility } from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { filiereThemes } from "@/lib/filiereThemes";

const SecteurHandicapPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Accessibility}
        name="Médico-social — PH"
        tagline="Un DUI pensé pour les besoins du médico-social"
        description="Les fonctionnalités dédiées au secteur médico-social n'ont cessé de se multiplier sous l'impulsion de nos clients. Silao couvre aussi bien les besoins des structures avec hébergement que ceux des CAMSP et des CMPP."
        detailedSections={[
          {
            title: "Les enjeux de coordination dans le secteur handicap",
            content: "Les IME (Instituts Médico-Éducatifs) doivent orchestrer des interventions pluridisciplinaires : éducateurs, psychologues, orthophonistes, enseignants, tous mobilisés autour du même enfant. Les SESSAD assurent un suivi ambulatoire au plus près du lieu de vie, avec des rendez-vous, des transports et une traçabilité forte des interventions.\n\nLes MAS et FAM gèrent l'hébergement de personnes en situation de handicap lourd, avec des besoins médicaux, un suivi santé renforcé et une fiche d'urgence accessible rapidement. Les CAMSP et CMPP suivent des enfants en consultations, avec des bilans, des listes d'attente et des rapports spécialisés.",
          },
          {
            title: "Comment Silao s'adapte aux différentes structures",
            content: "Pour les structures avec hébergement, le dossier santé centralise les antécédents, les traitements, les allergies et les protocoles d'urgence. La fiche d'urgence peut être générée en un clic pour les interventions SAMU ou pompiers.\n\nPour les structures ambulatoires, l'agenda devient le pivot de l'activité : plages horaires, ressources mobilisées, transports, rappels automatiques. La gestion MDPH trace les démarches, les renouvellements et les notifications. Les listes d'attente aident à organiser les admissions selon la criticité, le praticien disponible et le temps d'attente.",
          },
          {
            title: "Conformité Ségur MS1 PH",
            content: "Le référentiel Ségur MS1 PH impose aux logiciels du secteur handicap une interopérabilité stricte, une traçabilité des accès et une confidentialité renforcée. Silao est référencé DSR Ségur MS1 PH, ce qui garantit que l'outil respecte les exigences réglementaires sans surcharge pour vos équipes.",
          },
        ]}
        seoPath="/secteur/handicap"
        faqSectorId="ph"
        faqTitle="le handicap"
        color={filiereThemes.ph.text}
        bgColor={filiereThemes.ph.bg}
        borderColor={filiereThemes.ph.border}
        structures={[
          {
            name: "IME",
            description:
              "Institut médico-éducatif et accompagnements éducatifs ou thérapeutiques coordonnés.",
          },
          {
            name: "DITEP / SESSAD",
            description:
              "Prises en charge pluridisciplinaires au plus près du lieu de vie des enfants et adolescents.",
          },
          {
            name: "CAMSP / CMPP",
            description:
              "Structures de suivi précoce et ambulatoire avec agenda, attentes, bilans et rapports spécialisés.",
          },
          {
            name: "MAS / FAM",
            description:
              "Structures avec hébergement nécessitant coordination, sécurité des données et suivi de santé renforcé.",
          },
        ]}
        benefits={[
          "L'agenda concentre l'activité du service avec rappels, plages horaires, ressources et transports.",
          "Silao facilite la gestion et le suivi des prestations MDPH ainsi que des dossiers administratifs associés.",
          "Une fiche d'urgence peut être générée pour récupérer rapidement les informations vitales d'un usager.",
          "La gestion des attentes aide à organiser les admissions selon les demandes, le temps d'attente, le praticien concerné et la criticité.",
          "Les rapports ANAP, CPAM, CMPP et CAMSP sont disponibles dans Silao.",
          "Silao est référencé DSR Ségur MS1 PH pour les personnes en situation de handicap.",
          "Dossier santé centralisé avec antécédents, traitements, allergies et protocoles d'urgence.",
          "Coordination pluridisciplinaire entre éducateurs, psychologues, orthophonistes et enseignants.",
          "Traçabilité des interventions et des transports pour les SESSAD et structures ambulatoires.",
          "Projet personnalisé structuré avec objectifs, actions et suivi des échéances.",
        ]}
        modules={[
          "Agenda partagé",
          "Gestion des rappels",
          "Gestion MDPH",
          "Fiche d'urgence",
          "Gestion des attentes",
          "Dossier santé",
          "Rapports ANAP / CPAM / CMPP / CAMSP",
          "Transports et déplacements",
          "Gestion des ressources",
        ]}
        clients={[]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurHandicapPage;
