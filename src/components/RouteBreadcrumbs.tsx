import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PUBLIC_ROUTES } from "@/lib/publicRoutes";

const RouteBreadcrumbs = () => {
  const location = useLocation();
  const page = PUBLIC_ROUTES.find((route) => route.path === location.pathname);

  if (!page || page.path === "/" || page.noindex || !page.breadcrumbs?.length) {
    return null;
  }

  return (
    <section className="px-4 pt-6">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb className="rounded-full border border-border/70 bg-background/80 px-4 py-2.5 backdrop-blur-sm">
          <BreadcrumbList>
            {page.breadcrumbs.map((item, index) => {
              const isLast = index === page.breadcrumbs!.length - 1;

              return (
                <Fragment key={`${item.path}-${index}`}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{item.name}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={item.path}>{item.name}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast ? <BreadcrumbSeparator /> : null}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default RouteBreadcrumbs;
