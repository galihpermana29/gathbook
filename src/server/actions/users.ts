"use server";

import { cache } from "react";

import { API_ENDPOINT } from "@/lib/constants";
import type { GetUserByIdResponse, User } from "@/lib/types/user";
import { handleThrowError } from "@/lib/utils/handle-error";
import { getBearerToken } from "@/lib/utils/session";

/** Get specific user data with speficied `id` */
export const getUserById = cache(async (id: User["id"]) => {
  const token = await getBearerToken();
  const headers = { Authorization: `Bearer ${token}` };
  const res = await fetch(`${API_ENDPOINT}/user/${id}`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    handleThrowError(res);
  }

  const { data }: GetUserByIdResponse = await res.json();
  return data;
});
