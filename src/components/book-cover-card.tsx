import React from "react";
import Image from "next/image";

import { Paper, Skeleton, type PaperProps } from "@mantine/core";

import { API_ENDPOINT } from "@/lib/constants";

export interface BookCoverCardProps extends PaperProps {
  coverUrl: string;
  alt?: string;
}

export const BookCoverCard = React.forwardRef<
  HTMLDivElement,
  BookCoverCardProps
>(({ coverUrl, alt, ...props }, ref) => (
  <Paper
    ref={ref}
    className="relative aspect-[4/5] h-96 w-auto overflow-hidden"
    shadow="sm"
    withBorder
    {...props}
  >
    <Image
      className="absolute z-10 object-cover"
      src={`${API_ENDPOINT}/image/${coverUrl}`}
      alt={alt ?? "book cover"}
      fill
    />
    <Skeleton className="absolute z-0 size-full" />
  </Paper>
));

BookCoverCard.displayName = "BookCoverCard";
