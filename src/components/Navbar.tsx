import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Home,
  Mail,
  Menu,
  Newspaper,
  ShieldCheck,
  Users2,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoD2l from "@/assets/logo-d2l.jpeg";
import logoSilao from "@/assets/logo-silao-official.svg";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import SiteSearch from "@/components/SiteSearch";
import { Button } from "@/components/ui/button";
import { getScrollBehavior } from "@/lib/motion";

const homeLinks = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Secteurs", href: "/#secteurs", icon: Building2, isAnchor: true },
  { label: "Services", href: "/#services", icon: BriefcaseBusiness, isAnchor: true },
  { label: "Références", href: "/#references", icon: ShieldCheck, isAnchor: true },
  { label: "Qui sommes-nous", href: "/#societe", icon: Users2, isAnchor: true },
  { label: "Actualités", href: "/#actualites", icon: Newspaper, isAnchor: true },
  { label: "Contacts", href: "/#contacts", icon: Mail, isAnchor: true },
];

const groupedLinks = [
  {
    title: "Secteurs",
    links: [
      { label: "Protection de l'enfance", href: "/secteur/protection-enfance", description: "MECS, milieu ouvert, accueil familial" },
      { label: "Médico-social / PH", href: "/secteur/handicap", description: "IME, DITEP, SESSAD, CAMSP, CMPP" },
      { label: "AHI", href: "/secteur/insertion-ahi", description: "CHRS, CADA, HUDA, CPH, AVDL" },
      { label: "PDS", href: "/secteur/personnes-difficultes-specifiques", description: "LHSS, ACT, CAARUD" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Offres", href: "/offres", description: "Déploiement, reprise, formation" },
      { label: "Accompagnement", href: "/accompagnement", description: "Méthode projet et proximité terrain" },
      { label: "Formations", href: "/formations", description: "Sur mesure, Qualiopi, accessibilité" },
      { label: "Engagements", href: "/engagements", description: "Sécurité, RGPD, référencement Ségur" },
      { label: "Ressources", href: "/ressources", description: "Actualités, guides et veille sectorielle" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuDialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      menuButtonRef.current?.focus();
      return;
    }

    const dialog = menuDialogRef.current;
    const focusableElements = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    focusableElements?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialog) return;

      const items = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (items.length === 0) return;

      const firstItem = items[0];
      const lastItem = items[items.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

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
    setOpen(false);

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
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "hsl(var(--background) / 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 md:px-6"
      >
        <motion.div
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -4 }}
          className="absolute inset-x-3 inset-y-2 rounded-full border border-border/40 bg-background/85 shadow-lg"
        />

        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Retour à l’accueil de SILAO par D2L"
          className="relative z-10 flex items-center gap-2.5"
        >
          <img src={logoD2l} alt="" className="h-8 w-auto rounded-lg shadow-sm" />
          <div className="h-5 w-px bg-border/60" />
          <img src={logoSilao} alt="" className="h-9 w-auto" />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="relative z-10 hidden xl:flex items-center gap-1 rounded-full border border-border/50 bg-background/70 px-2 py-1.5 shadow-sm backdrop-blur"
        >
          {homeLinks.slice(1).map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorNavigation(event, link.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary/8 hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary/8 hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <SiteSearch mode="compact" />

          <Button
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex rounded-full px-5 text-xs font-bold shadow-md"
            onClick={() => setDemoOpen(true)}
          >
            Demander une démo
          </Button>

          <motion.button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((current) => !current)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`flex h-10 items-center gap-2 rounded-full px-4 text-sm font-bold transition-colors ${
              open
                ? "bg-foreground text-background"
                : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu principal" : "Ouvrir le menu principal"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="hidden sm:inline">MENU</span>
          </motion.button>
        </div>
      </motion.header>

      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={menuDialogRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-background/95 pt-20 pb-10 backdrop-blur-2xl"
          >
            <nav aria-label="Navigation mobile" className="w-full max-w-3xl px-6">
              <div className="mb-8 space-y-2">
                {homeLinks.map((link, index) => {
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <link.icon className="h-4 w-4" />
                      </div>
                      <span className="font-sketch text-2xl text-foreground">{link.label}</span>
                    </motion.div>
                  );

                  return link.isAnchor ? (
                    <a key={link.href} href={link.href} onClick={(event) => handleAnchorNavigation(event, link.href)}>
                      {content}
                    </a>
                  ) : (
                    <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
                      {content}
                    </Link>
                  );
                })}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {groupedLinks.map((group, groupIndex) => (
                  <motion.section
                    key={group.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + groupIndex * 0.08 }}
                    className="rounded-[1.75rem] border border-border/60 bg-card p-5"
                  >
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {group.title}
                    </p>
                    <div className="space-y-3">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-2xl border border-border/50 bg-background/80 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
                        >
                          <p className="font-semibold text-foreground">{link.label}</p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{link.description}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
