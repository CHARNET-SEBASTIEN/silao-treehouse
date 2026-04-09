import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  applyGtagConsent,
  COOKIE_CONSENT_STORAGE_KEY,
  getStoredConsent,
  type CookieConsentValue,
} from "@/lib/cookieConsent";
import CookieConsentBanner from "@/components/CookieConsentBanner";

type CookieConsentContextValue = {
  openPreferences: () => void;
  consent: CookieConsentValue | null;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    if (stored === null) setBannerOpen(true);
  }, []);

  const openPreferences = useCallback(() => {
    setBannerOpen(true);
  }, []);

  const accept = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setConsent("accepted");
    applyGtagConsent(true);
    setBannerOpen(false);
  }, []);

  const refuse = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "rejected");
    } catch {
      /* ignore */
    }
    setConsent("rejected");
    applyGtagConsent(false);
    setBannerOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openPreferences, consent }),
    [openPreferences, consent],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {bannerOpen ? <CookieConsentBanner onAccept={accept} onRefuse={refuse} /> : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
