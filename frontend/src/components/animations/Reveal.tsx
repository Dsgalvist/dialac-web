import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
  amount?: number;
};

function getInitialPosition(
  direction: RevealDirection,
  distance: number,
) {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance };

    case "left":
      return { x: distance, y: 0 };

    case "right":
      return { x: -distance, y: 0 };

    case "none":
      return { x: 0, y: 0 };

    case "up":
    default:
      return { x: 0, y: distance };
  }
}

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 32,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const initialPosition = getInitialPosition(direction, distance);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: initialPosition.x,
        y: initialPosition.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount,
        margin: "0px 0px -60px",
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;