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
  SunMoon,
  Users2,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoD2lColor from "@/assets/logo-d2l-color.png";
import logoD2lWhite from "@/assets/logo-d2l-white.png";
import logoSilaoColor from "@/assets/logo-silao-color.svg";
import logoSilaoWhite from "@/assets/logo-silao-white.svg";
import DeferredSiteSearch from "@/components/DeferredSiteSearch";
import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { scrollToHashTarget } from "@/lib/hashNavigation";
import { COMPANY_DISPLAY_NAME, PRODUCT_NAME } from "@/lib/site";

const homeLinks = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Qui sommes-nous ?", compactLabel: "Société", href: "/#societe", icon: Users2, isAnchor: true },
  { label: "Secteurs", href: "/#secteurs", icon: Building2, isAnchor: true },
  { label: "Fonctionnalités", compactLabel: "Fonctions", href: "/#services", icon: BriefcaseBusiness, isAnchor: true },
  { label: "R&D et IA", compactLabel: "R&D / IA", href: "/#recherche-innovation", icon: Newspaper, isAnchor: true },
  { label: "Références", compactLabel: "Clients", href: "/#references", icon: ShieldCheck, isAnchor: true },
  { label: "Ressources", href: "/ressources", icon: Newspaper },
  { label: "Offres", href: "/offres", icon: BriefcaseBusiness },
  { label: "Contact", href: "/#contacts", icon: Mail, isAnchor: true },
];

const homeSectionHrefs = homeLinks.filter((link) => link.isAnchor).map((link) => link.href);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHomeHref, setActiveHomeHref] = useState<string | null>(null);
  const { openDialog } = useDemoRequestDialog();
  const location = useLocation();
  const navigate = useNavigate();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuDialogRef = useRef<HTMLDivElement | null>(null);
  const prevMobileMenuOpen = useRef(false);

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
    if (location.pathname !== "/") {
      setActiveHomeHref(null);
      return;
    }

    const sections = homeSectionHrefs
      .map((href) => {
        const id = href.split("#")[1];
        return id ? document.getElementById(id) : null;
      })
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      setActiveHomeHref(location.hash && homeSectionHrefs.includes(`/${location.hash}`) ? `/${location.hash}` : null);
      return;
    }

    const updateActiveSection = () => {
      const threshold = 140;
      let currentHref: string | null = null;

      for (const section of sections) {
        if (section.getBoundingClientRect().top - threshold <= 0) {
          currentHref = `/#${section.id}`;
        }
      }

      setActiveHomeHref(currentHref ?? (location.hash ? `/${location.hash}` : null));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (prevMobileMenuOpen.current && !open) {
      menuButtonRef.current?.focus();
    }
    prevMobileMenuOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;

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
    setOpen(false);

    if (location.pathname !== "/" || location.hash !== `#${hash}`) {
      navigate(`/#${hash}`);
      return;
    }

    scrollToHashTarget(`#${hash}`);
  };

  const desktopLinkClassName =
    "rounded-full whitespace-nowrap px-3 py-2 text-[0.92rem] font-semibold text-muted-foreground transition-colors hover:bg-primary/12 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 2xl:px-4 2xl:text-sm";

  const isLinkActive = (href: string, isAnchor?: boolean) => {
    if (isAnchor) {
      return location.pathname === "/" && activeHomeHref === href;
    }

    return location.pathname === href;
  };

  const getDesktopLinkClassName = (href: string, isAnchor?: boolean) =>
    `${desktopLinkClassName} ${isLinkActive(href, isAnchor) ? "bg-primary/12 text-foreground shadow-sm" : ""}`;

  const renderDesktopLinkLabel = (label: string, compactLabel?: string) => {
    if (!compactLabel) return label;

    return (
      <>
        <span className="2xl:hidden">{compactLabel}</span>
        <span className="hidden 2xl:inline">{label}</span>
      </>
    );
  };

  return (
    <>
      <motion.header
        role="banner"
        initial={false}
        animate={{
          backgroundColor: scrolled ? "hsl(var(--background) / 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
        }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 md:px-6"
      >
        <motion.div
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -4 }}
          className="absolute inset-x-3 inset-y-2 rounded-full border border-border/80 bg-card/90 shadow-[0_24px_60px_-40px_hsl(var(--brand-violet)/0.22)]"
        />

        <div className="relative z-10 flex items-center gap-2">
          <motion.button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((current) => !current)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`flex h-11 items-center gap-2 rounded-full px-4 text-sm font-bold transition-colors ${
              open
                ? "bg-foreground text-background"
                : "border border-border/80 bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu principal" : "Ouvrir le menu principal"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="hidden sm:inline">Menu</span>
          </motion.button>

          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex h-11 shrink-0 items-center gap-3 rounded-full border border-border/80 bg-card/88 px-3 py-2 shadow-sm backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="sr-only">{PRODUCT_NAME} par {COMPANY_DISPLAY_NAME}, retour à l&apos;accueil</span>
            <span className="flex h-full items-center px-1">
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
            <span className="flex h-full items-center px-1">
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
        </div>

        <nav
          aria-label="Navigation principale"
          className="relative z-10 hidden items-center gap-1 rounded-full border border-border/80 bg-card/85 px-2 py-1.5 shadow-sm backdrop-blur xl:flex"
        >
          {homeLinks.slice(1).map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorNavigation(event, link.href)}
                className={getDesktopLinkClassName(link.href, link.isAnchor)}
                aria-label={link.label}
                title={link.label}
                aria-current={isLinkActive(link.href, link.isAnchor) ? "page" : undefined}
              >
                {renderDesktopLinkLabel(link.label, link.compactLabel)}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={getDesktopLinkClassName(link.href, link.isAnchor)}
                aria-label={link.label}
                title={link.label}
                aria-current={isLinkActive(link.href, link.isAnchor) ? "page" : undefined}
              >
                {renderDesktopLinkLabel(link.label, link.compactLabel)}
              </Link>
            ),
          )}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <DeferredSiteSearch />

          <ThemeToggle className="hidden sm:inline-flex" />

          <Button
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex rounded-full px-5 text-xs font-bold shadow-md"
            onClick={openDialog}
          >
            Demander une démo
          </Button>

        </div>
      </motion.header>

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
                      className={`flex items-center gap-4 rounded-[1.4rem] border px-4 py-3 transition-colors hover:bg-primary/10 ${
                        isLinkActive(link.href, link.isAnchor)
                          ? "border-primary/40 bg-primary/10"
                          : "border-border/70 bg-card"
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/14 text-primary">
                        <link.icon className="h-4 w-4" />
                      </div>
                      <span className="font-sketch text-2xl text-foreground">{link.label}</span>
                    </motion.div>
                  );

                  return link.isAnchor ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(event) => handleAnchorNavigation(event, link.href)}
                      className="block rounded-[1.4rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-[1.4rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>

              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="mb-6 rounded-[1.75rem] border border-border/80 bg-card p-5 shadow-[0_22px_48px_-36px_hsl(var(--brand-violet)/0.2)] sm:hidden"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Apparence
                    </p>
                    <p className="mt-1 text-sm leading-6 text-foreground">
                      Passer en mode sombre selon votre préférence.
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/14 text-primary">
                    <SunMoon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-4">
                  <ThemeToggle className="h-11 w-full justify-center rounded-[1.1rem] text-sm font-semibold" />
                </div>
              </motion.section>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
