const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-primary" viewBox="0 0 64 64" fill="currentColor">
            <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
          </svg>
          <span className="font-sketch text-3xl text-foreground">Silao</span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground font-body">
          <a href="#" className="hover:text-primary transition-colors">Accueil</a>
          <a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a>
          <a href="#" className="hover:text-primary transition-colors">Mise en place</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
        </nav>

        <p className="text-xs text-muted-foreground font-body">
          © 2025 Silao. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
