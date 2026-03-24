import { getScrollBehavior } from "@/lib/motion";

const HEADER_OFFSET = 88;

export const focusElementForNavigation = (element: HTMLElement) => {
  if (!element.hasAttribute("tabindex")) {
    element.setAttribute("tabindex", "-1");
  }

  element.focus({ preventScroll: true });
};

export const scrollToHashTarget = (hash: string) => {
  const targetId = hash.replace("#", "");
  if (!targetId) return false;

  const element = document.getElementById(targetId);
  if (!element) return false;

  focusElementForNavigation(element);

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: getScrollBehavior() });
  return true;
};

