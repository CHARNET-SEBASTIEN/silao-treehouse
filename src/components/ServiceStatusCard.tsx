import { ExternalLink, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceInfo, SERVICE_STATUS_CONFIG } from "@/types/serviceStatus";
import { getCategoryLabel } from "@/data/services";

interface ServiceStatusCardProps {
  service: ServiceInfo;
}

const ServiceStatusCard = ({ service }: ServiceStatusCardProps) => {
  const categoryLabel = getCategoryLabel(service.category);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl flex items-center gap-2">
              {service.name}
              {service.statusUrl && (
                <a
                  href={service.statusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`Statut officiel de ${service.name}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </CardTitle>
            <CardDescription className="mt-1.5">{service.description}</CardDescription>
          </div>
          <Badge variant="outline" className="whitespace-nowrap">
            {categoryLabel}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Environnements */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-1">
            <Info className="h-3 w-3" />
            Environnements
          </h4>
          <div className="grid gap-2">
            {service.environments.map((env, index) => {
              const statusConfig = SERVICE_STATUS_CONFIG[env.status];
              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-md border ${statusConfig.bgColor}`}
                >
                  <span className="text-sm font-medium">{env.name}</span>
                  <div className={`flex items-center gap-1.5 text-sm font-semibold ${statusConfig.color}`}>
                    <span className="text-base">{statusConfig.icon}</span>
                    {statusConfig.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact et liens */}
        <div className="pt-2 border-t space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Contact :</span>
            <span className="font-medium">{service.contact}</span>
          </div>

          {service.documentationUrl && (
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Documentation :</span>
              <a
                href={service.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                Accéder
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceStatusCard;
