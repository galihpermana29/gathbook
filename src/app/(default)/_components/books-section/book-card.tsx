import Link from "next/link";

import { Paper, Title } from "@mantine/core";

import type { Book } from "@/lib/types/books";

export const BookCard = ({
  id,
  title,
  author,
}: {
  id: Book["id"];
  title: Book["title"];
  author: Book["author"];
}) => {
  return (
    <Link
      href={`/book/${id}`}
      className="relative flex flex-col items-center"
    >
      <Paper
        className="h-[60dvh] w-[calc(90dvw-4rem)] shrink-0 sm:aspect-[3/4] sm:w-auto"
        shadow="sm"
        withBorder
      />
      <div className="absolute bottom-24 z-10 flex flex-col gap-1">
        <Title
          order={4}
          className="line-clamp-2 w-[calc(80dvw-4rem)] px-4 text-center text-xl sm:w-auto"
        >
          {title}
        </Title>
        <p className="text-center text-sm">{author}</p>
      </div>
    </Link>
  );
};
