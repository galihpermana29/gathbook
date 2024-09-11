"use client";

import { useRouter } from "next/navigation";

import { createBook } from "@/server/actions/books";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { CreateBookPayload } from "@/lib/types/books";

export const useCreateBook = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["create-book"],
    mutationFn: (payload: CreateBookPayload) => createBook(payload),
    onError: ({ message }) => toast.error(message),
    onSuccess: (data) => {
      toast.success("Successfully created a new book!");
      router.push(`/book/${data}`);
    },
  });
};
