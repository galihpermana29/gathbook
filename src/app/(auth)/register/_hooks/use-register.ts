"use client";

import { registerThenLoginAction } from "@/actions/auth/register-then-login-action";
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
