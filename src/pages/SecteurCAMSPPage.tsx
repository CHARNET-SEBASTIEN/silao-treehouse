import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { Baby } from "lucide-react";

const SecteurCAMSPPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Baby}
        name="CAMSP / CMPP"
        tagline="Le DUI adapté au dépistage et aux soins précoces"
        description="Silao accompagne les CAMSP et CMPP dans le suivi pluridisciplinaire des enfants présentant des troubles du développement. Un outil pensé pour la coordination entre professionnels de santé, éducateurs et familles."
        seoPath="/secteur/camsp-cmpp"
        color="text-primary"
        bgColor="bg-primary/10"
        structures={[
          { name: "CAMSP", description: "Centre d'Action Médico-Sociale Précoce : dépistage et prise en charge précoce des enfants de 0 à 6 ans." },
          { name: "CMPP", description: "Centre Médico-Psycho-Pédagogique : consultations et soins pour enfants et adolescents avec troubles psychologiques." },
        ]}
        benefits={[
          "Suivi du parcours de soins précoces de l'enfant",
          "Coordination pluridisciplinaire (médecins, orthophonistes, psychomotriciens, psychologues)",
          "Gestion des bilans et des évaluations standardisées",
          "Lien avec les familles et compte-rendus de consultations",
          "Planification et suivi des séances thérapeutiques",
          "Conformité réglementaire et interopérabilité avec le DMP",
          "Statistiques d'activité pour les tutelles (ARS, CPAM)",
          "Gestion de la file active et des listes d'attente",
        ]}
        modules={[
          "Dossier Usager Informatisé",
          "Bilans & évaluations",
          "Planning de séances",
          "Comptes-rendus",
          "Prescriptions",
          "Agenda pluridisciplinaire",
          "GED & documents",
          "Reporting ARS",
          "Facturation CPAM",
          "MSSanté & DMP",
        ]}
        clients={[
          { name: "Structures en cours de déploiement", quote: "Silao étend sa couverture aux CAMSP et CMPP pour répondre aux besoins spécifiques du dépistage précoce." },
        ]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurCAMSPPage;
