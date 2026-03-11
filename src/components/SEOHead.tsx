import { useEffect } from "react";

const siteUrl = "https://d2l-silao.lovable.app";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

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

const SEOHead = ({ title, description, canonicalPath = "/", schema }: SEOHeadProps) => {
  useEffect(() => {
    const canonicalUrl = canonicalPath.startsWith("http")
      ? canonicalPath
      : `${siteUrl}${canonicalPath}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertLink('link[rel="canonical"]', "canonical", canonicalUrl);

    const scriptId = "seo-schema";
    const previousScript = document.getElementById(scriptId);
    if (previousScript) previousScript.remove();

    if (schema) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const currentScript = document.getElementById(scriptId);
      if (currentScript) currentScript.remove();
    };
  }, [title, description, canonicalPath, schema]);

  return null;
};

export default SEOHead;
