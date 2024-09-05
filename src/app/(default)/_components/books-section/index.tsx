import { getBooks } from "@/server/actions/books";
import { Skeleton } from "@mantine/core";

import { BookCard } from "./book-card";

export const BooksSection = async () => {
  const books = await getBooks();
  return (
    <div className="no-scrollbar container grid w-full grid-flow-col place-items-start items-center gap-12 overflow-y-hidden overflow-x-scroll">
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};

export const BookSectionLoading = () => {
  return (
    <div className="no-scrollbar container grid w-full grid-flow-col place-items-start items-center gap-12 overflow-y-hidden overflow-x-scroll">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-[60dvh] w-[calc(90dvw-4rem)] shrink-0 sm:aspect-[3/4] sm:w-[calc(30dvw-4rem)]"
        />
      ))}
    </div>
  );
};
