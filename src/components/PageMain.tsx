import * as React from "react";

import { cn } from "@/lib/utils";

type PageMainProps = React.ComponentPropsWithoutRef<"main">;

const PageMain = React.forwardRef<HTMLElement, PageMainProps>(
  ({ className, ...props }, ref) => (
    <main
      id="main-content"
      ref={ref}
      tabIndex={-1}
      className={cn("focus:outline-none", className)}
      {...props}
    />
  ),
);

PageMain.displayName = "PageMain";

export default PageMain;
