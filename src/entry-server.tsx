import { MotionConfig } from "framer-motion";
import { renderToString } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StaticRouter } from "react-router-dom/server";

import AppRoutes from "@/AppRoutes";
import { TooltipProvider } from "@/components/ui/tooltip";
export { buildHeadMarkup } from "@/lib/seo";
export {
  PUBLIC_ROUTES,
  ROBOTS_TXT,
  SITEMAP_XML,
  getPageSeo,
} from "@/lib/publicRoutes";

export const render = (url: string) => {
  const queryClient = new QueryClient();

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </MotionConfig>
    </QueryClientProvider>,
  );
};
