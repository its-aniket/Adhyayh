import { useState, useEffect, useRef } from "react";

interface UseAnimateOnScrollProps {
  threshold?: number;
  triggerOnce?: boolean;
}

const useAnimateOnScroll = ({
  threshold = 0.2,
  triggerOnce = true
}: UseAnimateOnScrollProps = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, inView };
};

export default useAnimateOnScroll;
