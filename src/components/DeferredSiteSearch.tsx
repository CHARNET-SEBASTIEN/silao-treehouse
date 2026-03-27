import { useState, type ComponentType } from "react";
import { Search } from "lucide-react";

type SiteSearchComponent = ComponentType<{
  mode?: "inline" | "compact";
  className?: string;
  initialOpen?: boolean;
}>;

let siteSearchPromise: Promise<{ default: SiteSearchComponent }> | null = null;

const loadSiteSearch = () => {
  if (!siteSearchPromise) {
    siteSearchPromise = import("@/components/SiteSearch");
  }

  return siteSearchPromise;
};

const compactButtonClassName =
  "hidden h-11 items-center gap-2 rounded-full border border-border/70 bg-card px-4 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:inline-flex";

const DeferredSiteSearch = () => {
  const [SearchComponent, setSearchComponent] = useState<SiteSearchComponent | null>(null);
  const [openOnMount, setOpenOnMount] = useState(false);

  const preload = () => {
    if (SearchComponent) return;

    void loadSiteSearch().then((module) => {
      setSearchComponent(() => module.default);
    });
  };

  const handleClick = () => {
    if (SearchComponent) return;

    setOpenOnMount(true);
    preload();
  };

  if (SearchComponent) {
    return (
      <SearchComponent
        mode="compact"
        className={compactButtonClassName}
        initialOpen={openOnMount}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      onFocus={preload}
      onMouseEnter={preload}
      className={compactButtonClassName}
      aria-label="Ouvrir la recherche du site"
    >
      <Search className="h-4 w-4" />
      Rechercher
    </button>
  );
};

export default DeferredSiteSearch;
