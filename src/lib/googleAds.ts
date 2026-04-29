const defaultGoogleAdsId = "AW-18069760229";

const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID || defaultGoogleAdsId;

const isGtagReady = () => typeof window !== "undefined" && typeof window.gtag === "function";

const buildPagePath = () => {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname}${window.location.search}`;
};

export const trackGoogleAdsPageView = () => {
  if (!isGtagReady()) return;

  window.gtag!("config", googleAdsId, {
    page_path: buildPagePath(),
  });
};

export const trackGoogleAdsConversion = (label?: string) => {
  if (!label || !isGtagReady()) return;

  const sendTo = label.includes("/") ? label : `${googleAdsId}/${label}`;

  window.gtag!("event", "conversion", {
    send_to: sendTo,
  });
};

export const trackHomePageViewConversion = () => {
  if (typeof window === "undefined" || window.location.pathname !== "/") return;

  trackGoogleAdsConversion(import.meta.env.VITE_GOOGLE_ADS_HOME_PAGE_VIEW_LABEL);
};
