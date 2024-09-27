import type { Metadata } from "next";
import { Suspense } from "react";

import { getBooks } from "@/server/actions/books";

import { BookSectionLoading, BooksSection } from "./_components/books-section";
import { HeroSection } from "./_components/hero-section";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  void getBooks();
  return (
    <div className="flex flex-grow flex-col justify-evenly gap-4 overflow-hidden pb-8 pt-0">
      <Suspense>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<BookSectionLoading />}>
        <BooksSection />
      </Suspense>
    </div>
  );
}
