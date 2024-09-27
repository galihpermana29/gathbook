import { StyledTitle } from "@/components/styled-title";
import type { Metadata } from "next";
import { Suspense } from "react";
import { BookSectionLoading, BooksSectionFilter } from "./books-filtered/index";

export const metadata: Metadata = {
  title: "Collections",
};

export default async function Collections() {
  return (
    <div className="flex flex-grow flex-col justify-evenly gap-4 overflow-hidden pb-8 pt-0">
      <Suspense>
        <div className="container flex flex-col items-start justify-center gap-5 text-balance">
          <StyledTitle
            className="ax-w-full gap-x-4 overflow-hidden text-ellipsis text-3xl sm:inline-flex sm:text-5xl xs:text-4xl"
            order={1}
          >
            Your Book NFT Collections
          </StyledTitle>
          <br className="block sm:hidden" />{" "}
          <p className="text-pretty text-sm xs:max-w-[110ch] xs:text-base">
            All your NFT book collections are here! 
            Explore your digital library and enjoy access to all the books you&apos;ve purchased. 
            Rediscover your favorite works and enhance your reading experience.
          </p>
        </div>
      </Suspense>
      <Suspense fallback={<BookSectionLoading />}>
        <BooksSectionFilter />
      </Suspense>
    </div>
  );
}