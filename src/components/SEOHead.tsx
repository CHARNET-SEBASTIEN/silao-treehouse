import { useEffect } from "react";

import { type PageSeo, getStructuredData, resolveUrl } from "@/lib/seo";
import { DEFAULT_OG_IMAGE, SITE_LOCALE, SITE_NAME } from "@/lib/site";

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, rel: string, href: string) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  element.setAttribute("rel", rel);
  element.setAttribute("href", href);
};

const upsertJsonLd = (id: string, payload: unknown) => {
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(payload);
};

const SEOHead = ({
  path,
  title,
  description,
  noindex,
  ogImage,
  ogType = "website",
  schema,
}: PageSeo) => {
  useEffect(() => {
    const canonicalUrl = resolveUrl(path);
    const imageUrl = ogImage ?? DEFAULT_OG_IMAGE;
    const robots = noindex ? "noindex, nofollow" : "index, follow";

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: SITE_LOCALE });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: ogType });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
    upsertLink('link[rel="canonical"]', "canonical", canonicalUrl);

    document
      .querySelectorAll('script[data-seo-schema="true"]')
      .forEach((element) => element.remove());

    getStructuredData({ path, title, description, noindex, ogImage, ogType, schema }).forEach(
      (item, index) => {
        upsertJsonLd(`seo-schema-${index}`, item);
        document
          .getElementById(`seo-schema-${index}`)
          ?.setAttribute("data-seo-schema", "true");
      },
    );

    return () => {
      document
        .querySelectorAll('script[data-seo-schema="true"]')
        .forEach((element) => element.remove());
    };
  }, [description, noindex, ogImage, ogType, path, schema, title]);

  return null;
};

export default SEOHead;
