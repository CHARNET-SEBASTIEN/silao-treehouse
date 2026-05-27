import { Baby } from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { filiereThemes } from "@/lib/filiereThemes";

const SecteurPDEPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Baby}
        name="Protection de l'enfance — PDE"
        tagline="Le secteur historique de Silao, pensé pour l'hébergement comme pour le milieu ouvert"
        description="La protection de l'enfance est le tout premier secteur pour lequel Silao a dédié ses fonctionnalités. L'outil couvre les besoins de l'hébergement, du milieu ouvert, de l'accueil familial et des accompagnements spécifiques, avec une adaptation continue aux réalités terrain."
        detailedSections={[
          {
            title: "Les enjeux du secteur protection de l'enfance",
            content: "Les MECS (Maisons d'Enfants à Caractère Social) doivent gérer quotidiennement l'hébergement, les présences, les accueils réguliers, mais aussi coordonner avec les parents et les intervenants externes. Les structures de milieu ouvert comme les AEMO et AASC travaillent sans colocalisation : le suivi se fait sur rendez-vous, en visio, par appel ou email. L'accueil familial ajoute une couche de complexité : les assistants familiaux doivent être suivis, leurs agréments validés, les places coordonnées avec les demandes ASE.",
          },
          {
            title: "Comment Silao s'adapte aux différentes structures",
            content: "Pour les MECS, l'agenda devient le repère central pour savoir qui fait quoi, quand, et avec qui, tandis que le cahier de liaison centralise les écrits partagés : observations, demandes des parents, notes éducatives. La gestion des fratries permet de lier les dossiers des enfants placés ensemble, sans perdre la confidentialité individuelle.\n\nPour le milieu ouvert, ces mêmes outils s'adaptent : l'agenda affiche les rendez-vous et les appels documentés, le cahier de liaison centralise les écrits sans surcharge. Pour l'accueil familial, la gestion des assistants familiaux et des agréments devient structurante.",
          },
          {
            title: "Conformité Ségur MS2 PDE",
            content: "Ségur MS2 impose que les logiciels de ce secteur respectent un cadre strict de confidentialité, de traçabilité et de partage de données avec les ASE régionales. Silao a été conçu en tenant compte de ces obligations. Les droits d'accès sont fins, la traçabilité des opérations automatisée, les exports vers les statistiques nationales programmés.",
          },
        ]}
        seoPath="/secteur/protection-enfance"
        faqSectorId="pde"
        faqTitle="la protection de l'enfance"
        color={filiereThemes.pde.text}
        bgColor={filiereThemes.pde.bg}
        borderColor={filiereThemes.pde.border}
        structures={[
          {
            name: "Enfance et jeunesse avec hébergement",
            description:
              "Gestion de l'argent de poche, de l'habillement, des fratries et traçabilité des opérations saisies.",
          },
          {
            name: "Adolescents et adultes en suivi extérieur",
            description:
              "Suivi vers l'autonomie avec logement, budget personnel, droits sociaux et accompagnement vers l'emploi.",
          },
          {
            name: "Accueil en famille",
            description:
              "Gestion des assistants familiaux, des agréments, des places disponibles et historisation des accueils.",
          },
          {
            name: "Lieux de vie et dispositifs expérimentaux",
            description:
              "Un accompagnement dédié pour des prises en charge spécifiques, évolutives ou innovantes.",
          },
        ]}
        benefits={[
          "L'agenda et le cahier de liaison constituent deux des piliers de l'activité.",
          "Les fonctionnalités ont été conçues pour répondre aux besoins de l'hébergement comme du milieu ouvert.",
          "Les liens entre membres d'une fratrie permettent de mutualiser les informations utiles entre plusieurs fiches usagers.",
          "Le suivi des présences intègre un circuit de validation sur deux niveaux et des exports pour la facturation ou les statistiques.",
          "Silao est aujourd'hui référencé DSR Ségur MS2 PDE.",
          "Droits d'accès fins et traçabilité des opérations intégrés par défaut pour respecter la confidentialité.",
          "Exports statistiques et facturation prêts pour l'ASE et les tutelles de gestion.",
          "Intégration des visio, appels et emails dans le cahier de liaison sans isolation des données.",
          "Agenda partagé avec les parents et intervenants externes pour une meilleure coordination.",
          "Multi-structures : gérer une MECS et un placement familial depuis le même outil.",
        ]}
        modules={[
          "Agenda",
          "Cahier de liaison",
          "Gestion des fratries",
          "Argent de poche et habillement",
          "Gestion des logements",
          "Gestion des droits sociaux",
          "Suivi des présences",
          "Accueil familial",
          "Exports statistiques et facturation",
        ]}
        clients={[]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurPDEPage;
