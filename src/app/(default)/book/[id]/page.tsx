import { getBookById } from "@/server/actions/books";
import { Title } from "@mantine/core";

import { BookActionButton } from "./_components/book-action-button";
import { BookCovers } from "./_components/book-covers";
import { BookSummary } from "./_components/book-summary";
import { BookTOC } from "./_components/book-toc";
import { isBookBought } from "./_utils/is-book-bought";

type PageProps = {
  params: { id: number };
};

export async function generateMetadata({ params }: PageProps) {
  const book = await getBookById(params.id);
  return { title: book.title };
}

export default async function BookDetailPage({ params }: PageProps) {
  const book = await getBookById(params.id);
  const bookIsBought = await isBookBought(book.buyers);
  return (
    <div className="flex w-full flex-col justify-between gap-16">
      <div className="mx-auto flex w-full max-w-[80ch] flex-grow flex-col items-center justify-center gap-12 pt-4 lg:max-w-[100ch] lg:flex-row lg:gap-8 lg:px-16">
        <BookCovers covers={book.cover} />
        <div className="container flex flex-col gap-6">
          <BookSummary
            author={book.author}
            synopsis={book.synopsis}
            title={book.title}
          />
          <BookActionButton
            id={params.id}
            isBought={bookIsBought}
          />
        </div>
      </div>
      <div className="container w-full rounded-t-3xl bg-mtn-primary-light py-8 lg:rounded-t-[3rem]">
        <div className="mx-auto grid grid-rows-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:max-w-[80ch] lg:gap-x-16">
          <div className="order-last flex flex-col gap-2 sm:order-first">
            <Title
              order={2}
              className="text-2xl"
            >
              Table of Contents
            </Title>
            <BookTOC topics={book.topics} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Title
                order={2}
                className="text-2xl"
              >
                Book Synopsis
              </Title>
              {book.synopsis}
            </div>
            <div className="flex flex-col gap-2">
              <Title
                order={2}
                className="text-2xl"
              >
                Author of The Book
              </Title>
              {book.author}
            </div>
            <div className="flex flex-col gap-2">
              <Title
                order={2}
                className="text-2xl"
              >
                Book Price
              </Title>
              {book.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
