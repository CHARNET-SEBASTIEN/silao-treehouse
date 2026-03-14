export const userPrefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const getScrollBehavior = (): ScrollBehavior =>
  userPrefersReducedMotion() ? "auto" : "smooth";
