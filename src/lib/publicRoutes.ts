import { faqSchema } from "@/components/FAQSection";
import { resourcesFaqSchema } from "@/components/ResourcesFaqSection";
import { getSectorFaqSchema } from "@/components/SectorFaqSection";
import {
  buildRobotsTxt,
  buildSitemapXml,
  type PageSeo,
  getOrganizationSchema,
  getWebsiteSchema,
  resolveUrl,
} from "@/lib/seo";
import { CONTACT_EMAIL, PRODUCT_NAME, SITE_URL } from "@/lib/site";

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
  url: resolveUrl(path),
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
  "@id": `${resolveUrl(path)}#software`,
  name: PRODUCT_NAME,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Dossier Usager Informatisé",
  operatingSystem: "Web",
  url: resolveUrl(path),
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
    "@id": `${SITE_URL}/#software`,
    name: PRODUCT_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Dossier Usager Informatisé pour les ESSMS : protection de l'enfance, médico-social, accueil hébergement insertion et personnes en difficultés spécifiques.",
    featureList: [
      "Dossier usager informatisé",
      "Agenda et planning",
      "Cahier de liaison",
      "Services socles Ségur",
      "Pilotage et facturation",
    ],
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
    name: `Ressources ${PRODUCT_NAME}`,
    url: resolveUrl("/ressources"),
    description:
      `Ressources ${PRODUCT_NAME} sur le DUI, la conformité Ségur, le déploiement et les cas d'usage par secteur.`,
  },
  resourcesFaqSchema,
];

export const PUBLIC_ROUTES: PageSeo[] = [
  {
    path: "/",
    title: "Logiciel DUI ESSMS | Dossier usager informatisé médico-social - Silao",
    description:
      "Silao est un logiciel DUI pour les ESSMS : dossier usager informatisé, agenda, transmissions, coordination, pilotage et conformité Ségur pour le médico-social, la protection de l'enfance et l'AHI.",
    priority: 1,
    changefreq: "weekly",
    schema: homeSchema,
  },
  {
    path: "/conformite-sons",
    title:
      "Conformité Ségur Silao | SONS, INS, MSSanté, DMP et CI-SIS",
    description:
      "Comprenez comment Silao répond aux exigences Ségur pour les ESSMS : SONS, INS qualifiée, MSSanté, DMP et interopérabilité.",
    breadcrumbs: [
      HOME_CRUMB,
      RESSOURCES_CRUMB,
      { name: "Conformité Ségur", path: "/conformite-sons" },
    ],
    priority: 0.8,
    schema: buildServiceSchema(
      "Conformité Ségur de Silao",
      "/conformite-sons",
      "Comprenez comment Silao répond aux exigences Ségur pour les ESSMS : SONS, INS qualifiée, MSSanté, DMP et interopérabilité.",
      "Conformité numérique et interopérabilité pour DUI ESSMS",
    ),
  },
  {
    path: "/grappes-esms",
    title:
      "Grappes multi-ESMS | DUI mutualisé avec Silao",
    description:
      "Découvrez comment Silao permet de mutualiser un DUI entre plusieurs établissements tout en conservant les spécificités métier et la confidentialité.",
    breadcrumbs: [
      HOME_CRUMB,
      RESSOURCES_CRUMB,
      { name: "Grappes multi-ESMS", path: "/grappes-esms" },
    ],
    priority: 0.8,
    schema: buildServiceSchema(
      "Grappes multi-ESMS avec Silao",
      "/grappes-esms",
      "Découvrez comment Silao permet de mutualiser un DUI entre plusieurs établissements tout en conservant les spécificités métier et la confidentialité.",
      "Mutualisation de DUI pour associations et multi-sites ESSMS",
    ),
  },
  {
    path: "/accompagnement",
    title:
      "Accompagnement Silao | Gouvernance et déploiement DUI",
    description:
      "Découvrez l'accompagnement Silao : cadrage projet, gouvernance, formation, conduite du changement et suivi des usages dans les ESSMS.",
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Accompagnement", path: "/accompagnement" },
    ],
    priority: 0.8,
    schema: buildServiceSchema(
      "Accompagnement Silao",
      "/accompagnement",
      "Découvrez l'accompagnement Silao : cadrage projet, gouvernance, formation, conduite du changement et suivi des usages dans les ESSMS.",
      "Accompagnement projet et déploiement DUI",
    ),
  },
  {
    path: "/formations",
    title:
      "Formations Silao | Sur mesure, Qualiopi et accessibilité",
    description:
      "Découvrez les formations Silao : formules adaptées aux équipes, certification Qualiopi, accessibilité et organisation sur mesure.",
    breadcrumbs: [HOME_CRUMB, { name: "Formations", path: "/formations" }],
    priority: 0.8,
    schema: buildServiceSchema(
      "Formations Silao",
      "/formations",
      "Découvrez les formations Silao : formules adaptées aux équipes, certification Qualiopi, accessibilité et organisation sur mesure.",
      "Formation professionnelle autour du DUI Silao",
    ),
  },
  {
    path: "/engagements",
    title:
      "Engagements de Silao | Sécurité, accessibilité et démarche responsable",
    description:
      "Consultez les engagements de Silao : qualité de service, sécurité des données, référencement Ségur, accessibilité et démarche responsable au service du médico-social.",
    breadcrumbs: [HOME_CRUMB, { name: "Engagements", path: "/engagements" }],
    priority: 0.7,
  },
  {
    path: "/secteur/handicap",
    title: "Silao pour le handicap | DUI pour IME, ITEP, MAS, FAM, ESAT et SESSAD",
    description:
      "Découvrez Silao pour le secteur handicap : dossier usager informatisé, coordination pluridisciplinaire, projet personnalisé et pilotage pour les structures PH.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      { name: "Médico-social — PH", path: "/secteur/handicap" },
    ],
    priority: 0.8,
    schema: [
      buildSoftwareApplicationSchema(
        "/secteur/handicap",
        "Découvrez Silao pour le secteur handicap : dossier usager informatisé, coordination pluridisciplinaire, projet personnalisé et pilotage pour les structures PH.",
        [
          "Dossier usager",
          "Agenda partagé",
          "Gestion MDPH",
          "Fiche d'urgence",
          "Gestion des attentes",
        ],
      ),
      getSectorFaqSchema("ph"),
    ],
  },
  {
    path: "/secteur/camsp-cmpp",
    title: "Silao pour CAMSP et CMPP | DUI pour suivis ambulatoires et coordination",
    description:
      "Découvrez Silao pour les CAMSP et CMPP : dossier usager informatisé, bilans, agenda, coordination pluridisciplinaire, listes d'attente et pilotage d'activité.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      { name: "CAMSP / CMPP", path: "/secteur/camsp-cmpp" },
    ],
    priority: 0.75,
    schema: buildSoftwareApplicationSchema(
      "/secteur/camsp-cmpp",
      "Découvrez Silao pour les CAMSP et CMPP : dossier usager informatisé, bilans, agenda, coordination pluridisciplinaire, listes d'attente et pilotage d'activité.",
      [
        "Bilans et évaluations",
        "Planning de séances",
        "Coordination pluridisciplinaire",
        "Gestion des listes d'attente",
        "Reporting d'activité",
      ],
    ),
  },
  {
    path: "/secteur/protection-enfance",
    title:
      "Protection enfance | DUI Silao pour MECS, SAE et AEMO",
    description:
      "Découvrez Silao pour la protection de l'enfance : PPE, mesures judiciaires, confidentialité renforcée et coordination avec l'ASE et les magistrats.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      {
        name: "Protection de l'enfance — PDE",
        path: "/secteur/protection-enfance",
      },
    ],
    priority: 0.8,
    schema: [
      buildSoftwareApplicationSchema(
        "/secteur/protection-enfance",
        "Découvrez Silao pour la protection de l'enfance : PPE, mesures judiciaires, confidentialité renforcée et coordination avec l'ASE et les magistrats.",
        [
          "Cahier de liaison",
          "Agenda",
          "Gestion des fratries",
          "Suivi des présences",
          "Accueil familial",
        ],
      ),
      getSectorFaqSchema("pde"),
    ],
  },
  {
    path: "/secteur/insertion-ahi",
    title: "Silao pour l'AHI | DUI pour CHRS, CADA, HUDA, CPH et accueil de jour",
    description:
      "Découvrez Silao pour l'accueil, l'hébergement et l'insertion : suivi de parcours, coordination multi-acteurs, gestion des places et reporting d'activité.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      {
        name: "Accueil, hébergement et insertion — AHI",
        path: "/secteur/insertion-ahi",
      },
    ],
    priority: 0.8,
    schema: [
      buildSoftwareApplicationSchema(
        "/secteur/insertion-ahi",
        "Découvrez Silao pour l'accueil, l'hébergement et l'insertion : suivi de parcours, coordination multi-acteurs, gestion des places et reporting d'activité.",
        [
          "Gestion des hébergements",
          "Accompagnement au logement",
          "Suivi administratif",
          "Budget personnel",
          "Suivi médical",
        ],
      ),
      getSectorFaqSchema("ahi"),
    ],
  },
  {
    path: "/secteur/personnes-difficultes-specifiques",
    title: "Silao pour les PDS | DUI LHSS, ACT et CAARUD",
    description:
      "Découvrez Silao pour les personnes en difficultés spécifiques : suivi coordonné, rappels, dossier santé et pilotage d'activité.",
    breadcrumbs: [
      HOME_CRUMB,
      SECTEURS_CRUMB,
      {
        name: "Personnes en difficultés spécifiques — PDS",
        path: "/secteur/personnes-difficultes-specifiques",
      },
    ],
    priority: 0.8,
    schema: [
      buildSoftwareApplicationSchema(
        "/secteur/personnes-difficultes-specifiques",
        "Découvrez Silao pour les personnes en difficultés spécifiques : suivi coordonné, rappels, dossier santé et pilotage d'activité.",
        [
          "Dossier médical",
          "DMP",
          "Rappels",
          "Accompagnement au logement",
          "Coordination pluridisciplinaire",
        ],
      ),
      getSectorFaqSchema("pds"),
    ],
  },
  {
    path: "/offres",
    title:
      "Déploiement de Silao | Méthode, reprise de données et formation",
    description:
      "Découvrez les offres de déploiement de Silao : cadrage, paramétrage, reprise de données, formation et suivi post-démarrage pour les ESSMS.",
    breadcrumbs: [HOME_CRUMB, OFFRES_CRUMB],
    priority: 0.9,
    schema: buildServiceSchema(
      "Déploiement de Silao",
      "/offres",
      "Découvrez les offres de déploiement de Silao : cadrage, paramétrage, reprise de données, formation et suivi post-démarrage pour les ESSMS.",
      "Déploiement de DUI pour ESSMS",
    ),
  },
  {
    path: "/abonnement",
    title:
      "Abonnement Silao | Hébergement, support et mises à jour",
    description:
      "Consultez le modèle d'abonnement Silao : hébergement HDS, support, maintenance, mises à jour réglementaires et évolutions fonctionnelles inclus.",
    breadcrumbs: [
      HOME_CRUMB,
      OFFRES_CRUMB,
      { name: "Abonnement", path: "/abonnement" },
    ],
    priority: 0.8,
    schema: buildServiceSchema(
      "Abonnement Silao",
      "/abonnement",
      "Consultez le modèle d'abonnement Silao : hébergement HDS, support, maintenance, mises à jour réglementaires et évolutions fonctionnelles inclus.",
      "Abonnement SaaS pour DUI ESSMS",
    ),
  },
  {
    path: "/ressources",
    title:
      "Ressources Silao | DUI, Ségur, déploiement et secteurs ESSMS",
    description:
      "Guides et repères Silao sur le DUI, la conformité Ségur, le déploiement, les grappes multi-établissements et les secteurs ESSMS.",
    breadcrumbs: [HOME_CRUMB, RESSOURCES_CRUMB],
    priority: 0.7,
    schema: resourcesSchema,
  },
  {
    path: "/mentions-legales",
    title: "Mentions légales | Silao par D2L Informatique",
    description:
      "Consultez les mentions légales du site Silao édité par D2L Informatique.",
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Mentions légales", path: "/mentions-legales" },
    ],
    priority: 0.2,
  },
  {
    path: "/politique-de-confidentialite",
    title: "Politique de confidentialité | Silao par D2L Informatique",
    description:
      "Consultez la politique de confidentialité liée aux formulaires publics et aux données de contact du site Silao.",
    breadcrumbs: [
      HOME_CRUMB,
      {
        name: "Politique de confidentialité",
        path: "/politique-de-confidentialite",
      },
    ],
    priority: 0.2,
  },
  {
    path: "/politique-de-cookies",
    title: "Politique de cookies | Silao par D2L Informatique",
    description:
      "Politique de cookies Silao : Google Ads, mode de consentement et bandeau de choix.",
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Politique de cookies", path: "/politique-de-cookies" },
    ],
    priority: 0.2,
  },
  {
    path: "/plan-du-site",
    title: "Plan du site Silao | Toutes les pages publiques",
    description:
      "Parcourez l'ensemble des pages publiques Silao : offres, secteurs, ressources, accompagnement et contact.",
    breadcrumbs: [HOME_CRUMB, { name: "Plan du site", path: "/plan-du-site" }],
    priority: 0.3,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Plan du site Silao",
      url: resolveUrl("/plan-du-site"),
    },
  },
  {
    path: "/404",
    title: "404 | Page introuvable sur Silao",
    description:
      "La page demandée est introuvable. Retrouvez les principaux accès Silao depuis cette page de secours.",
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
