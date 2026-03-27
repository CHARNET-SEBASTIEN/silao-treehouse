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
        ]}
        modules={[
          "Dossier Usager Informatisé",
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
