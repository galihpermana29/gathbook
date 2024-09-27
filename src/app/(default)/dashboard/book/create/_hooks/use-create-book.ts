"use client";

import type { CreateBookPayload } from "@/lib/types/books";
import { createBook as createBookOfChain } from "@/server/actions/books";
import { createBook as createBookOnChain, getAccount } from "@/server/actions/contract";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useCreateBook = () => {
  const router = useRouter();
  
  return useMutation({
    mutationKey: ["create-book"],
    mutationFn: async (payload: CreateBookPayload) => {
      const account = await getAccount();
      if (!account) {
        toast.error("Please connect wallet to create book!");
        throw new Error("Account is null");
      }
      try {
        const data = await Promise.all([
          createBookOnChain(
            await createBookOfChain(payload),
            payload.title,
            payload.author,
            payload.address, 
            payload.supply,
            payload.price,
            payload.inor,
            payload.renor,
            account
          )
        ]);
        return data;
      } catch (error) {
        toast.error("Failed to create book. Please try again.");
        throw error; 
      }
    },
    onError: (error) => {
      const errorMessage = error instanceof Error ? error.message : "Failed to create book. Please try again.";
      toast.error(errorMessage);
    },
    onSuccess: () => {
      toast.success("Successfully created a new book!");
      router.push("/dashboard");
    },
  });
};