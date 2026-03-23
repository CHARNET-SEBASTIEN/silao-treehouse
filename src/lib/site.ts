export const DEFAULT_SITE_URL = "https://d2l-silao.lovable.app";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;

export const SITE_NAME = "SILAO par D2L";
export const SITE_LOCALE = "fr_FR";
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/QOTfjhIWFFMA2woaEujwlASi5BO2/social-images/social-1773041408123-hero-tree-artguru.webp";
export const CONTACT_EMAIL = "contact@silao.fr";
export const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL || "https://fr.linkedin.com/company/d2l-informatique";

export const COMPANY_NAME = "D2L Informatique";
export const COMPANY_LEGAL_FORM = "SARL";
export const COMPANY_SHARE_CAPITAL = "21.000 €";
export const COMPANY_RCS = "483 422 010 RCS Tours";
export const COMPANY_ADDRESS = "132 rue Fondaudège, 33000 Bordeaux";
export const LEGAL_REPRESENTATIVE = "Sébastien CHARNET";
export const HOSTING_PROVIDER = "OVHcloud";
export const HOSTING_ADDRESS = "2 rue Kellermann, 59100 Roubaix, France";
export const DPO_EMAIL = "dpo-d2linformatique@agencergpd.eu";
export const RIGHTS_REQUEST_URL =
  "https://agencergpd.fragmos.app/org/d2l-informatique/public/right-requests";
