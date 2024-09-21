import { useEffect, useRef, useState } from "react";

export const useReadBook = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const progress = 1 - entry.intersectionRatio;
          setScrollProgress(progress);
        }
      },
      {
        root: null,
        threshold: new Array(101).fill(0).map((_, i) => i / 100),
      },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const titleVariants = {
    initial: { x: 0 },
    animate: { x: `${scrollProgress * 100}%` },
  };

  const chaptersVariants = {
    initial: { x: 0 },
    animate: { x: `${scrollProgress * 100}%` },
  };
  return {
    containerRef,
    titleVariants,
    chaptersVariants,
  };
};
