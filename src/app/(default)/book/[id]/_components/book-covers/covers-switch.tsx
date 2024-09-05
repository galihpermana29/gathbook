"use client";

import { useState } from "react";

import { ActionIcon } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import type { Book } from "@/lib/types/books";
import { MotionPaper } from "@/components/motion/motion-paper";

export const CoversSwitch = ({ covers }: { covers: Book["cover"] }) => {
  const [index, setIndex] = useState(0);
  const handleClickUp = () =>
    setIndex((prev) => (prev === covers.length - 1 ? 0 : prev + 1));
  const handleClickDown = () =>
    setIndex((prev) => (prev === 0 ? covers.length - 1 : prev - 1));
  const canChange = covers.length > 1;

  return (
    <>
      <div className="hidden flex-col gap-4 pt-9 lg:flex">
        <ActionIcon
          disabled={!canChange}
          variant="default"
          size="lg"
          onClick={handleClickUp}
        >
          <FaArrowUp />
        </ActionIcon>
        <ActionIcon
          disabled={!canChange}
          variant="default"
          size="lg"
          onClick={handleClickDown}
        >
          <FaArrowDown />
        </ActionIcon>
      </div>
      <div className="relative hidden lg:block">
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          {covers.map(
            (cover, arrIndex) =>
              arrIndex === index && (
                <MotionPaper
                  key={cover + index}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  initial={{ opacity: 0, y: -20 }}
                  className="hidden aspect-[4/5] h-96 w-auto lg:block"
                  withBorder
                />
              ),
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
