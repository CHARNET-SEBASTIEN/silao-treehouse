export const filiereThemes = {
  pde: {
    label: "PDE",
    text: "filiere-pde-text",
    bg: "filiere-pde-bg",
    border: "filiere-pde-border",
    iconBg: "bg-card",
  },
  ph: {
    label: "PH",
    text: "filiere-ph-text",
    bg: "filiere-ph-bg",
    border: "filiere-ph-border",
    iconBg: "bg-card",
  },
  ahi: {
    label: "AHI",
    text: "filiere-ahi-text",
    bg: "filiere-ahi-bg",
    border: "filiere-ahi-border",
    iconBg: "bg-accent/28 border border-accent/45",
  },
  pds: {
    label: "PDS",
    text: "filiere-pds-text",
    bg: "filiere-pds-bg",
    border: "filiere-pds-border",
    iconBg: "bg-card",
  },
} as const;

export type FiliereThemeKey = keyof typeof filiereThemes;
