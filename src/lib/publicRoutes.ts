import { faqSchema } from "@/components/FAQSection";
import {
  buildRobotsTxt,
  buildSitemapXml,
  type PageSeo,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/seo";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const HOME_CRUMB = { name: "Accueil", path: "/" };
const RESSOURCES_CRUMB = { name: "Ressources", path: "/ressources" };
const OFFRES_CRUMB = { name: "Offres", path: "/offres" };
const SECTEURS_CRUMB = { name: "Secteurs", path: "/#secteurs" };

const essmsAudience = {
  "@type": "Audience",
  audienceType: "Établissements et services sociaux et médico-sociaux",
};

const buildServiceSchema = (
  name: string,
  path: string,
  description: string,
  serviceType: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  url: `${SITE_URL}${path}`,
  description,
  serviceType,
  provider: { "@id": `${SITE_URL}/#organization` },
  audience: essmsAudience,
  areaServed: {
    "@type": "Country",
    name: "France",
  },
});

const buildSoftwareApplicationSchema = (
  path: string,
  description: string,
  featureList?: string[],
) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SILAO",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Dossier Usager Informatisé",
  operatingSystem: "Web",
  url: `${SITE_URL}${path}`,
  description,
  featureList,
  publisher: { "@id": `${SITE_URL}/#organization` },
  audience: essmsAudience,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Démonstration gratuite sur demande",
  },
});

const homeSchema = [
  getOrganizationSchema(),
  getWebsiteSchema(),
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SILAO",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Dossier Usager Informatisé pour les ESSMS : protection de l'enfance, médico-social, accueil hébergement insertion et personnes en difficultés spécifiques.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Démonstration gratuite sur demande",
    },
  },
  faqSchema,
];

const resourcesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ressources SILAO",
    url: `${SITE_URL}/ressources`,
    description:
      "Ressources SILAO sur le DUI, la conformité SONS, le déploiement et les cas d'usage par secteur.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel contenu un site DUI doit-il publier pour être bien compris par les moteurs IA ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Des pages complètes, structurées par question, avec un vocabulaire métier précis, des réponses courtes puis approfondies, et des liens explicites vers les pages produit, secteur et méthode associées.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi un hub ressources est-il utile pour SILAO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parce qu'il relie les sujets informationnels, réglementaires et sectoriels aux pages commerciales. Cela améliore la compréhension du site par les moteurs et évite de laisser des contenus isolés sans lien sémantique fort.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sujets sont prioritaires pour SILAO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le déploiement du DUI, la conformité SONS, la reprise de données, l'usage en multi-établissements et les spécificités de chaque filière sociale ou médico-sociale.",
        },
      },
    ],
  },
];

export const PUBLIC_ROUTES: PageSeo[] = [
  {
    path: "/",
    title:
      "SILAO par D2L | Logiciel DUI pour les établissements sociaux et médico-sociaux",
    description:
      "SILAO aide les établissements sociaux et médico-sociaux à gérer dossier usager, agenda, transmissions, conformité Ségur et pilotage dans un outil unique.",
    priority: 1,
    changefreq: "weekly",
    schema: homeSchema,
  },
  {
    path: "/conformite-sons",
    title:
      "Conformité SONS SILAO | INS, MSSanté, DMP et interopérabilité CI-SIS",
    description:
      "Comprenez comment SILAO répond aux exigences SONS pour les ESSMS : INS qualifiée, MSSanté, DMP et interopérabilité.",
    breadcrumbs: [
      HOME_CRUMB,
      RESSOURCES_CRUMB,
      { name: "Conformité SONS", path: "/conformite-sons" },
    ],
    priority: 0.8,
    schema: buildServiceSchema(
      "Conformité SONS SILAO",
      "/conformite-sons",
      "Comprenez comment SILAO répond aux exigences SONS pour les ESSMS : INS qualifiée, MSSanté, DMP et interopérabilité.",
      "Conformité numérique et interopérabilité pour DUI ESSMS",
    ),
  },
  {
    path: "/grappes-esms",
    title:
      "Grappes multi-ESMS SILAO | DUI mutualisé pour associations et multi-sites",
    description:
      "Découvrez comment SILAO permet de mutualiser un DUI entre plusieurs établissements tout en conservant les spécificités métier et la confidentialité.",
    breadcrumbs: [
      HOME_CRUMB,
      RESSOURCES_CRUMB,
      { name: "Grappes multi-ESMS", path: "/grappes-esms" },
    ],
    priority: 0.8,
    schema: buildServiceSchema(
      "Grappes multi-ESMS SILAO",
      "/grappes-esms",
      "Découvrez comment SILAO permet de mutualiser un DUI entre plusieurs établissements tout en conservant les spécificités métier et la confidentialité.",
      "Mutualisation de DUI pour associations et multi-sites ESSMS",
    ),
  },
  {
    path: "/accompagnement",
    title:
      "Accompagnement SILAO | Gouvernance, conduite du changement et déploiement",
    description:
      "Découvrez l'accompagnement SILAO : cadrage projet, gouvernance, formation, conduite du changement et suivi des usages dans les ESSMS.",
    breadcrumbs: [HOME_CRUMB, { name: "Accompagnement", path: "/accompagnement" }],
    priority: 0.8,
    schema: buildServiceSchema(
      "Accompagnement SILAO",
      "/accompagnement",
      "Découvrez l'accompagnement SILAO : cadrage projet, gouvernance, formation, conduite du changement et suivi des usages dans les ESSMS.",
      "Accompagnement projet et déploiement DUI",
    ),
  },
  {
    path: "/formations",
    title:
      "Formations SILAO | Formations sur mesure, Qualiopi et accessibilité",
    description:
      "Découvrez les formations SILAO : formules adaptées aux équipes, certification Qualiopi, accessibilité et organisation sur mesure.",
    breadcrumbs: [HOME_CRUMB, { name: "Formations", path: "/formations" }],
    priority: 0.8,
    schema: buildServiceSchema(
      "Formations SILAO",
      "/formations",
      "Découvrez les formations SILAO : formules adaptées aux équipes, certification Qualiopi, accessibilité et organisation sur mesure.",
      "Formation professionnelle autour du DUI SILAO",
    ),
  },
  {
    path: "/engagements",
    title: "Engagements SILAO | Sécurité, accessibilité et démarche responsable",
    description:
      "Consultez les engagements SILAO : qualité de service, sécurité des données, référencement Ségur, accessibilité et démarche responsable.",
    breadcrumbs: [HOME_CRUMB, { name: "Engagements", path: "/engagements" }],
    priority: 0.7,
  },
  {
    path: "/secteur/handicap",
    title: "SILAO Handicap | DUI pour IME, ITEP, MAS, FAM, ESAT et SESSAD",
    description:
      "Découvrez SILAO pour le secteur handicap : dossier usager informatisé, coordination pluridisciplinaire, projet personnalisé et pilotage pour les structures PH.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      { name: "Médico-social — PH", path: "/secteur/handicap" },
    ],
    priority: 0.8,
    schema: buildSoftwareApplicationSchema(
      "/secteur/handicap",
      "Découvrez SILAO pour le secteur handicap : dossier usager informatisé, coordination pluridisciplinaire, projet personnalisé et pilotage pour les structures PH.",
      ["Dossier usager", "Agenda partagé", "Gestion MDPH", "Fiche d'urgence", "Gestion des attentes"],
    ),
  },
  {
    path: "/secteur/protection-enfance",
    title:
      "SILAO Protection de l'enfance | DUI pour MECS, SAE, AEMO et lieux de vie",
    description:
      "Découvrez SILAO pour la protection de l'enfance : PPE, mesures judiciaires, confidentialité renforcée et coordination avec l'ASE et les magistrats.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      { name: "Protection de l'enfance — PDE", path: "/secteur/protection-enfance" },
    ],
    priority: 0.8,
    schema: buildSoftwareApplicationSchema(
      "/secteur/protection-enfance",
      "Découvrez SILAO pour la protection de l'enfance : PPE, mesures judiciaires, confidentialité renforcée et coordination avec l'ASE et les magistrats.",
      ["Cahier de liaison", "Agenda", "Gestion des fratries", "Suivi des présences", "Accueil familial"],
    ),
  },
  {
    path: "/secteur/insertion-ahi",
    title: "SILAO AHI | DUI pour CHRS, CADA, HUDA, CPH et accueil de jour",
    description:
      "Découvrez SILAO pour l'accueil, l'hébergement et l'insertion : suivi de parcours, coordination multi-acteurs, gestion des places et reporting d'activité.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      { name: "Accueil, hébergement et insertion — AHI", path: "/secteur/insertion-ahi" },
    ],
    priority: 0.8,
    schema: buildSoftwareApplicationSchema(
      "/secteur/insertion-ahi",
      "Découvrez SILAO pour l'accueil, l'hébergement et l'insertion : suivi de parcours, coordination multi-acteurs, gestion des places et reporting d'activité.",
      ["Gestion des hébergements", "Accompagnement au logement", "Suivi administratif", "Budget personnel", "Suivi médical"],
    ),
  },
  {
    path: "/secteur/personnes-difficultes-specifiques",
    title:
      "SILAO PDS | DUI pour LHSS, ACT, CAARUD et structures santé-social",
    description:
      "Découvrez SILAO pour les personnes en difficultés spécifiques : suivi coordonné, alertes, dossier santé et pilotage d'activité.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      {
        name: "Personnes en difficultés spécifiques — PDS",
        path: "/secteur/personnes-difficultes-specifiques",
      },
    ],
    priority: 0.8,
    schema: buildSoftwareApplicationSchema(
      "/secteur/personnes-difficultes-specifiques",
      "Découvrez SILAO pour les personnes en difficultés spécifiques : suivi coordonné, alertes, dossier santé et pilotage d'activité.",
      ["Dossier médical", "DMP", "Alertes", "Accompagnement au logement", "Coordination pluridisciplinaire"],
    ),
  },
  {
    path: "/offres",
    title:
      "Offres de déploiement SILAO | Méthode, reprise de données et formation",
    description:
      "Découvrez les offres de déploiement SILAO : cadrage, paramétrage, reprise de données, formation et suivi post-démarrage pour les ESSMS.",
    breadcrumbs: [HOME_CRUMB, OFFRES_CRUMB],
    priority: 0.9,
    schema: buildServiceSchema(
      "Offres de déploiement SILAO",
      "/offres",
      "Découvrez les offres de déploiement SILAO : cadrage, paramétrage, reprise de données, formation et suivi post-démarrage pour les ESSMS.",
      "Déploiement de DUI pour ESSMS",
    ),
  },
  {
    path: "/abonnement",
    title:
      "Abonnement SILAO | Hébergement, support, mises à jour et conformité inclus",
    description:
      "Consultez le modèle d'abonnement SILAO : hébergement HDS, support, maintenance, mises à jour réglementaires et évolutions fonctionnelles inclus.",
    breadcrumbs: [HOME_CRUMB, OFFRES_CRUMB, { name: "Abonnement", path: "/abonnement" }],
    priority: 0.8,
    schema: buildServiceSchema(
      "Abonnement SILAO",
      "/abonnement",
      "Consultez le modèle d'abonnement SILAO : hébergement HDS, support, maintenance, mises à jour réglementaires et évolutions fonctionnelles inclus.",
      "Abonnement SaaS pour DUI ESSMS",
    ),
  },
  {
    path: "/ressources",
    title:
      "Ressources SILAO par D2L | DUI, SONS, déploiement et secteurs ESSMS",
    description:
      "Guides et repères SILAO sur le DUI, la conformité SONS, le déploiement, les grappes multi-établissements et les secteurs ESSMS.",
    breadcrumbs: [HOME_CRUMB, RESSOURCES_CRUMB],
    priority: 0.7,
    schema: resourcesSchema,
  },
  {
    path: "/aide-support",
    title: "Aide et support SILAO | Contact, ressources et orientation",
    description:
      "Retrouvez les points de contact, ressources utiles et parcours d'assistance SILAO pour votre projet DUI ou vos questions produit.",
    breadcrumbs: [HOME_CRUMB, { name: "Aide et support", path: "/aide-support" }],
    priority: 0.4,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Aide et support SILAO",
      url: `${SITE_URL}/aide-support`,
      email: CONTACT_EMAIL,
    },
  },
  {
    path: "/mentions-legales",
    title: "Mentions légales | SILAO par D2L",
    description:
      "Consultez les mentions légales du site SILAO édité par D2L Informatique.",
    breadcrumbs: [HOME_CRUMB, { name: "Mentions légales", path: "/mentions-legales" }],
    priority: 0.2,
  },
  {
    path: "/politique-de-confidentialite",
    title: "Politique de confidentialité | SILAO par D2L",
    description:
      "Consultez la politique de confidentialité liée aux formulaires publics et aux données de contact du site SILAO.",
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Politique de confidentialité", path: "/politique-de-confidentialite" },
    ],
    priority: 0.2,
  },
  {
    path: "/politique-de-cookies",
    title: "Politique de cookies | SILAO par D2L",
    description:
      "Consultez la politique de cookies du site SILAO et l'état actuel des traceurs utilisés.",
    breadcrumbs: [HOME_CRUMB, { name: "Politique de cookies", path: "/politique-de-cookies" }],
    priority: 0.2,
  },
  {
    path: "/plan-du-site",
    title: "Plan du site SILAO | Toutes les pages publiques",
    description:
      "Parcourez l'ensemble des pages publiques SILAO : offres, secteurs, ressources, accompagnement et support.",
    breadcrumbs: [HOME_CRUMB, { name: "Plan du site", path: "/plan-du-site" }],
    priority: 0.3,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Plan du site SILAO",
      url: `${SITE_URL}/plan-du-site`,
    },
  },
  {
    path: "/404",
    title: "Page introuvable | SILAO",
    description:
      "La page demandée est introuvable. Retrouvez les principaux accès SILAO depuis cette page de secours.",
    noindex: true,
  },
];

export const getPageSeo = (path: string) => {
  const page = PUBLIC_ROUTES.find((route) => route.path === path);

  if (!page) {
    throw new Error(`SEO introuvable pour la route ${path}`);
  }

  return page;
};

export const SITEMAP_XML = buildSitemapXml(PUBLIC_ROUTES);
export const ROBOTS_TXT = buildRobotsTxt();
