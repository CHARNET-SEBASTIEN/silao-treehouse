import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { forwardRef } from "react";

import { defaultViewport, fadeUp } from "@/lib/motion";

type RevealProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  /** Override the variants. Defaults to `fadeUp`. */
  variants?: Variants;
  /** Delay before the animation starts (in seconds). */
  delay?: number;
};

/**
 * Subtle scroll-triggered reveal. Uses `fadeUp` by default and a single shared
 * easing curve to keep the whole site visually consistent.
 */
const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, variants = fadeUp, delay = 0, transition, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={variants}
        transition={delay ? { delay, ...transition } : transition}
        {...rest}
      >
        {children}
      </motion.div>
    );
  },
);

Reveal.displayName = "Reveal";

export default Reveal;
