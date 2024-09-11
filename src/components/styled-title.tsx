import React from "react";

import { Title, type TitleProps } from "@mantine/core";

import { cn } from "@/lib/utils/cn";

export const StyledTitle = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn("text-pretty leading-tight tracking-[-.15em]", className)}
      {...props}
    />
  ),
);

StyledTitle.displayName = "StyledTitle";
