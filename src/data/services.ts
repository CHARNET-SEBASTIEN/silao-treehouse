import { ServiceInfo } from "@/types/serviceStatus";

export const ESANTE_SERVICES: ServiceInfo[] = [
  {
    id: "insi",
    name: "INSi",
    description: "Identité Nationale de Santé - Service d'identification des patients",
    category: "identity",
    contact: "GIE SESAM-Vitale",
    statusUrl: "https://www.sesam-vitale.fr/insi",
    documentationUrl: "https://www.sesam-vitale.fr/insi",
    environments: [
      { name: "Production", status: "operational" },
      { name: "Pré-production", status: "operational" }
    ]
  },
  {
    id: "psc",
    name: "Pro Santé Connect",
    description: "Service d'authentification des professionnels de santé",
    category: "auth",
    contact: "ANS",
    statusUrl: "https://status.esante.gouv.fr",
    documentationUrl: "https://esante.gouv.fr/produits-services/pro-sante-connect",
    environments: [
      { name: "Production", status: "operational" },
      { name: "Pré-production", status: "operational" }
    ]
  },
  {
    id: "mssante",
    name: "MSSanté",
    description: "Messagerie sécurisée de santé",
    category: "messaging",
    contact: "ANS",
    statusUrl: "https://status.esante.gouv.fr",
    documentationUrl: "https://mssante.fr",
    environments: [
      { name: "Production", status: "operational" },
      { name: "Pré-production", status: "operational" }
    ]
  },
  {
    id: "dmp",
    name: "DMP / Mon espace santé",
    description: "Dossier Médical Partagé et services usagers",
    category: "other",
    contact: "CNAM",
    statusUrl: "https://status.esante.gouv.fr",
    documentationUrl: "https://www.monespacesante.fr",
    environments: [
      { name: "Production", status: "operational" },
      { name: "Pré-production", status: "operational" }
    ]
  },
  {
    id: "annuaire-sante",
    name: "Annuaire Santé",
    description: "Référentiel des professionnels de santé (RPPS, RPPS+)",
    category: "directory",
    contact: "ANS",
    statusUrl: "https://status.esante.gouv.fr",
    documentationUrl: "https://annuaire.sante.fr",
    environments: [
      { name: "Production", status: "operational" },
      { name: "Pré-production", status: "operational" }
    ]
  },
  {
    id: "convergence",
    name: "Convergence ANS",
    description: "Plateforme de recette et qualification",
    category: "infrastructure",
    contact: "ANS",
    statusUrl: "https://status.esante.gouv.fr",
    documentationUrl: "https://esante.gouv.fr/ens",
    environments: [
      { name: "Recette", status: "operational" },
      { name: "Qualification", status: "operational" }
    ]
  },
  {
    id: "ci-sis",
    name: "CI-SIS",
    description: "Cadre d'Interopérabilité des Systèmes d'Information de Santé",
    category: "infrastructure",
    contact: "ANS",
    statusUrl: "https://status.esante.gouv.fr",
    documentationUrl: "https://esante.gouv.fr/interoperabilite",
    environments: [
      { name: "Documentation", status: "operational" }
    ]
  },
  {
    id: "sesam-vitale",
    name: "SESAM-Vitale Industriels",
    description: "Informations techniques et maintenances",
    category: "infrastructure",
    contact: "GIE SESAM-Vitale",
    statusUrl: "https://www.sesam-vitale.fr",
    documentationUrl: "https://www.sesam-vitale.fr",
    environments: [
      { name: "Production", status: "operational" }
    ]
  },
  {
    id: "asp-segur",
    name: "ASP Ségur",
    description: "Plateforme de référencement et financement Ségur",
    category: "other",
    contact: "ASP",
    statusUrl: "https://segurnum.asp-public.fr/segurnum",
    documentationUrl: "https://segurnum.asp-public.fr/segurnum",
    environments: [
      { name: "Production", status: "operational" }
    ]
  }
];

export const getCategoryLabel = (category: ServiceInfo["category"]): string => {
  const labels: Record<ServiceInfo["category"], string> = {
    identity: "Identité",
    messaging: "Messagerie",
    directory: "Annuaire",
    auth: "Authentification",
    infrastructure: "Infrastructure",
    other: "Autres services"
  };
  return labels[category];
};
