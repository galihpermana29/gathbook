"use server";

import { cache } from "react";
import { redirect } from "next/navigation";

import { apiEndpoint } from "@/lib/constants";
import type { ErrorResult } from "@/lib/types/api";
import type { LoginPayload, LoginResponse } from "@/lib/types/auth";
import { isAdmin } from "@/lib/utils/is-admin";
import { createSession } from "@/lib/utils/session";

export const loginAction = cache(async (payload: LoginPayload) => {
  const res = await fetch(`${apiEndpoint}/auth/login`, {
    body: JSON.stringify(payload),
    method: "POST",
  });

  if (!res.ok) {
    const data: ErrorResult = await res.json();
    throw new Error(data.error);
  }

  const {
    data: { user, token },
  }: LoginResponse = await res.json();

  /** Set session and token cookie */
  createSession(user, token);
  const userIsAdmin = isAdmin(user);

  return userIsAdmin ? redirect("/dashboard") : redirect("/");
});
