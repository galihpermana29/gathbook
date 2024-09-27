import { DonateNFT } from "@/server/actions/contract"; // Import fungsi dari contract.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDonateNFT = (
  bookId: number,
  donateTo: string,
  account: string | null,
  onSuccessCallback: () => void
) => {
  return useMutation({
    mutationKey: ["donate-book", { bookId, donateTo, account }],
    mutationFn: async () => {
      if (!account) {
        throw new Error("Account is not connected");
      }
      await DonateNFT(bookId, donateTo);
    },
    onSuccess: () => {
      toast.success("book successfully donated!");
      onSuccessCallback();
    },
    onError: () => {
      toast.error("Failed to donate book, please check your wallet!");
      onSuccessCallback();
    },
  });
};
