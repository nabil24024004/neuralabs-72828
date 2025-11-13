import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

// Optimized motion components with reduced re-renders
export const OptimizedMotionDiv = forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>((props, ref) => (
  <motion.div
    ref={ref}
    {...props}
    style={{ willChange: 'transform, opacity', ...props.style }}
  />
));

OptimizedMotionDiv.displayName = "OptimizedMotionDiv";

export const OptimizedMotionSection = forwardRef<
  HTMLElement,
  HTMLMotionProps<"section">
>((props, ref) => (
  <motion.section
    ref={ref}
    {...props}
    style={{ willChange: 'transform, opacity', ...props.style }}
  />
));

OptimizedMotionSection.displayName = "OptimizedMotionSection";
