import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { ShieldCheck } from "lucide-react";

const SecteurPDEPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <main className="pt-16">
      <SecteurPageLayout
        icon={ShieldCheck}
        name="Protection de l'enfance — PDE"
        tagline="Un DUI sécurisé pour le suivi des mineurs protégés"
        description="Silao répond aux exigences spécifiques de la Protection de l'Enfance : confidentialité renforcée, gestion des mesures judiciaires et administratives, coordination avec les services de l'ASE et les magistrats."
        color="text-secondary"
        bgColor="bg-secondary/10"
        structures={[
          { name: "MECS", description: "Maison d'Enfants à Caractère Social : hébergement et accompagnement éducatif des mineurs confiés." },
          { name: "SAE", description: "Service d'Accueil d'Urgence : prise en charge immédiate en situation de danger." },
          { name: "AEMO", description: "Action Éducative en Milieu Ouvert : suivi éducatif à domicile sous mandat judiciaire." },
          { name: "Lieux de vie", description: "Structures à taille humaine pour un accompagnement individualisé au quotidien." },
        ]}
        benefits={[
          "Gestion des mesures judiciaires et administratives (OPP, AEMO, placement)",
          "Confidentialité renforcée et droits d'accès granulaires",
          "Suivi du Projet Pour l'Enfant (PPE) conforme à la loi 2016",
          "Coordination avec l'ASE, les juges et les familles",
          "Traçabilité des incidents et événements significatifs",
          "Gestion des visites médiatisées et des droits de visite",
          "Rapports automatisés pour les magistrats et le Département",
          "Conformité Ségur du numérique en milieu social",
        ]}
        modules={[
          "Dossier Usager Informatisé",
          "Projet Pour l'Enfant",
          "Cahier de vie numérique",
          "Gestion des mesures",
          "Transmissions sécurisées",
          "Agenda & rendez-vous",
          "GED & documents",
          "Rapports & bilans",
          "Suivi de scolarité",
          "Facturation Département",
        ]}
        clients={[
          { name: "Fondation Grancher", quote: "Silao nous offre la traçabilité et la sécurité indispensables pour le suivi de nos jeunes." },
          { name: "MECS La Cordée", quote: "L'outil s'adapte parfaitement à nos process de suivi éducatif." },
        ]}
      />
    </main>
    <FooterSection />
  </div>
);

export default SecteurPDEPage;
