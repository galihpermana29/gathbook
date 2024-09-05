import { Suspense } from "react";
import type { Metadata } from "next";

import { getBooks } from "@/server/actions/books";

import { BookSectionLoading, BooksSection } from "./_components/books-section";
import { HeroSection } from "./_components/hero-section";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  void getBooks();
  return (
    <div className="flex h-[calc(100dvh-80px)] flex-grow flex-col gap-x-8 gap-y-12 overflow-hidden">
      <HeroSection />
      <Suspense fallback={<BookSectionLoading />}>
        <BooksSection />
      </Suspense>
    </div>
  );
}
