import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { Accessibility } from "lucide-react";

const SecteurHandicapPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Accessibility}
        name="Handicap — PH"
        tagline="Le DUI conçu pour le parcours de la personne en situation de handicap"
        description="Silao accompagne les établissements et services du secteur Handicap avec un dossier usager informatisé complet, conforme aux exigences réglementaires et adapté aux réalités terrain : projets personnalisés, coordination pluridisciplinaire, suivi des parcours inclusifs."
        seoPath="/secteur/handicap"
        color="text-primary"
        bgColor="bg-primary/10"
        structures={[
          { name: "IME", description: "Institut Médico-Éducatif : accompagnement éducatif et thérapeutique des enfants en situation de handicap." },
          { name: "ITEP", description: "Institut Thérapeutique Éducatif et Pédagogique : prise en charge des troubles du comportement." },
          { name: "MAS", description: "Maison d'Accueil Spécialisée : hébergement et soins pour adultes lourdement handicapés." },
          { name: "FAM", description: "Foyer d'Accueil Médicalisé : accompagnement des adultes nécessitant un suivi médical." },
          { name: "ESAT", description: "Établissement et Service d'Aide par le Travail : insertion professionnelle des personnes handicapées." },
          { name: "SESSAD", description: "Service d'Éducation Spéciale et de Soins à Domicile : intervention au plus près du lieu de vie." },
        ]}
        benefits={[
          "Projet personnalisé intégré avec suivi des objectifs et évaluations",
          "Coordination pluridisciplinaire simplifiée (éducateurs, soignants, psychologues)",
          "Interopérabilité : alimentation du DMP, INS qualifiée, messagerie MSSanté",
          "Tableaux de bord de pilotage pour la direction et les financeurs",
          "Gestion des notifications MDPH et des orientations",
          "Suivi du parcours inclusif (scolarité, emploi, logement)",
          "Traçabilité complète des accompagnements pour les évaluations HAS",
          "Interopérabilité avec ViaTrajectoire et les SI des ARS",
        ]}
        modules={[
          "Dossier Usager Informatisé",
          "Projet Personnalisé",
          "Agenda partagé",
          "Transmissions ciblées",
          "Prescriptions & traitements",
          "Facturation CPAM / CD",
          "GED & documents",
          "Reporting & statistiques",
          "MSSanté",
          "DMP",
        ]}
        clients={[
          { name: "Croix-Rouge française", quote: "Silao nous permet de structurer le suivi des parcours sur l'ensemble de nos établissements PH." },
          { name: "ADSEA 80", quote: "Un outil adapté à nos réalités de terrain, avec un accompagnement projet exemplaire." },
        ]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurHandicapPage;
