"use client"
import { buyBook } from "@/server/actions/books";
import { buyResaleNFT, getResalePrice } from "@/server/actions/contract";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useBuyFromFriend = (bookId: number, buyFrom: string, account: string | null, onSuccessCallback: () => void, isBought: boolean) => {
  const router = useRouter();  
  return useMutation({
    mutationKey: ["buy-resale-nft", { bookId, buyFrom, account }],
    mutationFn: async () => {
      const resalePrice = await getResalePrice(bookId, buyFrom);
      
      if (!account) {
        throw new Error("Account is not connected");
      }
      await Promise.all([
        buyResaleNFT(bookId, buyFrom, account, resalePrice)
      ]);
      if (!isBought) {
        await Promise.all([
        buyBook(bookId) // PR-INI
      ]);
    }
    },
    onSuccess: () => {
      toast.success("Book has been successfully bought from your friend!");
      onSuccessCallback();
      router.push("/collections") 
    },
    onError: () => {
      toast.error("Failed to buy Book, please check your wallet!");
      onSuccessCallback();
    },
  });
};
