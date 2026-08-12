export type ServiceStatus = "operational" | "degraded" | "outage" | "unknown";

export interface ServiceEnvironment {
  name: string;
  status: ServiceStatus;
  lastCheck?: Date;
}

export interface ServiceInfo {
  id: string;
  name: string;
  description: string;
  category: "identity" | "messaging" | "directory" | "auth" | "infrastructure" | "other";
  contact: string;
  statusUrl?: string;
  documentationUrl?: string;
  environments: ServiceEnvironment[];
}

export const SERVICE_STATUS_CONFIG: Record<ServiceStatus, {
  label: string;
  color: string;
  bgColor: string;
  icon: string;
}> = {
  operational: {
    label: "Opérationnel",
    color: "text-green-700",
    bgColor: "bg-green-100 border-green-300",
    icon: "✓"
  },
  degraded: {
    label: "Dégradé",
    color: "text-orange-700",
    bgColor: "bg-orange-100 border-orange-300",
    icon: "⚠"
  },
  outage: {
    label: "En panne",
    color: "text-red-700",
    bgColor: "bg-red-100 border-red-300",
    icon: "✕"
  },
  unknown: {
    label: "Inconnu",
    color: "text-gray-700",
    bgColor: "bg-gray-100 border-gray-300",
    icon: "?"
  }
};
