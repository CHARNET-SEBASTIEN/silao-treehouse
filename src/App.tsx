import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";

import AppRoutes from "@/AppRoutes";
import { scrollToHashTarget } from "@/lib/hashNavigation";

const queryClient = new QueryClient();

const DecorativeIconManager = () => {
  useEffect(() => {
    const selector =
      'svg.lucide:not([aria-hidden]):not([aria-label]):not([aria-labelledby])';

    const decorateIcons = (root: ParentNode) => {
      root.querySelectorAll<SVGElement>(selector).forEach((icon) => {
        icon.setAttribute("aria-hidden", "true");
        icon.setAttribute("focusable", "false");
      });
    };

    decorateIcons(document);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;

          if (node.matches(selector)) {
            node.setAttribute("aria-hidden", "true");
            node.setAttribute("focusable", "false");
          }

          decorateIcons(node);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
};

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    let attempts = 0;
    const maxAttempts = 12;

    const tryScroll = () => {
      if (scrollToHashTarget(location.hash)) return;
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 120);
      }
    };

    const frame = window.requestAnimationFrame(tryScroll);
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <DecorativeIconManager />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-3 focus:text-background focus:shadow-lg focus:outline focus:outline-4 focus:outline-secondary focus:outline-offset-2"
          >
            Aller au contenu
          </a>
          <BrowserRouter>
            <ScrollManager />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
