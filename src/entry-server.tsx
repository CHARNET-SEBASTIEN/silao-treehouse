import { MotionConfig } from "framer-motion";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import AppRoutes from "@/AppRoutes";
import { DemoRequestDialogProvider, DemoRequestDialogRoot } from "@/components/DemoRequestDialogProvider";
import ThemeProvider from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
export { buildHeadMarkup } from "@/lib/seo";
export {
  PUBLIC_ROUTES,
  ROBOTS_TXT,
  SITEMAP_XML,
  getPageSeo,
} from "@/lib/publicRoutes";

export const render = (url: string) => {
  return renderToString(
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <StaticRouter location={url}>
            <DemoRequestDialogProvider>
              <AppRoutes />
              <DemoRequestDialogRoot />
            </DemoRequestDialogProvider>
          </StaticRouter>
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>,
  );
};
