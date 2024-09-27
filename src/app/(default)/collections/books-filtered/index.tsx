import { getBooks } from "@/server/actions/books";
import { Skeleton } from "@mantine/core";
import * as motion from "framer-motion/client";
import { BookCard } from "../../_components/books-section/book-card";
import { isBookBought } from "../../book/[id]/_utils/is-book-bought";

export const BooksSectionFilter = async () => {
  const allBooks = await getBooks();
  const boughtBooks = await Promise.all(
    allBooks.map(async (book) => {
      const bought = await isBookBought(book.buyers);
      return bought ? book : null; 
    })
  );

  const filteredBooks = boughtBooks.filter((book) => book !== null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="no-scrollbar flex items-start gap-12 overflow-x-scroll px-8 pt-3 sm:px-[calc((4rem+(100vw-640px))/2)] md:px-[calc((4rem+(100vw-768px))/2)] lg:px-[calc((4rem+(100vw-1024px))/2)] xl:px-[calc((4rem+(100vw-1280px))/2)] 2xl:px-[calc((4rem+(100vw-1536px))/2)] 3xl:px-[calc((4rem+(100vw-1792px))/2)]"
    >
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            cover={book.cover}
          />
        ))
      ) : (
        <p className="text-lg text-center w-full">You don&apos;t have a Collection!</p>
      )}
    </motion.div>
  );
};

export const BookSectionLoading = () => {
  return (
    <div className="no-scrollbar flex items-start gap-12 overflow-x-scroll px-8 pt-3 sm:px-[calc((4rem+(100vw-640px))/2)] md:px-[calc((4rem+(100vw-768px))/2)] lg:px-[calc((4rem+(100vw-1024px))/2)] xl:px-[calc((4rem+(100vw-1280px))/2)] 2xl:px-[calc((4rem+(100vw-1536px))/2)] 3xl:px-[calc((4rem+(100vw-1792px))/2)]">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <Skeleton className="aspect-[4/5] h-96 w-auto" />
          <Skeleton className="h-6 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      ))}
    </div>
  );
};

