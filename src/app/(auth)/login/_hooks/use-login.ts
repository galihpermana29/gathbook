"use client";

import { loginAction } from "@/server/actions/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { LoginPayload } from "@/lib/types/auth";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (payload: LoginPayload) => loginAction(payload),
    onError: ({ message }) => toast.error(message),
  });
};
