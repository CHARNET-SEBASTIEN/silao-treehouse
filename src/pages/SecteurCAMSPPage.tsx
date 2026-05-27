import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { Baby } from "lucide-react";
import { filiereThemes } from "@/lib/filiereThemes";

const SecteurCAMSPPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Baby}
        name="CAMSP / CMPP"
        tagline="Le DUI adapté au dépistage et aux soins précoces"
        description="Silao accompagne les CAMSP et CMPP dans le suivi pluridisciplinaire des enfants présentant des troubles du développement. Un outil pensé pour la coordination entre professionnels de santé, éducateurs et familles."
        detailedSections={[
          {
            title: "Les spécificités des CAMSP et CMPP",
            content: "Un CAMSP suit des enfants de 0 à 6 ans pour dépister et prendre en charge précocement les troubles du développement : retards psychomoteurs, troubles du langage, déficiences sensorielles. Le suivi est pluridisciplinaire : médecin, psychologue, orthophoniste, psychomotricien, éducateur spécialisé.\n\nUn CMPP élargit cette approche aux enfants et adolescents avec troubles psychologiques, difficultés scolaires ou comportementales. Les consultations sont ambulatoires, les listes d'attente à gérer, les rapports CPAM et ARS à produire.",
          },
          {
            title: "Comment Silao répond aux besoins des structures",
            content: "L'agenda pluridisciplinaire centralise les séances de chaque professionnel, avec les plages horaires, les ressources mobilisées et les rappels automatiques. Les bilans et évaluations standardisées sont tracés dans le dossier usager, avec l'historique des résultats et les évolutions observées.\n\nLes comptes-rendus de consultations sont générés depuis l'outil, prêts à être partagés avec les familles ou les partenaires autorisés. Les listes d'attente aident à organiser les admissions selon la criticité, le praticien disponible et le temps d'attente.",
          },
          {
            title: "Conformité Ségur et interopérabilité",
            content: "Le référentiel Ségur impose une interopérabilité stricte pour les structures de soins : identification INS qualifiée, partage via MSSanté, alimentation du DMP, exports formatés vers les CPAM et ARS. Silao intègre ces obligations dans sa conception. Les équipes n'ont pas à gérer manuellement les exports ou les mises à jour réglementaires.",
          },
        ]}
        seoPath="/secteur/camsp-cmpp"
        faqSectorId="camsp"
        faqTitle="les CAMSP et CMPP"
        color={filiereThemes.ph.text}
        bgColor={filiereThemes.ph.bg}
        borderColor={filiereThemes.ph.border}
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
          "Agenda pluridisciplinaire avec plages horaires, ressources et rappels automatiques",
          "Identification INS qualifiée et partage sécurisé via MSSanté intégrés",
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
