import { useState } from "react";
import { Activity, CheckCircle2, RefreshCw, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ESANTE_SERVICES } from "@/data/services";
import { getCategoryLabel } from "@/data/services";
import { getPageSeo } from "@/lib/publicRoutes";
import { SERVICE_STATUS_CONFIG } from "@/types/serviceStatus";
import type { ServiceInfo } from "@/types/serviceStatus";

const seo = getPageSeo("/supervision-esante");

const SupervisionPage = () => {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Grouper les services par catégorie
  const servicesByCategory = ESANTE_SERVICES.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, ServiceInfo[]>);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simuler un rafraîchissement
    setTimeout(() => {
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  // Obtenir le statut de production pour chaque service
  const getProductionStatus = (service: ServiceInfo) => {
    const prodEnv = service.environments.find(env =>
      env.name.toLowerCase().includes("production") || env.name.toLowerCase() === "prod"
    );
    return prodEnv?.status || service.environments[0]?.status || "unknown";
  };

  const operationalCount = ESANTE_SERVICES.filter(
    service => getProductionStatus(service) === "operational"
  ).length;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />

      <PageMain className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* En-tête compact */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
                  <Activity className="h-7 w-7 text-primary" aria-hidden="true" />
                  Supervision e-santé
                </h1>
                <p className="text-sm text-muted-foreground">
                  Statut des services en production • Mis à jour : {lastUpdate.toLocaleTimeString("fr-FR")}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                <span className="hidden sm:inline">Actualiser</span>
              </Button>
            </div>
          </div>

          {/* Vue d'ensemble compacte */}
          <div className="mb-6 bg-card rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold">
                    {operationalCount} / {ESANTE_SERVICES.length} services opérationnels
                  </span>
                </div>
              </div>
              <a
                href="https://status.esante.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Statut officiel ANS
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Liste compacte des services */}
          <div className="space-y-6">
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <section key={category} className="bg-card rounded-lg border overflow-hidden">
                <div className="bg-muted/50 px-4 py-2 border-b">
                  <h2 className="font-semibold text-sm">
                    {getCategoryLabel(category as ServiceInfo["category"])}
                  </h2>
                </div>
                <div className="divide-y">
                  {services.map((service) => {
                    const prodStatus = getProductionStatus(service);
                    const statusConfig = SERVICE_STATUS_CONFIG[prodStatus];
                    return (
                      <div key={service.id} className="p-4 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-sm">{service.name}</h3>
                              {service.statusUrl && (
                                <a
                                  href={service.statusUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  aria-label={`Statut officiel de ${service.name}`}
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {service.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-xs text-muted-foreground hidden sm:block">
                              {service.contact}
                            </div>
                            <div
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${statusConfig.bgColor} ${statusConfig.color}`}
                            >
                              <span className="text-sm">{statusConfig.icon}</span>
                              {statusConfig.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Ressources compactes */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-dashed">
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Ressources :</span>
              <a
                href="https://status.esante.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Statut ANS
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://esante.gouv.fr/ens"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                Espace éditeurs
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.sesam-vitale.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                SESAM-Vitale
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </PageMain>

      <FooterSection />
    </div>
  );
};

export default SupervisionPage;
