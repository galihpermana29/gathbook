import type { Book } from "@/lib/types/books";
import { BookCoverCard } from "@/components/book-cover-card";

import { CoversSwitch } from "./covers-switch";

export const BookCovers = ({
  title,
  covers,
}: {
  title: Book["title"];
  covers: Book["cover"];
}) => {
  return (
    <div className="no-scrollbar container flex w-full items-start justify-evenly gap-4 overflow-x-scroll lg:mx-0 lg:w-auto lg:justify-normal lg:gap-6 lg:overflow-x-visible lg:px-0">
      <CoversSwitch
        title={title}
        covers={covers}
      />
      <div className="flex items-center justify-evenly gap-4 lg:hidden">
        {covers.map((cover) => (
          <BookCoverCard
            key={cover}
            coverUrl={cover}
            alt={`Cover image of ${title}`}
          />
        ))}
      </div>
    </div>
  );
};
