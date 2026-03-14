import {
  CONTACT_EMAIL,
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export interface SeoSchema extends Record<string, unknown> {
  "@type"?: string | string[];
}

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  ogType?: "website" | "article";
  ogImage?: string;
  priority?: number;
  changefreq?:
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
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

const hasPageSchema = (schemaList: SeoSchema[]) =>
  schemaList.some((item) => {
    const typeValue = item["@type"];
    const types = Array.isArray(typeValue) ? typeValue : [typeValue];
    return types.some((type) =>
      ["WebPage", "CollectionPage", "ContactPage", "FAQPage"].includes(
        String(type),
      ),
    );
  });

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

export const getStructuredData = (page: PageSeo) => {
  const schemas = toSchemaList(page.schema);
  if (!hasPageSchema(schemas)) {
    return [getDefaultSchema(page), ...schemas];
  }

  return schemas;
};

export const buildHeadMarkup = (page: PageSeo) => {
  const canonicalUrl = resolveUrl(page.path);
  const imageUrl = page.ogImage ?? DEFAULT_OG_IMAGE;
  const robots = page.noindex ? "noindex, nofollow" : "index, follow";
  const schemas = getStructuredData(page);

  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="author" content="D2L" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:locale" content="${SITE_LOCALE}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:type" content="${page.ogType ?? "website"}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${imageUrl}" />`,
    ...schemas.map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
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
  name: "D2L",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description:
    "D2L édite SILAO, le logiciel de Dossier Usager Informatisé pour les établissements et services sociaux et médico-sociaux.",
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
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
