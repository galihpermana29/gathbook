import { getBooks } from "@/server/actions/books";
import { Skeleton } from "@mantine/core";
import * as motion from "framer-motion/client";

import { BookCard } from "./book-card";

export const BooksSection = async () => {
  const books = await getBooks();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="no-scrollbar container flex items-start gap-12 overflow-x-scroll pt-3"
    >
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </motion.div>
  );
};

export const BookSectionLoading = () => {
  return (
    <div className="no-scrollbar container flex items-start gap-12 overflow-x-scroll pt-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4"
        >
          <Skeleton className="aspect-[4/5] h-96 w-auto" />
          <Skeleton className="h-6 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      ))}
    </div>
  );
};
