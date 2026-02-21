import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2, Handshake, HeartHandshake, Home, Sparkles, MessageSquareQuote, TreePine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoSilao from "@/assets/logo-silao.png";
import logoD2l from "@/assets/logo-d2l.jpeg";

const navLinks = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Fonctionnalités", href: "/#features", icon: Sparkles, isAnchor: true },
  { label: "Témoignages", href: "/#testimonials", icon: MessageSquareQuote, isAnchor: true },
];

const axesLinks = [
  { label: "Toutes les structures", href: "/grappes-esms", icon: Building2, description: "Du lieu de vie aux grandes associations" },
  { label: "Accompagnement", href: "/accompagnement", icon: Handshake, description: "Partenariat opérationnel clé en main" },
  { label: "Engagements durables", href: "/engagements", icon: HeartHandshake, description: "SLA formalisés et relation durable" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6">
        {/* Frosted background pill */}
        <div className="absolute inset-x-4 inset-y-2 bg-background/70 backdrop-blur-xl rounded-2xl border border-border/50 shadow-sm" />

        <Link to="/" className="flex items-center gap-3 relative z-10">
          <img src={logoD2l} alt="D2L" className="h-8 w-auto rounded" />
          <div className="w-px h-6 bg-border" />
          <img src={logoSilao} alt="Silao" className="h-9 w-auto" />
        </Link>

        <div className="relative z-10 hidden sm:inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-body px-3 py-1 rounded-full sketch-border-sm">
          <TreePine className="w-3.5 h-3.5" />
          Éditeur engagé
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Menu"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} className="text-foreground" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={22} className="text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="w-full max-w-2xl px-8">
              {/* Main links */}
              <div className="space-y-2 mb-10">
                {navLinks.map((link, i) => {
                  const isActive = !link.isAnchor && location.pathname === link.href;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className={`flex items-center gap-4 py-4 px-4 rounded-xl transition-colors group ${
                        isActive ? "bg-primary/10" : "hover:bg-muted/50"
                      }`}
                    >
                      <link.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`} />
                      <span className={`font-sketch text-3xl md:text-4xl ${isActive ? "text-primary" : "text-foreground"}`}>
                        {link.label}
                      </span>
                    </motion.div>
                  );

                  return link.isAnchor ? (
                    <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                      {content}
                    </a>
                  ) : (
                    <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
                      {content}
                    </Link>
                  );
                })}
              </div>

              {/* Axes section */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs uppercase tracking-widest text-muted-foreground/60 font-body px-4 mb-4"
              >
                Nos engagements
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {axesLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={`block p-4 rounded-xl transition-all group ${
                        location.pathname === link.href
                          ? "bg-primary/10 sketch-border-sm"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <link.icon className={`w-4 h-4 ${
                          location.pathname === link.href ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        } transition-colors`} />
                        <span className={`font-sketch text-xl ${
                          location.pathname === link.href ? "text-primary" : "text-foreground"
                        }`}>
                          {link.label}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-body pl-7">{link.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
