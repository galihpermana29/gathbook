"use server";

import { cache } from "react";

import { apiEndpoint } from "@/lib/constants";
import type { ErrorResult } from "@/lib/types/api";
import type { RegisterPayload, RegisterResponse } from "@/lib/types/auth";

import { loginAction } from "./login-action";

export const registerThenLoginAction = cache(
  async (payload: RegisterPayload) => {
    const res = await fetch(`${apiEndpoint}/auth/signup`, {
      body: JSON.stringify(payload),
      method: "POST",
    });

    if (!res.ok) {
      const data: ErrorResult = await res.json();
      throw new Error(data.error);
    }

    /** Whenever register succeeds, immediately login the user */
    const { email, password } = payload;
    await loginAction({ email, password });

    const { data }: RegisterResponse = await res.json();
    return data;
  },
);
