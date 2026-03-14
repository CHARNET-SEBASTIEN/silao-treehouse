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
        name="Médico-social — PH"
        tagline="Le DUI conçu pour les prises en charge du secteur médico-social"
        description="Silao accompagne les établissements et services du secteur PH avec un dossier usager informatisé complet, conforme aux exigences réglementaires et adapté aux réalités terrain : projets personnalisés, coordination pluridisciplinaire, agenda, listes d'attente et suivi des parcours."
        seoPath="/secteur/handicap"
        color="text-primary"
        bgColor="bg-primary/10"
        structures={[
          { name: "IME", description: "Institut Médico-Éducatif : accompagnement éducatif et thérapeutique des enfants en situation de handicap." },
          { name: "DITEP", description: "Dispositif Thérapeutique Éducatif et Pédagogique : prise en charge coordonnée des troubles du comportement." },
          { name: "SESSAD", description: "Service d'Éducation Spéciale et de Soins à Domicile : intervention au plus près du lieu de vie." },
          { name: "CAMSP", description: "Centre d'Action Médico-Sociale Précoce : dépistage et accompagnement précoces." },
          { name: "CMPP", description: "Centre Médico-Psycho-Pédagogique : suivi pluridisciplinaire et bilans." },
          { name: "MAS", description: "Maison d'Accueil Spécialisée : hébergement et soins pour adultes lourdement handicapés." },
          { name: "FAM", description: "Foyer d'Accueil Médicalisé : accompagnement des adultes nécessitant un suivi médical." },
        ]}
        benefits={[
          "Projet personnalisé intégré avec suivi des objectifs et évaluations",
          "Coordination pluridisciplinaire simplifiée (éducateurs, soignants, psychologues)",
          "Agenda des professionnels et des usagers, rappels et gestion des transports",
          "Interopérabilité : alimentation du DMP, INS qualifiée, messagerie MSSanté",
          "Gestion des courriers, des bilans, des listes d'attente et des rapports attendus",
          "Tableaux de bord de pilotage pour la direction, les tutelles et les financeurs",
          "Traçabilité complète des accompagnements pour les évaluations et obligations métier",
        ]}
        modules={[
          "Dossier Usager Informatisé",
          "Projet Personnalisé",
          "Agenda partagé",
          "Transmissions ciblées",
          "Bilans & évaluations",
          "Dossier santé",
          "GED & documents",
          "Reporting & statistiques",
          "Listes d'attente",
          "Facturation",
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
