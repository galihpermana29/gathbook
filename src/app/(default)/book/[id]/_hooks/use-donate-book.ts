"use client"
import { DonateNFT } from "@/server/actions/contract";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useDonateNFT = (
  bookId: number,
  donateTo: string,
  account: string | null,
  onSuccessCallback: () => void
) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["donate-book", { bookId, donateTo, account }],
    mutationFn: async () => {
      if (!account) {
        throw new Error("Account is not connected");
      }
      await Promise.all([
        DonateNFT(bookId, donateTo, account)
      ]);
    },
    onSuccess: () => {
      toast.success("book successfully donated!");
      onSuccessCallback();
      router.push("/collections")
    },
    onError: () => {
      toast.error("Failed to donate book, please check your wallet!");
      onSuccessCallback();
    },
  });
};
