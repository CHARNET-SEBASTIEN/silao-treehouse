import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const axesLinks = [
  { label: "Conformité SONS", href: "/conformite-sons" },
  { label: "Grappes Multi-ESMS", href: "/grappes-esms" },
  { label: "Accompagnement", href: "/accompagnement" },
  { label: "Engagements 5 ans", href: "/engagements" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [axesOpen, setAxesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAxesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isAxesActive = axesLinks.some((l) => location.pathname === l.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <svg className="w-7 h-7 text-primary" viewBox="0 0 64 64" fill="currentColor">
            <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
          </svg>
          <span className="font-sketch text-2xl text-foreground">Silao</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm transition-colors font-body ${
              location.pathname === "/" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Accueil
          </Link>

          {/* Dropdown Nos axes */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setAxesOpen(!axesOpen)}
              className={`text-sm transition-colors font-body flex items-center gap-1 ${
                isAxesActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Nos engagements
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${axesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {axesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg py-2"
                >
                  {axesLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setAxesOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-body transition-colors ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/5 font-medium"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/#features"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            Fonctionnalités
          </a>
          <a
            href="/#testimonials"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            Témoignages
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-4 pb-4"
        >
          <Link to="/" onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-primary font-body">
            Accueil
          </Link>
          <p className="py-2 text-xs text-muted-foreground/60 uppercase tracking-wider font-body">Nos engagements</p>
          {axesLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 pl-4 text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {link.label}
            </Link>
          ))}
          <a href="/#features" onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-primary font-body">
            Fonctionnalités
          </a>
          <a href="/#testimonials" onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-primary font-body">
            Témoignages
          </a>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
