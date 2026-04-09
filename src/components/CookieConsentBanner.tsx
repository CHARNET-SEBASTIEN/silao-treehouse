import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

type CookieConsentBannerProps = {
  onAccept: () => void;
  onRefuse: () => void;
};

const CookieConsentBanner = ({ onAccept, onRefuse }: CookieConsentBannerProps) => (
  <div
    className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
    role="dialog"
    aria-modal="true"
    aria-labelledby="cookie-consent-title"
  >
    <div className="pointer-events-auto w-full max-w-4xl rounded-xl border border-border/80 bg-card/95 p-5 shadow-[0_-8px_40px_-12px_hsl(0_0%_0%/0.25)] backdrop-blur-sm paper-grain">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
        <div className="min-w-0 flex-1 space-y-2 text-sm leading-6 text-muted-foreground">
          <h2 id="cookie-consent-title" className="text-base font-semibold text-foreground">
            Cookies et publicité
          </h2>
          <p>
            Nous utilisons une balise Google (Google Ads) pour mesurer les conversions et améliorer
            nos campagnes. Elle n&apos;est activée qu&apos;avec votre accord. Le refus est sans
            conséquence sur la navigation du site.
          </p>
          <p>
            <Link
              to="/politique-de-cookies"
              className="font-medium text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Politique de cookies
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" className="w-full min-w-[9rem] sm:w-auto" onClick={onRefuse}>
            Refuser
          </Button>
          <Button type="button" variant="default" className="w-full min-w-[9rem] sm:w-auto" onClick={onAccept}>
            Accepter
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default CookieConsentBanner;
