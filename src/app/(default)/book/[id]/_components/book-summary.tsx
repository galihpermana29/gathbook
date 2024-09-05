import { Title } from "@mantine/core";

import type { Book } from "@/lib/types/books";

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
        <Title
          order={1}
          className="text-pretty text-4xl"
        >
          {title}
        </Title>
        <p className="text-md">
          <span className="font-semibold">Authored by</span> {author}
        </p>
      </div>
      <i className="text-justify lg:text-left">
        {synopsis} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam necessitatibus quam maiores recusandae nam voluptatum porro
        ipsa tempora, obcaecati, ex accusamus harum neque quos iste nostrum
        nobis, quod culpa repudiandae.
      </i>
    </div>
  );
};
