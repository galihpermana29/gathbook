"use client";

import React from "react";

import { Paper, type PaperProps } from "@mantine/core";
import { motion } from "framer-motion";

const PaperComponent = React.forwardRef<HTMLDivElement, PaperProps>(
  (props, ref) => (
    <Paper
      ref={ref}
      {...props}
    />
  ),
);

PaperComponent.displayName = "Paper";
export const MotionPaper = motion(PaperComponent);
