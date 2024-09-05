"use client";

import React from "react";

import { Title, type TitleProps } from "@mantine/core";
import { motion } from "framer-motion";

const TitleComponent = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (props, ref) => (
    <Title
      ref={ref}
      {...props}
    />
  ),
);

TitleComponent.displayName = "Title";
export const MotionTitle = motion.create(TitleComponent);
