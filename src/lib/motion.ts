import type { Transition, Variants } from "framer-motion";

type Viewport = {
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
};

export const userPrefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const getScrollBehavior = (): ScrollBehavior =>
  userPrefersReducedMotion() ? "auto" : "smooth";

/**
 * Easing curve for subtle, elegant motion (gentle ease-out, "ease-out-expo").
 * Used as the default for all entrance animations.
 */
export const easeOutSoft: Transition["ease"] = [0.22, 1, 0.36, 1];

/**
 * Default viewport configuration for scroll-triggered reveals.
 * `amount: 0.2` triggers when 20% of the element is visible.
 */
export const defaultViewport: Viewport = { once: true, amount: 0.2 };

/**
 * Standard transition for entrance animations.
 */
export const enterTransition: Transition = {
  duration: 0.7,
  ease: easeOutSoft,
};

/**
 * Snappier transition for micro-interactions (hover, focus).
 */
export const microTransition: Transition = {
  duration: 0.25,
  ease: easeOutSoft,
};

/**
 * Fade in + slight upward translate. Default reveal.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: enterTransition,
  },
};

/**
 * Fade in + slight upward translate, smaller amplitude.
 */
export const fadeUpSm: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutSoft },
  },
};

/**
 * Pure opacity fade.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutSoft },
  },
};

/**
 * Subtle scale + fade (for figures, illustrations).
 */
export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutSoft },
  },
};

/**
 * Parent container that staggers its children's entrance.
 */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/**
 * Child variant designed to be used inside `staggerContainer`.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutSoft },
  },
};

/**
 * Hover variant for cards: subtle lift.
 */
export const cardHover = {
  rest: { y: 0, transition: microTransition },
  hover: { y: -4, transition: microTransition },
};
