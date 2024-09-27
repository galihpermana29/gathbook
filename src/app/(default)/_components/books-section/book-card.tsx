import Link from "next/link";

import * as motion from "framer-motion/client";

import { BookCoverCard } from "@/components/book-cover-card";
import { StyledTitle } from "@/components/styled-title";
import type { Book } from "@/lib/types/books";

export const BookCard = ({
  id,
  title,
  author,
  cover,
}: {
  id: Book["id"];
  title: Book["title"];
  author: Book["author"];
  cover: Book["cover"];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.06 } }}
      whileHover={{ translateY: -7.5 }}
      className="relative flex flex-col items-center gap-4"
    >
      <Link href={`/book/${id}`}>
        <BookCoverCard
          alt={`Cover image of ${title}`}
          coverUrl={cover[0]}
        />
      </Link>
      <div className="flex flex-col gap-1">
        <StyledTitle
          order={4}
          className="line-clamp-2 px-4 text-center text-xl"
        >
          {title}
        </StyledTitle>
        <p className="text-center">{author}</p>
      </div>
    </motion.div>
  );
};
