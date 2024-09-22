import { useRef } from "react";

import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const useReadBook = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref1 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["0 1", "1.33 1"],
  });

  const { scrollYProgress: scroller } = useScroll({
    target: ref1,
    offset: ["start start", "end end"],
  });

  const xLeftSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const xLeft = useTransform(
    xLeftSpring,
    [0, 0.5, 1],
    ["70vw", "0vw", "-40vw"],
  );

  const opacityTitle = useTransform(
    xLeftSpring,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  const yRange = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scroller, "change", (latest) => {
    const containerHeight =
      containerRef.current?.getBoundingClientRect().height || 0;
    const viewportHeight = window.innerHeight;
    const maxY = containerHeight - viewportHeight;
    yRange.set(latest * maxY * -1 + 82);
  });

  return {
    containerRef,
    ref1,
    yRange,
    xLeft,
    opacityTitle,
  };
};
