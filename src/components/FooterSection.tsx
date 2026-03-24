import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

import logoD2l from "@/assets/logo-d2l.jpeg";
import logoSilao from "@/assets/logo-silao-official.svg";
import { scrollToHashTarget } from "@/lib/hashNavigation";
import { COMPANY_ADDRESS, COMPANY_NAME, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site";

const footerAnchors = [
  { label: "Secteurs", href: "/#secteurs" },
  { label: "Services", href: "/#services" },
  { label: "Références", href: "/#references" },
  { label: "Qui sommes-nous", href: "/#societe" },
  { label: "Actualités", href: "/#actualites" },
  { label: "Contacts", href: "/#contacts" },
];

const FooterSection = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = () => {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const handleAnchorNavigation = (
      event: React.MouseEvent<HTMLAnchorElement>,
      href: string,
    ) => {
      const hash = href.split("#")[1];
      if (!hash) return;

      event.preventDefault();

      if (location.pathname !== "/" || location.hash !== `#${hash}`) {
        navigate(`/#${hash}`);
        return;
      }

      scrollToHashTarget(`#${hash}`);
    };

    return (
      <footer
        ref={ref}
        {...props}
        className="relative border-t border-border/80 bg-[linear-gradient(180deg,hsl(var(--card)),hsl(var(--background)))] paper-grain"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-8">
          <div className="mb-14 grid gap-12 md:grid-cols-[1.1fr_0.95fr_0.95fr]">
            <div>
              <Link
                to="/"
                onClick={handleLogoClick}
                aria-label="Retour à l'accueil de SILAO par D2L"
                className="mb-4 flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <img src={logoD2l} alt="" className="h-8 w-auto rounded" />
                <div className="h-6 w-px bg-border" />
                <img src={logoSilao} alt="" className="h-9 w-auto" />
              </Link>
              <p className="text-sm leading-7 text-muted-foreground">
                <strong className="text-foreground">SILAO</strong> est le dossier usager informatisé
                édité par <strong className="text-foreground">{COMPANY_NAME}</strong> pour les
                établissements sociaux et médico-sociaux.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">PDE</span>
                <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">PH</span>
                <span className="rounded-full border border-accent/25 bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground">AHI</span>
                <span className="rounded-full border border-border/80 bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">PDS</span>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-foreground">Navigation</h4>
              <nav aria-label="Navigation secondaire" className="flex flex-col gap-2 text-sm text-muted-foreground">
                {footerAnchors.map((anchor) => (
                  <a
                    key={anchor.href}
                    href={anchor.href}
                    onClick={(event) => handleAnchorNavigation(event, anchor.href)}
                    className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {anchor.label}
                  </a>
                ))}
                <Link to="/offres" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Offres
                </Link>
                <Link to="/accompagnement" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Accompagnement
                </Link>
                <Link to="/formations" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Formations
                </Link>
                <Link to="/engagements" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Engagements
                </Link>
                <Link to="/aide-support" className="rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Aide et support
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-foreground">Contact</h4>
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
                    Suivre SILAO sur LinkedIn
                  </span>
                  <span className="mt-1 block text-xs leading-6 text-muted-foreground">
                    Suivez l&apos;actualité de D2L Informatique, les évolutions de SILAO et les prises
                    de parole de l&apos;équipe.
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
