"use client"
import { cancelResalePrice } from "@/server/actions/contract";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export const useCancelResell = (id: number, account: string | null) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["use-cancel-resell", { id, account }],
    mutationFn: async () => {
      if (account) {
        await Promise.all([
            cancelResalePrice(id, account)
          ]);
      }
    },
    onSuccess: () => {
      toast.success("Resale canceled successfully!");
      router.push("/collections") 
    },
    onError: () => {
      toast.error("Failed to cancel resale, please check your wallet!");
    },
  });
};
