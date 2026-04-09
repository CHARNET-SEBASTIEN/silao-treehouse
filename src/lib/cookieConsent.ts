export const COOKIE_CONSENT_STORAGE_KEY = "silao-cookie-consent";

export type CookieConsentValue = "accepted" | "rejected";

export function getStoredConsent(): CookieConsentValue | null {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    // Stockage indisponible (navigation privée, etc.)
  }
  return null;
}

/** Met à jour le mode consentement Google (v2) après choix sur le bandeau. */
export function applyGtagConsent(granted: boolean): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (granted) {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  } else {
    window.gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  }
}
