import Link from "next/link";

import { Paper, Title } from "@mantine/core";
import * as motion from "framer-motion/client";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.06 } }}
      whileHover={{ translateY: -7.5 }}
      className="relative flex flex-col items-center gap-4"
    >
      <Paper
        component={Link}
        href={`/book/${id}`}
        className="aspect-[4/5] h-96 w-auto"
        shadow="sm"
        withBorder
      />
      <div className="flex flex-col gap-1">
        <Title
          order={4}
          className="line-clamp-2 px-4 text-center text-xl"
        >
          {title}
        </Title>
        <p className="text-center">{author}</p>
      </div>
    </motion.div>
  );
};
