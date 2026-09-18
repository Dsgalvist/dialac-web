import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

type AnimatedNumberProps = {
  value: number;
  formatValue?: (value: number) => string;
};

function AnimatedNumber({
  value,
  formatValue = (currentValue) => String(currentValue),
}: AnimatedNumberProps) {
  const reduceMotion = useReducedMotion();
  const currentValue = useRef(value);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (reduceMotion) {
      currentValue.current = value;
      setDisplayValue(value);
      return;
    }

    const controls = animate(currentValue.current, value, {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latestValue) => {
        currentValue.current = latestValue;
        setDisplayValue(latestValue);
      },
      onComplete: () => {
        currentValue.current = value;
        setDisplayValue(value);
      },
    });

    return () => {
      controls.stop();
    };
  }, [value, reduceMotion]);

  return (
    <span aria-label={formatValue(value)}>
      <span aria-hidden="true">
        {formatValue(Math.round(displayValue))}
      </span>
    </span>
  );
}

export default AnimatedNumber;
