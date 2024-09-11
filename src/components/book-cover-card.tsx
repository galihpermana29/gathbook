import React from "react";
import Image from "next/image";

import { Paper, Skeleton, type PaperProps } from "@mantine/core";

import { API_ENDPOINT } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export interface BookCoverCardProps extends PaperProps {
  coverUrl: string;
  alt?: string;
}

export const BookCoverCard = React.forwardRef<
  HTMLDivElement,
  BookCoverCardProps
>(({ coverUrl, alt, className, ...props }, ref) => (
  <Paper
    ref={ref}
    className={cn(
      "relative aspect-[4/5] h-96 w-auto overflow-hidden",
      className,
    )}
    shadow="sm"
    withBorder
    {...props}
  >
    <Image
      className="absolute z-10 object-cover"
      src={`${API_ENDPOINT}/image/${coverUrl}`}
      alt={alt ?? "Book Cover"}
      fill
    />
    <Skeleton className="absolute z-0 size-full" />
  </Paper>
));

BookCoverCard.displayName = "BookCoverCard";
