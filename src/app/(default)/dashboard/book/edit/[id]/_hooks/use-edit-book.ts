"use client";

import { useRouter } from "next/navigation";

import { updateBook } from "@/server/actions/books";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { Book, UpdateBookPayload } from "@/lib/types/books";

export const useEditBook = (id: Book["id"]) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["edit-book", { id }],
    mutationFn: (payload: UpdateBookPayload) => updateBook(id, payload),
    onError: ({ message }) => toast.error(message),
    onSuccess: () => {
      toast.success("Successfully edited a book!");
      router.push("/dashboard");
    },
  });
};
