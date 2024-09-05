import { Paper } from "@mantine/core";

import type { Book } from "@/lib/types/books";

import { CoversSwitch } from "./covers-switch";

export const BookCovers = ({ covers }: { covers: Book["cover"] }) => {
  return (
    <div className="no-scrollbar container flex w-full items-start justify-evenly gap-4 overflow-x-scroll lg:mx-0 lg:w-auto lg:justify-normal lg:gap-6 lg:overflow-x-visible lg:px-0">
      <CoversSwitch covers={covers} />
      <div className="contents lg:hidden">
        {covers.map((cover) => (
          <Paper
            key={cover}
            className="aspect-[4/5] h-96 w-auto"
            withBorder
          />
        ))}
      </div>
    </div>
  );
};
