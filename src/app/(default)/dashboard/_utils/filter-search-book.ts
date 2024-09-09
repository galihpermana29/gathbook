import type { Book } from "@/lib/types/books";

export const filterSearchBook = (books: Book[], search: string) =>
  books
    ? books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      )
    : [];
