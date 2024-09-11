"use client";

import React from "react";

import { type TitleProps } from "@mantine/core";
import { motion } from "framer-motion";

import { StyledTitle } from "../styled-title";

const TitleComponent = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (props, ref) => (
    <StyledTitle
      ref={ref}
      {...props}
    />
  ),
);

TitleComponent.displayName = "Title";
export const MotionTitle = motion.create(TitleComponent);
