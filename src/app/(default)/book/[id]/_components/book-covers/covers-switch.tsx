"use client";

import { useState } from "react";

import { ActionIcon } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import type { Book } from "@/lib/types/books";
import { MotionBookPaperCard } from "@/components/motion/motion-book-cover-card";

export const CoversSwitch = ({
  title,
  covers,
}: {
  title: Book["title"];
  covers: Book["cover"];
}) => {
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
          {covers.length > 0 ? (
            covers.map(
              (cover, arrIndex) =>
                arrIndex === index && (
                  <MotionBookPaperCard
                    key={cover + index}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    initial={{ opacity: 0, y: -20 }}
                    coverUrl={cover}
                    alt={`Cover image of ${title}`}
                  />
                ),
            )
          ) : (
            <MotionBookPaperCard
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: -20 }}
              alt={`Cover image of ${title}`}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
