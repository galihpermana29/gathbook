import { cookies } from "next/headers";

import "server-only";

import type { User } from "../types/user";

const SESSION_COOKIE_NAME = "session.session-data";
const TOKEN_COOKIE_NAME = "session.session-token";

/**
 * Sets the session token in the server's cookies.
 */
export async function createSession(session: User, token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax" as const,
    path: "/",
  };

  /** Set token and session cookie */
  cookies().set(SESSION_COOKIE_NAME, JSON.stringify(session), cookieOptions);
  cookies().set(TOKEN_COOKIE_NAME, token, cookieOptions);
}

/**
 * Retrieves the session token from the server's cookies.
 */
export const getServerSession = () => {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value;
  return session ? (JSON.parse(session) as User) : undefined;
};

export const getBearerToken = () => {
  return cookies().get(TOKEN_COOKIE_NAME)?.value;
};

/**
 * Clears the current session and token from the server's cookies.
 */
export const clearServerSession = () => {
  cookies().delete(SESSION_COOKIE_NAME);
  cookies().delete(TOKEN_COOKIE_NAME);
};
