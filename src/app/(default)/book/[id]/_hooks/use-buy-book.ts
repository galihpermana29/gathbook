import { buyNFT } from "@/server/actions/contract";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { Book } from "@/lib/types/books";
import { buyBook } from "@/server/actions/books";

export const useBuyBook = (id: Book["id"], account: string, value: Book["price"]) => {
  return useMutation({
    mutationKey: ["buy-book", { id }],
    mutationFn: async () => {
      await Promise.all([
        buyNFT(id, account, value),
        buyBook(id)
      ]);
    },
    onSuccess: () => toast.success("Book has been successfully bought!"),
    onError: ({ message }) => toast.error(message),
  });
};