import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

import logoD2lColor from "@/assets/logo-d2l-color.png";
import logoD2lWhite from "@/assets/logo-d2l-white.png";
import logoSilaoColor from "@/assets/logo-silao-color.svg";
import logoSilaoWhite from "@/assets/logo-silao-white.svg";
import { filiereThemes } from "@/lib/filiereThemes";
import {
  COMPANY_ADDRESS,
  COMPANY_DISPLAY_NAME,
  COMPANY_NAME,
  CONTACT_EMAIL,
  LINKEDIN_URL,
  PRODUCT_NAME,
} from "@/lib/site";

const FooterSection = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    const handleLogoClick = () => {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    return (
      <footer
        ref={ref}
        aria-label="Pied de page"
        {...props}
        className="relative border-t border-border/80 bg-[linear-gradient(180deg,hsl(var(--card)),hsl(var(--background)))] paper-grain"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-12">
          <div className="mb-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <Link
                to="/"
                onClick={handleLogoClick}
                className="mb-4 inline-flex items-center gap-3 rounded-full border border-border/80 bg-card/90 px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span className="sr-only">{PRODUCT_NAME} par {COMPANY_DISPLAY_NAME}, retour à l&apos;accueil</span>
                <span className="flex items-center px-1">
                  <img
                    src={logoD2lColor}
                    alt=""
                    aria-hidden="true"
                    className="block h-8 w-auto object-contain dark:hidden"
                  />
                  <img
                    src={logoD2lWhite}
                    alt=""
                    aria-hidden="true"
                    className="hidden h-8 w-auto object-contain drop-shadow-[0_0_10px_hsl(0_0%_100%/0.16)] dark:block"
                  />
                </span>
                <div className="h-7 w-px bg-border/70" />
                <span className="flex items-center px-1">
                  <img
                    src={logoSilaoColor}
                    alt=""
                    aria-hidden="true"
                    className="block h-8 w-auto object-contain dark:hidden"
                  />
                  <img
                    src={logoSilaoWhite}
                    alt=""
                    aria-hidden="true"
                    className="hidden h-8 w-auto object-contain drop-shadow-[0_0_10px_hsl(0_0%_100%/0.16)] dark:block"
                  />
                </span>
              </Link>
              <p className="text-sm leading-7 text-muted-foreground">
                <strong className="text-foreground">{PRODUCT_NAME}</strong> est le dossier usager informatisé
                édité par <strong className="text-foreground">{COMPANY_DISPLAY_NAME}</strong> pour les
                établissements sociaux et médico-sociaux.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${filiereThemes.pde.border} ${filiereThemes.pde.bg} ${filiereThemes.pde.text}`}>PDE</span>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${filiereThemes.ph.border} ${filiereThemes.ph.bg} ${filiereThemes.ph.text}`}>PH</span>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${filiereThemes.ahi.border} ${filiereThemes.ahi.bg} ${filiereThemes.ahi.text}`}>AHI</span>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${filiereThemes.pds.border} ${filiereThemes.pds.bg} ${filiereThemes.pds.text}`}>PDS</span>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xl font-bold text-foreground">Contact</p>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Mail className="h-4 w-4 text-primary" />
                  {CONTACT_EMAIL}
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{COMPANY_ADDRESS}</span>
                </div>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.25rem] border border-primary/20 bg-primary/8 px-4 py-3 transition-colors hover:border-primary/35 hover:bg-primary/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="flex items-center gap-2 font-semibold text-foreground">
                    <Linkedin className="h-4 w-4 text-primary" />
                    Suivre {COMPANY_DISPLAY_NAME} sur LinkedIn
                  </span>
                  <span className="mt-1 block text-xs leading-6 text-muted-foreground">
                    Suivez l&apos;actualité de {COMPANY_DISPLAY_NAME} et les contenus publiés par l&apos;équipe.
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {currentYear} {COMPANY_NAME}. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <Link to="/offres" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Offres
              </Link>
              <Link to="/formations" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Formations
              </Link>
              <Link to="/aide-support" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Aide et support
              </Link>
              <Link to="/mentions-legales" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Mentions légales
              </Link>
              <Link to="/politique-de-confidentialite" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Politique de confidentialité
              </Link>
              <Link to="/politique-de-cookies" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Politique de cookies
              </Link>
              <Link to="/plan-du-site" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

FooterSection.displayName = "FooterSection";

export default FooterSection;
