"use client";

import { motion, useScroll, useTransform } from "framer-motion";

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
  const { containerRef, titleVariants, chaptersVariants } = useReadBook();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div className="flex w-full flex-col gap-8">
      <div
        ref={containerRef}
        className="relative h-[calc(100vh-300px)] flex flex-col items-center justify-center gap-2 px-3"
      >
        <motion.div
          style={{ x }}
          className="absolute left-3 top-0 hidden w-fit rounded-lg bg-mtn-primary-filled p-1 text-lg font-semibold text-white lg:block"
        >
          {item.title}
        </motion.div>
        <motion.div
          variants={titleVariants}
          initial="initial"
          animate="animate"
          className="w-full"
          transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
        >
          <StyledTitle className="text-balance text-center text-4xl md:text-6xl lg:text-8xl">
            {item.title}
          </StyledTitle>
        </motion.div>
        <motion.i
          variants={chaptersVariants}
          initial="initial"
          animate="animate"
          className="text-pretty text-justify lg:text-left"
          transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
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
