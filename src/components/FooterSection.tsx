import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoSilao from "@/assets/logo-silao.png";
import logoD2l from "@/assets/logo-d2l.jpeg";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative paper-grain bg-card border-t border-border">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" onClick={handleLogoClick} className="mb-4 flex items-center gap-3">
              <img src={logoD2l} alt="SILAO" className="h-8 w-auto rounded" />
              <div className="w-px h-6 bg-border" />
              <img src={logoSilao} alt="Silao" className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              <strong className="text-foreground">SILAO</strong> est le logiciel de Dossier Usager Informatisé édité par <strong className="text-foreground">D2L</strong> pour la Protection de l'Enfance, le Handicap, l'Insertion et le médico-social.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sketch text-xl text-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground font-body">
              <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
              <a href="/#features" className="hover:text-primary transition-colors">Fonctionnalités</a>
              <Link to="/ressources" className="hover:text-primary transition-colors">Ressources</Link>
              <a href="/#testimonials" className="hover:text-primary transition-colors">Témoignages</a>
              <Link to="/grappes-esms" className="hover:text-primary transition-colors">Toutes les structures</Link>
              <Link to="/accompagnement" className="hover:text-primary transition-colors">Accompagnement</Link>
              <Link to="/engagements" className="hover:text-primary transition-colors">Engagements durables</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sketch text-xl text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground font-body">
              <a href="mailto:contact@silao.fr" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                contact@silao.fr
              </a>
              <a href="tel:+33400000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                04 00 00 00 00
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {currentYear} Silao — SILAO. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground font-body">
            <span>Mentions légales à venir</span>
            <span>Politique de confidentialité à venir</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
