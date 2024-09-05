"use server";

import { cache } from "react";
import { redirect } from "next/navigation";

import { API_ENDPOINT } from "@/lib/constants";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "@/lib/types/auth";
import { handleThrowError } from "@/lib/utils/handle-error";
import { isAdmin } from "@/lib/utils/is-admin";
import { createSession } from "@/lib/utils/session";

/**
 * Logs in a user by sending a POST request to the authentication API.
 * If successful, stores the session and token in cookies and redirects
 * the user based on their role.
 */
export const loginAction = cache(async (payload: LoginPayload) => {
  const res = await fetch(`${API_ENDPOINT}/auth/login`, {
    body: JSON.stringify(payload),
    method: "POST",
  });

  if (!res.ok) {
    handleThrowError(res);
  }

  const {
    data: { user, token },
  }: LoginResponse = await res.json();

  /** Set session and token cookie */
  createSession(user, token);
  const userIsAdmin = isAdmin(user);

  return userIsAdmin ? redirect("/dashboard") : redirect("/");
});

/**
 * Registers a new user by sending a POST request to the registration API.
 * Upon successful registration, immediately logs the user in.
 */
export const registerThenLoginAction = cache(
  async (payload: RegisterPayload) => {
    const res = await fetch(`${API_ENDPOINT}/auth/signup`, {
      body: JSON.stringify(payload),
      method: "POST",
    });

    if (!res.ok) {
      handleThrowError(res);
    }

    /** Whenever register succeeds, immediately login the user */
    const { email, password } = payload;
    await loginAction({ email, password });

    const { data }: RegisterResponse = await res.json();
    return data;
  },
);
