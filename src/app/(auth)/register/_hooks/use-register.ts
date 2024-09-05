"use client";

import { registerThenLoginAction } from "@/server/actions/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { RegisterPayload } from "@/lib/types/auth";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (payload: RegisterPayload) => registerThenLoginAction(payload),
    onError: ({ message }) => toast.error(message),
  });
};
