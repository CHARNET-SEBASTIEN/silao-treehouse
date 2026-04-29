/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_API_URL?: string;
  readonly VITE_CONTACT_PHONE?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_TWITTER_SITE_HANDLE?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_GOOGLE_ADS_ID?: string;
  readonly VITE_GOOGLE_ADS_HOME_PAGE_VIEW_LABEL?: string;
  readonly VITE_GOOGLE_ADS_DEMO_SUBMIT_LABEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
