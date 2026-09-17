import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FloatingShapeProps = {
  children?: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
};

function FloatingShape({
  children,
  className = "",
  duration = 5,
  delay = 0,
  distance = 14,
}: FloatingShapeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div aria-hidden="true" className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{
        y: [0, -distance, 0],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FloatingShape;