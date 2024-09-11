"use client";

import { getBookById } from "@/server/actions/books";
import { useQuery } from "@tanstack/react-query";

import type { Book } from "@/lib/types/books";

export const useGetBookById = (id: Book["id"]) => {
  return useQuery({
    queryKey: ["book", { id }],
    queryFn: () => getBookById(id),
  });
};
