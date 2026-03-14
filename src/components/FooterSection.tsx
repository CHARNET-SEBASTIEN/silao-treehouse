import { Link, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

import logoD2l from "@/assets/logo-d2l.jpeg";
import logoSilao from "@/assets/logo-silao-official.svg";
import { getScrollBehavior } from "@/lib/motion";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site";

const footerAnchors = [
  { label: "Secteurs", href: "/#secteurs" },
  { label: "Services", href: "/#services" },
  { label: "Références", href: "/#references" },
  { label: "Qui sommes-nous", href: "/#societe" },
  { label: "Actualités", href: "/#actualites" },
  { label: "Contacts", href: "/#contacts" },
];

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: getScrollBehavior() });
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

    const element = document.getElementById(hash);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: Math.max(0, top), behavior: getScrollBehavior() });
  };

  return (
    <footer className="relative border-t border-border bg-card paper-grain">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="mb-14 grid gap-12 md:grid-cols-[1.1fr_0.95fr_0.95fr]">
          <div>
            <Link
              to="/"
              onClick={handleLogoClick}
              aria-label="Retour à l’accueil de SILAO par D2L"
              className="mb-4 flex items-center gap-3"
            >
              <img src={logoD2l} alt="" className="h-8 w-auto rounded" />
              <div className="h-6 w-px bg-border" />
              <img src={logoSilao} alt="" className="h-9 w-auto" />
            </Link>
            <p className="text-sm leading-7 text-muted-foreground">
              <strong className="text-foreground">SILAO</strong> est le dossier usager informatisé
              édité par <strong className="text-foreground">D2L Informatique</strong> pour les
              établissements sociaux et médico-sociaux.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">PDE</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">PH</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">AHI</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">PDS</span>
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
                  className="transition-colors hover:text-primary"
                >
                  {anchor.label}
                </a>
              ))}
              <Link to="/offres" className="transition-colors hover:text-primary">
                Offres
              </Link>
              <Link to="/accompagnement" className="transition-colors hover:text-primary">
                Accompagnement
              </Link>
              <Link to="/formations" className="transition-colors hover:text-primary">
                Formations
              </Link>
              <Link to="/engagements" className="transition-colors hover:text-primary">
                Engagements
              </Link>
              <Link to="/aide-support" className="transition-colors hover:text-primary">
                Aide et support
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>France</span>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} D2L Informatique. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <Link to="/mentions-legales" className="transition-colors hover:text-primary">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="transition-colors hover:text-primary">
              Politique de confidentialité
            </Link>
            <Link to="/plan-du-site" className="transition-colors hover:text-primary">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
