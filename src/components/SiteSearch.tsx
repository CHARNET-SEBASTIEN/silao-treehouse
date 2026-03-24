import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Building2, FolderSearch, LifeBuoy, Search, ShieldCheck, Sparkles } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { scrollToHashTarget } from "@/lib/hashNavigation";

type SearchMode = "inline" | "compact";

type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
};

const searchItems: SearchItem[] = [
  {
    title: "Accueil",
    description: "Présentation générale de SILAO et des secteurs couverts.",
    href: "/",
    category: "Pages",
    keywords: ["home", "dui", "silao", "social", "médico-social"],
  },
  {
    title: "Fonctionnalités",
    description: "Dossier usager, agenda, cahier de liaison, GED, alertes et facturation.",
    href: "/#services",
    category: "Accueil",
    keywords: ["services", "modules", "fonctionnalités", "agenda", "ged", "facturation"],
  },
  {
    title: "Secteurs couverts",
    description: "Protection de l'enfance, médico-social, AHI et personnes en difficultés spécifiques.",
    href: "/#secteurs",
    category: "Accueil",
    keywords: ["secteurs", "pde", "ph", "ahi", "pds"],
  },
  {
    title: "Pourquoi choisir SILAO",
    description: "Les six engagements opérationnels mis en avant par D2L.",
    href: "/#pourquoi-silao",
    category: "Accueil",
    keywords: ["pourquoi", "différences", "sécurité", "expertise", "accompagnement"],
  },
  {
    title: "Qui sommes-nous",
    description: "Créée en 2005, 30 collaborateurs, une équipe construite avec le terrain.",
    href: "/#societe",
    category: "Accueil",
    keywords: ["histoire", "d2l", "valeurs", "équipe", "open source"],
  },
  {
    title: "Contact",
    description: "Demande de démonstration, support, plaquette et prise de contact.",
    href: "/#contacts",
    category: "Accueil",
    keywords: ["contact", "démo", "support", "plaquette", "recrutement"],
  },
  {
    title: "Protection de l'enfance",
    description: "Fonctionnalités ciblées pour MECS, milieu ouvert, accueil familial et lieux de vie.",
    href: "/secteur/protection-enfance",
    category: "Secteurs",
    keywords: ["pde", "protection", "enfance", "mecs", "aemo", "ppe"],
  },
  {
    title: "Médico-social / PH",
    description: "SILAO pour IME, DITEP, SESSAD, CAMSP, CMPP, MAS et FAM.",
    href: "/secteur/handicap",
    category: "Secteurs",
    keywords: ["ph", "handicap", "ime", "ditep", "sessad", "camsp", "cmpp"],
  },
  {
    title: "Accueil, hébergement et insertion",
    description: "Suivi des parcours pour CHRS, CADA, HUDA, CPH, AVDL, IML et accueils de jour.",
    href: "/secteur/insertion-ahi",
    category: "Secteurs",
    keywords: ["ahi", "insertion", "chrs", "cada", "huda", "iml"],
  },
  {
    title: "Personnes en difficultés spécifiques",
    description: "LHSS, ACT, CAARUD et prises en charge à forte composante sociale et santé.",
    href: "/secteur/personnes-difficultes-specifiques",
    category: "Secteurs",
    keywords: ["pds", "lhss", "act", "caarud", "addictions"],
  },
  {
    title: "Accompagnement",
    description: "Méthode de déploiement, proximité projet et conduite du changement.",
    href: "/accompagnement",
    category: "Services",
    keywords: ["accompagnement", "déploiement", "formation", "conduite du changement"],
  },
  {
    title: "Formations",
    description: "Formations sur mesure, Qualiopi, accessibilité et organisation adaptée aux équipes.",
    href: "/formations",
    category: "Services",
    keywords: ["formations", "qualiopi", "accessibilite", "catalogue", "sur mesure", "agenda"],
  },
  {
    title: "Offres",
    description: "Cadrage, paramétrage, reprise de données et formation.",
    href: "/offres",
    category: "Services",
    keywords: ["offres", "déploiement", "reprise", "formation"],
  },
  {
    title: "Engagements",
    description: "Sécurité, RGPD, référencement Ségur et démarche responsable.",
    href: "/engagements",
    category: "Services",
    keywords: ["engagements", "rgpd", "sécurité", "segur", "responsable"],
  },
  {
    title: "Ressources et actualités",
    description: "Guides, veille réglementaire et retours d'expérience sectoriels.",
    href: "/ressources",
    category: "Ressources",
    keywords: ["blog", "actualités", "guides", "seo", "articles"],
  },
  {
    title: "Aide et support",
    description: "Accès utiles pour une demande publique, une orientation projet ou un support.",
    href: "/aide-support",
    category: "Contact",
    keywords: ["aide", "support", "contact", "assistance"],
  },
];

const featuredItems = searchItems.slice(0, 6);

interface SiteSearchProps {
  mode?: SearchMode;
  className?: string;
}

const SiteSearch = ({ mode = "inline", className }: SiteSearchProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    if (!normalizedQuery) return featuredItems;

    return searchItems.filter((item) => {
      const haystack = [item.title, item.description, ...item.keywords]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const navigateTo = (href: string) => {
    const [pathname, hash] = href.split("#");

    if (!hash) {
      navigate(pathname || "/");
      setOpen(false);
      return;
    }

    if (location.pathname !== (pathname || "/")) {
      navigate(href);
      setOpen(false);
      return;
    }

    scrollToHashTarget(`#${hash}`);
    setOpen(false);
  };

  if (mode === "compact") {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={className ?? "hidden lg:inline-flex h-10 items-center gap-2 rounded-full border border-border/70 bg-card px-4 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"}
          aria-label="Ouvrir la recherche du site"
        >
          <Search className="h-4 w-4" />
          Rechercher
        </button>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Rechercher une page, un secteur ou une fonctionnalité…"
          />
          <CommandList>
            <CommandEmpty>Aucun résultat correspondant.</CommandEmpty>
            <CommandGroup heading="Navigation rapide">
              {filteredItems.map((item) => (
                <CommandItem
                  key={item.href}
                  value={[item.title, item.description, ...item.keywords].join(" ")}
                  onSelect={() => navigateTo(item.href)}
                  className="flex items-start gap-3 py-3"
                >
                  <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                    <Search className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
                      {item.category}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  }

  return (
    <div className={className}>
      <div className="rounded-[1.75rem] border border-border/70 bg-card p-4 shadow-sm sm:p-5">
        <label htmlFor="site-search-inline" className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <FolderSearch className="h-4 w-4 text-primary" />
          Barre de recherche
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="site-search-inline"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un secteur, une fonctionnalité, une page ou un contact…"
            className="h-12 rounded-full border-border/70 bg-card pl-11 pr-4"
          />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {filteredItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => navigateTo(item.href)}
              className="rounded-2xl border border-border/60 bg-card px-4 py-4 text-left transition-colors hover:border-primary/30 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="font-semibold text-foreground">{item.title}</p>
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.category}
              </p>
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Ségur
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-foreground">
            <Building2 className="h-3.5 w-3.5" />
            4 secteurs
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Fonctionnalités métier
          </span>
          <Link
            to="/aide-support"
            className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <LifeBuoy className="h-3.5 w-3.5" />
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteSearch;
