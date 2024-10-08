"use client"

import { buyNFT } from "@/server/actions/contract";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { Book } from "@/lib/types/books";
import { buyBook } from "@/server/actions/books";
import { useRouter } from "next/navigation";

export const useBuyBook = (id: Book["id"], account: string, value: Book["price"], isBought: boolean) => {
  const router = useRouter(); 
  return useMutation({
    mutationKey: ["buy-book", { id }],
    mutationFn: async () => {
      await Promise.all([
        buyNFT(id, account, value),
      ]);
      if (!isBought){
        await Promise.all([
          buyBook(id)
        ]);
      }
    },
    onSuccess: () => {
      toast.success("Book has been successfully bought!")
      router.push("/collections") 
    },
    onError: ({ message }) => toast.error(message),
  });
};