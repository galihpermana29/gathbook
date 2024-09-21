import { getBookById } from "@/server/actions/books";

import ReadPageContainer from "./_components/ReadPageContainer";

type PageProps = {
  params: { id: number };
};

export async function generateMetadata({ params }: PageProps) {
  const book = await getBookById(params.id);
  return { title: book.title };
}

export default async function ReadBookPage({ params }: PageProps) {
  const book = await getBookById(params.id);
  return (
    <div className="relative flex w-full flex-col gap-32">
      <div className="absolute left-7 hidden h-full w-[0.15rem] rounded-lg bg-mtn-dark-3 lg:block" />

      {book.topics.map((item, idx) => (
        <ReadPageContainer
          item={item}
          key={idx}
        />
      ))}
    </div>
  );
}
