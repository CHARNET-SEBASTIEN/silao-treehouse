import { Home } from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SecteurPageLayout from "@/components/SecteurPageLayout";
import { filiereThemes } from "@/lib/filiereThemes";

const SecteurAHIPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <Navbar />
    <PageMain className="pt-16">
      <SecteurPageLayout
        icon={Home}
        name="Accueil, hébergement et insertion — AHI"
        tagline="Un outil conçu pour tracer les actions et coordonner les parcours d'insertion"
        description="Le secteur de l'insertion a des besoins spécifiques auxquels Silao répond depuis plus de quinze ans. L'accompagnement de personnes en situation de détresse sociale ou administrative suppose des fonctionnalités capables d'assurer la traçabilité des actions et une bonne communication entre acteurs."
        detailedSections={[
          {
            title: "Les enjeux du secteur AHI",
            content: "Les CHRS (Centres d'Hébergement et de Réinsertion Sociale) doivent coordonner hébergement, accompagnement social, démarches administratives et orientation vers le logement ou l'emploi. Les CADA (Centres d'Accueil de Demandeurs d'Asile) gèrent les procédures de régularisation, l'apprentissage de la langue et l'intégration progressive. Les structures d'accueil de jour et les dispositifs HUDA suivent des personnes sans hébergement stable, avec des parcours fragmentés et des situations instables.",
          },
          {
            title: "Comment Silao répond aux besoins AHI",
            content: "Pour les structures d'hébergement, l'outil suit les parcours de logement, les places disponibles, la rotation et les délais de séjour. Pour l'accompagnement social, le plan d'accompagnement structure les objectifs, les démarches et les actions coordonnées entre travailleurs sociaux.\n\nPour les situations familiales, Silao permet de lier plusieurs usagers dans une même unité sans perdre les spécificités individuelles. Les démarches administratives, juridiques, de santé et d'emploi sont tracées dans le même outil, sans double saisie.",
          },
          {
            title: "Conformité Ségur et interopérabilité",
            content: "Le référentiel Ségur impose aux logiciels ESSMS une interopérabilité stricte, des droits d'accès fins et une traçabilité des données. Silao intègre ces exigences dans sa conception : les exports statistiques vers les autorités de tutelle sont programmés, les droits d'accès configurables par rôle et par structure, la traçabilité des opérations automatisée.",
          },
        ]}
        seoPath="/secteur/insertion-ahi"
        faqSectorId="ahi"
        faqTitle="l'accueil, l'hébergement et l'insertion"
        color={filiereThemes.ahi.text}
        bgColor={filiereThemes.ahi.bg}
        borderColor={filiereThemes.ahi.border}
        structures={[
          {
            name: "Hébergement adultes seuls ou en famille",
            description:
              "Historisation et suivi des accompagnements pour les personnes seules comme pour les familles, en évitant la double saisie.",
          },
          {
            name: "Accompagnement au logement",
            description:
              "Suivi des démarches, traçabilité des actions et statistiques sur les affectations, la rotation et les délais de séjour.",
          },
          {
            name: "Adultes en suivi extérieur",
            description:
              "Gestion des logements, du budget personnel, des droits sociaux et de l'accompagnement vers l'emploi ou le logement.",
          },
          {
            name: "Personnes en régularisation",
            description:
              "Suivi des procédures liées au titre de séjour ainsi que des démarches administratives, juridiques et sociales.",
          },
          {
            name: "Accompagnement emploi et apprentissage des langues",
            description:
              "Coordination des actions d'accompagnement, y compris pour les liens familiaux, la comptabilisation individuelle ou famille et le suivi médical.",
          },
        ]}
        benefits={[
          "Traçabilité des actions d'accompagnement social, administratif et juridique.",
          "Bonne communication entre les acteurs sur le terrain grâce à un outil commun.",
          "Suivi des parcours d'hébergement, de logement, d'emploi et de santé.",
          "Création de liens entre plusieurs usagers pour gérer les situations familiales.",
          "Comptabilisation individuelle et/ou famille pour les besoins de statistiques et de facturation.",
          "Plan d'accompagnement structuré pour coordonner les objectifs et les démarches entre équipes.",
          "Gestion des places et rotation d'hébergement avec historisation des parcours.",
          "Exports statistiques prêts pour les autorités de tutelle et le reporting d'activité.",
          "Conformité Ségur : droits d'accès fins, traçabilité et interopérabilité intégrés.",
          "Multi-dispositifs : gérer CHRS, CADA et accueil de jour depuis la même plateforme.",
        ]}
        modules={[
          "Plan d'accompagnement",
          "Gestion des hébergements",
          "Accompagnement au logement",
          "Suivi administratif et juridique",
          "Gestion du budget personnel",
          "Gestion des droits sociaux",
          "Accompagnement à l'emploi",
          "Apprentissage des langues",
          "Suivi médical",
        ]}
        clients={[]}
      />
    </PageMain>
    <FooterSection />
  </div>
);

export default SecteurAHIPage;
