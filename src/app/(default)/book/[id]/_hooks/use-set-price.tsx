import { setResalePrice } from "@/server/actions/contract";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSetPrice = (bookId: number, account: string | null) => {
  return useMutation<void, Error, string>({
    mutationKey: ["set-resell-price", { bookId, account }],
    mutationFn: async (resellPrice: string) => {
      if (!account) {
        throw new Error("Account is null");
      }
      await Promise.all([
        setResalePrice(bookId, Number(resellPrice), account)
      ]);
    },
    onSuccess: () => {
      toast.success("Resale price set successfully!");
    },
    onError: () => {
      toast.error(`Failed to set price, please check your wallet!`);
    },
  });

};
