import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2, Handshake, HeartHandshake, Home, Sparkles, MessageSquareQuote, Brain, Rocket, CreditCard, Accessibility, ShieldCheck, Baby } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoSilao from "@/assets/logo-silao.png";
import logoD2l from "@/assets/logo-d2l.jpeg";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { getScrollBehavior } from "@/lib/motion";

const navLinks = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Fonctionnalités", href: "/#features", icon: Sparkles, isAnchor: true },
  { label: "Témoignages", href: "/#testimonials", icon: MessageSquareQuote, isAnchor: true },
  { label: "Quiz Ségur", href: "/quiz-segur", icon: Brain },
];

const desktopLinks = [
  { label: "Fonctionnalités", href: "/#features", isAnchor: true },
  { label: "Secteurs", href: "/#secteurs", isAnchor: true },
  { label: "Ressources", href: "/ressources" },
  { label: "Offres", href: "/offres" },
  { label: "Témoignages", href: "/#testimonials", isAnchor: true },
];

const secteurLinks = [
  { label: "Handicap — PH", href: "/secteur/handicap", icon: Accessibility, description: "IME, ITEP, MAS, FAM, ESAT, SESSAD" },
  { label: "Protection de l'enfance", href: "/secteur/protection-enfance", icon: ShieldCheck, description: "MECS, SAE, AEMO, Lieux de vie" },
  { label: "Insertion / AHI", href: "/secteur/insertion-ahi", icon: Home, description: "CHRS, SIAO, CPH, CADA" },
  { label: "CAMSP / CMPP", href: "/secteur/camsp-cmpp", icon: Baby, description: "Dépistage et soins précoces" },
];

const offreLinks = [
  { label: "Offres de déploiement", href: "/offres", icon: Rocket, description: "Méthodologie et accompagnement projet" },
  { label: "Abonnement", href: "/abonnement", icon: CreditCard, description: "Modèle tout compris, sans surprise" },
  { label: "Ressources", href: "/ressources", icon: Brain, description: "Guides, conformité et repères de déploiement" },
];

const axesLinks = [
  { label: "Toutes les structures", href: "/grappes-esms", icon: Building2, description: "Du lieu de vie aux grandes associations" },
  { label: "Accompagnement", href: "/accompagnement", icon: Handshake, description: "Partenariat opérationnel clé en main" },
  { label: "Engagements durables", href: "/engagements", icon: HeartHandshake, description: "SLA formalisés et relation durable" },
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
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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

  const renderLinkGroup = (title: string, links: typeof axesLinks, startDelay: number) => (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: startDelay }}
        className="text-xs uppercase tracking-widest text-muted-foreground/60 font-body px-4 mb-3"
      >
        {title}
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: startDelay + 0.03 + i * 0.04, duration: 0.25 }}
          >
            <Link
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block p-3 rounded-xl transition-all group ${
                location.pathname === link.href
                  ? "bg-primary/10 sketch-border-sm"
                  : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-0.5">
                <link.icon className={`w-4 h-4 ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                } transition-colors`} />
                <span className={`font-sketch text-lg ${
                  location.pathname === link.href ? "text-primary" : "text-foreground"
                }`}>
                  {link.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-body pl-7">{link.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "hsl(var(--background) / 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:px-6"
      >
        {/* Floating bar background */}
        <motion.div
          initial={false}
          animate={{
            opacity: scrolled ? 1 : 0,
            y: scrolled ? 0 : -4,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-3 inset-y-2 bg-background/80 backdrop-blur-xl rounded-full border border-border/40 shadow-lg"
        />

        {/* Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Retour à l’accueil de SILAO par D2L"
          className="flex items-center gap-2.5 relative z-10"
        >
          <img src={logoD2l} alt="" className="h-8 w-auto rounded-lg shadow-sm" />
          <div className="w-px h-5 bg-border/60" />
          <img src={logoSilao} alt="" className="h-9 w-auto" />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="relative z-10 hidden xl:flex items-center gap-1 rounded-full bg-background/70 px-2 py-1.5 border border-border/50 shadow-sm backdrop-blur"
        >
          {desktopLinks.map((link) => {
            const isActive = !link.isAnchor && location.pathname === link.href;

            if (link.isAnchor) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleAnchorNavigation(event, link.href)}
                  aria-current={location.hash === link.href.replace("/", "") ? "page" : undefined}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary hover:bg-primary/8"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/8"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="relative z-10 flex items-center gap-2">
          {/* Contact button — warm orange pill like sauvegarde26 */}
          <Button
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex rounded-full text-xs font-bold px-5 shadow-md"
            onClick={() => setDemoOpen(true)}
          >
            Nous contacter
          </Button>

          {/* Menu button — rounded with color */}
          <motion.button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 h-10 px-4 rounded-full font-bold text-sm transition-all duration-300 ${
              open
                ? "bg-foreground text-background"
                : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Fermer le menu principal" : "Ouvrir le menu principal"}
          >
            <motion.div
              key={open ? "close" : "menu"}
              initial={{ rotate: open ? -90 : 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
            <span className="hidden sm:inline">MENU</span>
          </motion.button>
        </div>
      </motion.header>

      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuDialogRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex items-start justify-center overflow-y-auto pt-20 pb-10"
          >
            <nav aria-label="Navigation mobile" className="w-full max-w-2xl px-8">
              <h2 className="sr-only">Menu principal</h2>
              {/* Main links */}
              <div className="space-y-1 mb-8">
                {navLinks.map((link, i) => {
                  const isActive = !link.isAnchor && location.pathname === link.href;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      className={`flex items-center gap-4 py-3 px-4 rounded-xl transition-colors group ${
                        isActive ? "bg-primary/10" : "hover:bg-muted/50"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted/60 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                      }`}>
                        <link.icon className="w-4.5 h-4.5" />
                      </div>
                      <span className={`font-sketch text-2xl md:text-3xl ${isActive ? "text-primary" : "text-foreground"}`}>
                        {link.label}
                      </span>
                    </motion.div>
                  );

                  return link.isAnchor ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(event) => handleAnchorNavigation(event, link.href)}
                      aria-current={location.hash === link.href.replace("/", "") ? "page" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>

              {renderLinkGroup("Nos secteurs", secteurLinks, 0.15)}
              {renderLinkGroup("Nos offres", offreLinks, 0.35)}
              {renderLinkGroup("Nos engagements", axesLinks, 0.45)}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
