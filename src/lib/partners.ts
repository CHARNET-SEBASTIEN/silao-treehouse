import actionEnfanceLogo from "@/assets/partners/action-enfance.svg";
import adsea02Logo from "@/assets/partners/adsea02.png";
import croixRougeFrancaiseLogo from "@/assets/partners/croix-rouge-francaise.svg";
import fondationGrancherLogo from "@/assets/partners/fondation-grancher.svg";
import sauvegarde26Logo from "@/assets/partners/sauvegarde-26.svg";

export type PartnerReference = {
  name: string;
  monogram: string;
  logo?: string;
  logoAlt?: string;
};

export const partnerReferences: PartnerReference[] = [
  {
    name: "Croix-Rouge française",
    monogram: "CR",
    logo: croixRougeFrancaiseLogo,
    logoAlt: "Logo Croix-Rouge française",
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
    name: "ARRAS",
    monogram: "AR",
  },
  {
    name: "ADSEA02",
    monogram: "A02",
    logo: adsea02Logo,
    logoAlt: "Logo ADSEA 02",
  },
  {
    name: "Fondation Grancher",
    monogram: "FG",
    logo: fondationGrancherLogo,
    logoAlt: "Logo Fondation Grancher",
  },
  {
    name: "MDEF Calvados",
    monogram: "MC",
  },
];

export const partnerReferencesByName = Object.fromEntries(
  partnerReferences.map((partner) => [partner.name, partner]),
) as Record<string, PartnerReference>;
