import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";

import AppRoutes from "@/AppRoutes";
import { getScrollBehavior } from "@/lib/motion";

const queryClient = new QueryClient();

const scrollToHashTarget = (hash: string) => {
  const targetId = hash.replace("#", "");
  if (!targetId) return false;

  const element = document.getElementById(targetId);
  if (!element) return false;

  const headerOffset = 88;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: getScrollBehavior() });
  return true;
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
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-foreground focus:shadow-lg"
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
