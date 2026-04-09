import actionEnfanceLogo from "@/assets/partners/action-enfance.svg";
import arassLogo from "@/assets/partners/arass.png";
import croixRougeFrancaiseLogo from "@/assets/partners/croix-rouge-francaise.jpg";
import fondationGrancherLogo from "@/assets/partners/fondation-grancher.svg";
import sauvegarde26Logo from "@/assets/partners/sauvegarde-26.svg";

export type PartnerReference = {
  name: string;
  monogram: string;
  logo?: string;
  logoAlt?: string;
  logoClassName?: string;
};

export const partnerReferences: PartnerReference[] = [
  {
    name: "Croix-Rouge française",
    monogram: "CR",
    logo: croixRougeFrancaiseLogo,
    logoAlt: "Logo Croix-Rouge française",
    logoClassName: "max-h-14",
  },
  {
    name: "ARASS",
    monogram: "AR",
    logo: arassLogo,
    logoAlt: "Logo ARASS",
    logoClassName: "max-h-12",
  },
  {
    name: "Action Enfance",
    monogram: "AE",
    logo: actionEnfanceLogo,
    logoAlt: "Logo Action Enfance",
  },
  {
    name: "Sauvegarde 26",
    monogram: "S26",
    logo: sauvegarde26Logo,
    logoAlt: "Logo Sauvegarde 26",
  },
  {
    name: "Fondation Grancher",
    monogram: "FG",
    logo: fondationGrancherLogo,
    logoAlt: "Logo Fondation Grancher",
  },
];

export const partnerReferencesByName = Object.fromEntries(
  partnerReferences.map((partner) => [partner.name, partner]),
) as Record<string, PartnerReference>;
