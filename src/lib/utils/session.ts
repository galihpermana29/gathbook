import { cookies } from "next/headers";

import "server-only";

import type { User } from "../types/user";

const SESSION_COOKIE_NAME = "session.session-data";
const TOKEN_COOKIE_NAME = "session.session-token";

/** Sets the session token in the server's cookies. */
export async function createSession(session: User, token: string) {
  /** Set session cookie's expiry date to 3 day */
  const expiresAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
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

/** Retrieves the session token from the server's cookies. */
export const getServerSession = async () => {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value;
  return session ? (JSON.parse(session) as User) : undefined;
};

/** Retrieves the current session token */
export const getBearerToken = async () => {
  return cookies().get(TOKEN_COOKIE_NAME)?.value;
};

/** Clears the current session and token from the server's cookies. */
export const clearServerSession = async () => {
  cookies().delete(SESSION_COOKIE_NAME);
  cookies().delete(TOKEN_COOKIE_NAME);
};
