import * as React from "react";

import RouteBreadcrumbs from "@/components/RouteBreadcrumbs";
import { cn } from "@/lib/utils";

type PageMainProps = React.ComponentPropsWithoutRef<"main">;

const PageMain = React.forwardRef<HTMLElement, PageMainProps>(
  ({ className, children, ...props }, ref) => (
    <main
      id="main-content"
      ref={ref}
      tabIndex={-1}
      className={cn("focus:outline-none", className)}
      {...props}
    >
      <RouteBreadcrumbs />
      {children}
    </main>
  ),
);

PageMain.displayName = "PageMain";

export default PageMain;
