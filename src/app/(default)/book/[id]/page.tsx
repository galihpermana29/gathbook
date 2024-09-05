import { getBookById } from "@/server/actions/books";
import { ActionIcon, Button, Paper, Title } from "@mantine/core";
import { FaArrowDown, FaArrowUp, FaBookmark } from "react-icons/fa";

export default async function BookDetailPage({
  params,
}: {
  params: { id: number };
}) {
  const book = await getBookById(params.id);
  return (
    <div className="container relative flex flex-grow flex-col gap-16 py-8">
      <div className="flex items-start justify-center gap-8 md:gap-12">
        <div className="flex flex-col gap-4 py-8">
          <ActionIcon
            variant="default"
            size="lg"
          >
            <FaArrowUp />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size="lg"
          >
            <FaArrowDown />
          </ActionIcon>
        </div>
        <Paper
          withBorder
          className="aspect-[4/5] h-52 md:h-96"
        />
        <div className="flex flex-col gap-6 md:py-8">
          <div className="flex flex-col gap-2">
            <Title
              order={1}
              className="line-clamp-2 text-2xl sm:text-3xl md:text-4xl"
            >
              {book.title}
            </Title>
            <p className="text-lg font-semibold">{book.author}</p>
          </div>
          <p>{book.synopsis}</p>
          <div className="flex items-center justify-between gap-8">
            <Button>Buy Book</Button>
            <div className="flex items-center gap-2">
              <ActionIcon size="lg">
                <FaBookmark />
              </ActionIcon>
              <ActionIcon size="lg">
                <FaBookmark />
              </ActionIcon>
              <ActionIcon size="lg">
                <FaBookmark />
              </ActionIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-x-24 px-56">
        <div className="flex flex-col gap-2">
          <Title order={2}>Description</Title>
          {book.synopsis}
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Title order={2}>Author</Title>
            {book.author}
          </div>
          <div className="flex flex-col gap-2">
            <Title order={2}>Price</Title>
            {book.price}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-80 left-1/2 -z-50 h-full w-[calc(100dvw-4rem)] -translate-x-1/2 bg-stone-100" />
    </div>
  );
}
