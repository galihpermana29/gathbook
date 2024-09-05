import { getBookById } from "@/server/actions/books";

type PageProps = {
  params: { id: number };
};

export async function generateMetadata({ params }: PageProps) {
  const book = await getBookById(params.id);
  return { title: book.title };
}

export default async function BookDetailPage({ params }: PageProps) {
  const book = await getBookById(params.id);
  return "";
}
