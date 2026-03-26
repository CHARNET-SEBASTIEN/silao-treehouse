export const DEFAULT_SITE_URL = "https://www.silao.fr";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;

export const SITE_NAME = "SILAO par D2L Informatique";
export const SITE_LOCALE = "fr_FR";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-silao-tree.png`;

/** Dimensions du fichier `public/og-silao-tree.png` (à mettre à jour si l’asset change). */
export const DEFAULT_OG_IMAGE_WIDTH = 1668;
export const DEFAULT_OG_IMAGE_HEIGHT = 1758;

/** Texte alternatif pour les cartes sociales (og:image / Twitter). */
export const DEFAULT_OG_IMAGE_ALT =
  "SILAO — logiciel de dossier usager pour les établissements et services sociaux et médico-sociaux";

/** Alignés sur les fonds `--background` (clair / sombre) dans `index.css`. */
export const THEME_COLOR_LIGHT = "#fafcff";
export const THEME_COLOR_DARK = "#121426";
export const CONTACT_EMAIL = "contact@silao.fr";
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "";
export const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL ||
  "https://fr.linkedin.com/company/d2l-informatique";
export const TWITTER_SITE_HANDLE =
  import.meta.env.VITE_TWITTER_SITE_HANDLE || "";

export const COMPANY_NAME = "D2L Informatique";
export const COMPANY_LEGAL_NAME = "D2L INFORMATIQUE";
export const COMPANY_LEGAL_FORM =
  "société par actions simplifiée unipersonnelle";
export const COMPANY_SHARE_CAPITAL = "14 084 €";
export const COMPANY_RCS = "483 422 010 RCS Bordeaux";
export const COMPANY_ADDRESS = "132 rue Fondaudège, 33000 Bordeaux";
export const COMPANY_ACTIVITY = "Programmation informatique";
export const COMPANY_EMPLOYEES = "20 à 49 salariés";
export const COMPANY_CREATION_DATE = "1er juillet 2005";
export const LEGAL_REPRESENTATIVE = "Sébastien Charnet";
export const HOSTING_PROVIDER = "OVHcloud";
export const HOSTING_ADDRESS = "2 rue Kellermann, 59100 Roubaix, France";
export const DPO_EMAIL = "dpo-d2linformatique@agencergpd.eu";
export const RIGHTS_REQUEST_URL =
  "https://agencergpd.fragmos.app/org/d2l-informatique/public/right-requests";
