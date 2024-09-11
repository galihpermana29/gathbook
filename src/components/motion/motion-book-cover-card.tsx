"use client";

import React from "react";

import { motion } from "framer-motion";

import { BookCoverCard, type BookCoverCardProps } from "../book-cover-card";

const BookCoverCardComponent = React.forwardRef<
  HTMLDivElement,
  BookCoverCardProps
>((props, ref) => (
  <BookCoverCard
    ref={ref}
    {...props}
  />
));

BookCoverCardComponent.displayName = "BookCoverCard";
export const MotionBookPaperCard = motion.create(BookCoverCardComponent);
