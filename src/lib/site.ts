export const DEFAULT_SITE_URL = "https://d2l-silao.lovable.app";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;

export const SITE_NAME = "SILAO par D2L";
export const SITE_LOCALE = "fr_FR";
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/QOTfjhIWFFMA2woaEujwlASi5BO2/social-images/social-1773041408123-hero-tree-artguru.webp";
export const CONTACT_EMAIL = "contact@silao.fr";
