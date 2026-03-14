import { Stethoscope } from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";

const SecteurPDSPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Stethoscope}
        name="Personnes en difficultés spécifiques — PDS"
        tagline="Le DUI pour les structures à l'interface du social, du médical et de l'insertion"
        description="SILAO répond aux réalités des structures PDS, où l'accompagnement social, les enjeux de santé, l'orientation et la coordination pluridisciplinaire doivent coexister dans un même cadre de travail."
        seoPath="/secteur/personnes-difficultes-specifiques"
        color="text-primary"
        bgColor="bg-primary/10"
        structures={[
          { name: "LHSS", description: "Lits halte soins santé pour des personnes en grande précarité nécessitant des soins et un accompagnement global." },
          { name: "ACT", description: "Appartements de coordination thérapeutique avec articulation constante entre santé, logement et accompagnement." },
          { name: "CAARUD", description: "Centres d'accueil et d'accompagnement à la réduction des risques pour usagers de drogues." },
          { name: "Structures mixtes santé-social", description: "Organisations combinant suivi médical, accompagnement social et enjeux d'insertion." },
        ]}
        benefits={[
          "Suivi coordonné des dimensions sociales, médicales et administratives du parcours.",
          "Traçabilité adaptée aux situations complexes et aux risques élevés de rupture de prise en charge.",
          "Agenda, cahier de liaison et alertes pour fluidifier les relais entre équipes et partenaires.",
          "Gestion documentaire centralisée pour les droits sociaux, pièces médicales et éléments de suivi.",
          "Pilotage d'activité, états et statistiques pour les financeurs et les obligations de reporting.",
          "Accompagnement de proximité pour des structures souvent peu dotées en ressources informatiques internes.",
        ]}
        modules={[
          "Dossier Usager Informatisé",
          "Agenda partagé",
          "Cahier de liaison",
          "Alertes",
          "Gestion documentaire",
          "Dossier santé",
          "États et statistiques",
          "Pilotage d'activité",
          "Droits d'accès",
          "Coordination pluridisciplinaire",
        ]}
        clients={[
          { name: "Structures médico-sociales et associatives", quote: "SILAO apporte un cadre commun là où les accompagnements sont à la fois sociaux, sanitaires et fortement coordonnés." },
        ]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurPDSPage;
