import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={`rounded-full border-border/80 bg-card/90 text-foreground shadow-sm hover:bg-primary hover:text-primary-foreground ${className ?? ""}`}
      onClick={() => mounted && setTheme(nextTheme)}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      <span className="sr-only">{isDark ? "Activer le mode clair" : "Activer le mode sombre"}</span>
    </Button>
  );
};

export default ThemeToggle;
