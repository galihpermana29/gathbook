"use client"
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { Book } from "@/lib/types/books";
import { buyBook } from "@/server/actions/books";
import { useRouter } from "next/navigation";

export const useClaimBook = (id: Book["id"]) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["claim-book", { id }],
    mutationFn: async () => {
        await Promise.all([
          buyBook(id)
        ]);
    },
    onSuccess: () => {
        toast.success("Book has been successfully claim!")
        router.push("/collections")
    },
    onError: ({ message }) => toast.error(message),
  });
};