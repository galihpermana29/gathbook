import type { Book } from "@/lib/types/books";
import { getServerSession } from "@/lib/utils/session";

export const isBookBought = async (buyers: Book["buyers"]) => {
  const session = await getServerSession();
  if (!session) throw new Error("No session detected. Please relogin.");
  return buyers ? buyers.includes(session.id) : false;
};
