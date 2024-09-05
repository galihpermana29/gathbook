import { buyBook } from "@/server/actions/books";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { Book } from "@/lib/types/books";

export const useBuyBook = (id: Book["id"]) => {
  return useMutation({
    mutationKey: ["buy-book", { id }],
    mutationFn: () => buyBook(id),
    onSuccess: () => toast.success("Book has been successfully bought!"),
    onError: ({ message }) => toast.error(message),
  });
};
