import {
  COMPANY_ACTIVITY,
  COMPANY_CREATION_DATE,
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
  LINKEDIN_URL,
  THEME_COLOR_DARK,
  THEME_COLOR_LIGHT,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  TWITTER_SITE_HANDLE,
} from "@/lib/site";

export interface SeoSchema extends Record<string, unknown> {
  "@type"?: string | string[];
}

export interface BreadcrumbSeoItem {
  name: string;
  path: string;
}

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbSeoItem[];
  noindex?: boolean;
  ogType?: "website" | "article";
  ogImage?: string;
  priority?: number;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly" | "never";
  schema?: SeoSchema | SeoSchema[];
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const resolveUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path}`;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const toSchemaList = (schema?: SeoSchema | SeoSchema[]) =>
  schema ? (Array.isArray(schema) ? schema : [schema]) : [];

const hasSchemaType = (schemaList: SeoSchema[], expectedTypes: string[]) =>
  schemaList.some((item) => {
    const typeValue = item["@type"];
    const types = Array.isArray(typeValue) ? typeValue : [typeValue];
    return types.some((type) => expectedTypes.includes(String(type)));
  });

const hasPageSchema = (schemaList: SeoSchema[]) =>
  hasSchemaType(schemaList, [
    "WebPage",
    "CollectionPage",
    "ContactPage",
    "FAQPage",
  ]);

const getDefaultSchema = (page: PageSeo): SeoSchema => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${resolveUrl(page.path)}#webpage`,
  name: page.title,
  description: page.description,
  url: resolveUrl(page.path),
  inLanguage: "fr-FR",
  isPartOf: { "@id": WEBSITE_ID },
  publisher: { "@id": ORGANIZATION_ID },
});

const getBreadcrumbSchema = (page: PageSeo): SeoSchema | null => {
  if (!page.breadcrumbs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: page.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: resolveUrl(item.path),
    })),
  };
};

export const getStructuredData = (page: PageSeo) => {
  const schemas = toSchemaList(page.schema);
  const structuredData: SeoSchema[] = [];

  if (!hasPageSchema(schemas)) {
    structuredData.push(getDefaultSchema(page));
  }

  if (!hasSchemaType(schemas, ["BreadcrumbList"])) {
    const breadcrumbSchema = getBreadcrumbSchema(page);
    if (breadcrumbSchema) {
      structuredData.push(breadcrumbSchema);
    }
  }

  structuredData.push(...schemas);

  return structuredData;
};

export const buildHeadMarkup = (page: PageSeo) => {
  const canonicalUrl = resolveUrl(page.path);
  const imageUrl = page.ogImage ?? DEFAULT_OG_IMAGE;
  const robots = page.noindex ? "noindex, nofollow" : "index, follow";
  const schemas = getStructuredData(page);

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="color-scheme" content="light dark" />`,
    `<meta name="author" content="${escapeHtml(COMPANY_NAME)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:locale" content="${SITE_LOCALE}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:type" content="${page.ogType ?? "website"}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta property="og:image:width" content="${DEFAULT_OG_IMAGE_WIDTH}" />`,
    `<meta property="og:image:height" content="${DEFAULT_OG_IMAGE_HEIGHT}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(DEFAULT_OG_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...(TWITTER_SITE_HANDLE
      ? [
          `<meta name="twitter:site" content="${escapeHtml(TWITTER_SITE_HANDLE)}" />`,
        ]
      : []),
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${imageUrl}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(DEFAULT_OG_IMAGE_ALT)}" />`,
    `<meta name="theme-color" content="${THEME_COLOR_LIGHT}" media="(prefers-color-scheme: light)" />`,
    `<meta name="theme-color" content="${THEME_COLOR_DARK}" media="(prefers-color-scheme: dark)" />`,
    `<link rel="manifest" href="/site.webmanifest" />`,
    `<link rel="alternate" hreflang="fr-FR" href="${canonicalUrl}" />`,
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    '<link rel="dns-prefetch" href="https://fonts.googleapis.com" />',
    '<link rel="dns-prefetch" href="https://fonts.gstatic.com" />',
    ...schemas.map(
      (schema, index) =>
        `<script id="seo-schema-${index}" type="application/ld+json" data-seo-schema="true">${JSON.stringify(schema)}</script>`,
    ),
  ].join("\n    ");
};

export const buildSitemapXml = (pages: PageSeo[]) => {
  const today = new Date().toISOString().slice(0, 10);

  const urls = pages
    .filter((page) => !page.noindex)
    .map(
      (page) => `  <url>
    <loc>${resolveUrl(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq ?? "monthly"}</changefreq>
    <priority>${page.priority ?? 0.6}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

export const buildRobotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const getOrganizationSchema = (): SeoSchema => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: COMPANY_NAME,
  legalName: COMPANY_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description:
    "D2L Informatique édite SILAO, le logiciel de Dossier Usager Informatisé pour les établissements et services sociaux et médico-sociaux.",
  foundingDate: COMPANY_CREATION_DATE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "132 rue Fondaudège",
    postalCode: "33000",
    addressLocality: "Bordeaux",
    addressCountry: "FR",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 20,
    maxValue: 49,
  },
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    COMPANY_ACTIVITY,
    "Dossier Usager Informatisé",
    "ESSMS",
    "Protection de l'enfance",
    "Médico-social",
    "Accueil, hébergement et insertion",
  ],
  ...(CONTACT_PHONE ? { telephone: CONTACT_PHONE } : {}),
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    ...(CONTACT_PHONE ? { telephone: CONTACT_PHONE } : {}),
    contactType: "sales",
    availableLanguage: "French",
  },
});

export const getWebsiteSchema = (): SeoSchema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": ORGANIZATION_ID },
});
