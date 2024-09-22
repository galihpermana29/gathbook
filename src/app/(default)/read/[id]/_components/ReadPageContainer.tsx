"use client";

import { motion } from "framer-motion";

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
  const { ref1, yRange, xLeft, opacityTitle } = useReadBook();

  return (
    <div
      className="relative flex w-full flex-col gap-8"
      ref={ref1}
    >
      <div className="flex h-[calc(100vh)] flex-col items-center justify-center gap-2 overflow-x-hidden px-3">
        <motion.div
          className="absolute left-3 top-[80px] z-10 hidden w-fit rounded-lg bg-mtn-primary-filled p-1 text-3xl text-lg font-bold text-white lg:block"
          transition={{ ease: "easeInOut", duration: 0.5 }}
          style={{ y: yRange }}
        >
          {item.title}
        </motion.div>

        <motion.div
          style={{ x: xLeft, opacity: opacityTitle }}
          className="relative w-full"
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
        >
          <StyledTitle className="text-balance text-center text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem]">
            {item.title}
          </StyledTitle>
        </motion.div>
        <motion.i
          style={{ x: xLeft, opacity: opacityTitle }}
          className="relative text-pretty text-justify lg:text-left"
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.1 }}
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
