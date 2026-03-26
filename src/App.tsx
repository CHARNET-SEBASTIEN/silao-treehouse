import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
    if (!("scrollRestoration" in window.history)) return;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    if (!location.hash) {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      const frame = window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        root.style.scrollBehavior = previousBehavior;
      });

      return () => {
        window.cancelAnimationFrame(frame);
        root.style.scrollBehavior = previousBehavior;
      };
    }

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    let timeoutId: number | null = null;
    let frame = 0;

    const cleanup = () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      window.cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousBehavior;
    };

    let attempts = 0;
    const maxAttempts = 12;

    const tryScroll = () => {
      if (scrollToHashTarget(location.hash)) {
        root.style.scrollBehavior = previousBehavior;
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        timeoutId = window.setTimeout(tryScroll, 120);
      } else {
        root.style.scrollBehavior = previousBehavior;
      }
    };

    frame = window.requestAnimationFrame(tryScroll);
    return cleanup;
  }, [location.pathname, location.hash]);

  return null;
};

const RouteFocusManager = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);

  useLayoutEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
};

const RouteAnnouncer = () => {
  const { pathname } = useLocation();
  const [message, setMessage] = useState("");
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setMessage(`Page chargée : ${document.title}`);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {message}
    </p>
  );
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
            <RouteFocusManager />
            <RouteAnnouncer />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
