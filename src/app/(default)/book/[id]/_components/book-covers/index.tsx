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
  console.log(covers);
  return (
    <div className="no-scrollbar container flex w-full items-start justify-evenly gap-4 overflow-x-scroll lg:mx-0 lg:w-auto lg:justify-normal lg:gap-6 lg:overflow-x-visible lg:px-0">
      <CoversSwitch
        title={title}
        covers={covers}
      />
      <div className="flex items-center justify-evenly gap-4 pb-3 lg:hidden">
        {covers.length > 0 ? (
          covers.map((cover) => (
            <BookCoverCard
              key={cover}
              coverUrl={cover}
              alt={`Cover image of ${title}`}
            />
          ))
        ) : (
          <BookCoverCard
            coverUrl=""
            alt={`Cover image of ${title}`}
          />
        )}
      </div>
    </div>
  );
};
