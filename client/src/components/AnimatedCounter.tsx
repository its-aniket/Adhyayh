import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  duration: number;
  inView: boolean;
}

const AnimatedCounter = ({ target, duration, inView }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<{ value: number, timer: NodeJS.Timeout | null }>({
    value: 0,
    timer: null
  });

  useEffect(() => {
    if (!inView) return;

    // Clear existing timer if any
    if (countRef.current.timer) {
      clearInterval(countRef.current.timer);
    }

    // Don't animate if already at target
    if (countRef.current.value >= target) {
      return;
    }

    const step = target / (duration / 16); // for 60fps
    const timer = setInterval(() => {
      countRef.current.value += step;

      if (countRef.current.value >= target) {
        clearInterval(timer);
        setCount(target);
        countRef.current.timer = null;
      } else {
        setCount(Math.floor(countRef.current.value));
      }
    }, 16);

    countRef.current.timer = timer;

    return () => {
      if (countRef.current.timer) {
        clearInterval(countRef.current.timer);
      }
    };
  }, [inView, target, duration]);

  return <>{count}</>;
};

export default AnimatedCounter;
