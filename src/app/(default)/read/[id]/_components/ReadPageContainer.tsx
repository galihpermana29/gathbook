"use client";

import { useRef } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { StyledTitle } from "@/components/styled-title";

import { useReadBook } from "../_hooks/use-read-book";
import AccordionComponent from "./Accordion/AccordionComponent";

export interface SubTopic {
  title: string;
  contents: {
    description: string;
  }[];
}

export interface AccordionComponentProps {
  item: {
    subTopics: SubTopic[];
    title: string;
  };
}

const ReadPageContainer = ({ item }: AccordionComponentProps) => {
  const { containerRef } = useReadBook();
  const ref1 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["center center", "start start"],
  });

  const { scrollYProgress: scroller } = useScroll({
    target: ref1,
    offset: ["start start", "end end"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 3], ["0vw", "120vw"]);

  const yRange = useSpring(0, { damping: 30, stiffness: 120 });

  useMotionValueEvent(scroller, "change", (latest) => {
    const containerHeight =
      containerRef.current?.getBoundingClientRect().height || 0;
    const viewportHeight = window.innerHeight;
    const maxY = containerHeight - viewportHeight;
    yRange.set(latest * maxY * -1 + 20);
  });

  return (
    <div
      className="flex w-full flex-col gap-8"
      ref={ref1}
    >
      <div className="relative flex h-[calc(100vh)] flex-col items-center justify-center gap-2 px-3">
        <motion.div
          className="absolute left-3 top-[80px] hidden w-fit rounded-lg bg-mtn-primary-filled p-1 text-lg font-semibold text-white lg:block"
          transition={{ ease: "easeInOut", duration: 0.8 }}
          style={{ y: yRange }}
        >
          {item.title}
        </motion.div>

        <motion.div
          style={{ x: xLeft }}
          className="relative w-full translate-x-[100vw]"
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <StyledTitle className="text-balance text-center text-4xl md:text-6xl lg:text-8xl">
            {item.title}
          </StyledTitle>
        </motion.div>
        <motion.i
          style={{ x: xLeft }}
          className="relative translate-x-[100vw] text-pretty text-justify lg:text-left"
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          {`${item.subTopics.length} chapters`}
        </motion.i>
      </div>

      {/* Content Section */}
      <div className="w-full bg-mtn-primary-light px-3 py-16 lg:pl-64 lg:pr-10">
        <AccordionComponent item={item} />
      </div>
    </div>
  );
};

export default ReadPageContainer;