import type { Book } from "@/lib/types/books";
import { StyledTitle } from "@/components/styled-title";

export const BookSummary = ({
  title,
  author,
  synopsis,
}: {
  title: Book["title"];
  author: Book["author"];
  synopsis: Book["synopsis"];
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <StyledTitle
          order={1}
          className="text-balance text-3xl"
        >
          {title}
        </StyledTitle>
        <p className="text-md">
          <span className="font-semibold">Authored by</span> {author}
        </p>
      </div>
      <i className="text-pretty text-justify lg:text-left">{synopsis}</i>
    </div>
  );
};
