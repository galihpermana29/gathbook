"use server";

import { cache } from "react";

import { API_ENDPOINT } from "@/lib/constants";
import type { UploadFileResponse } from "@/lib/types/files";
import { handleThrowError } from "@/lib/utils/handle-error";
import { getBearerToken } from "@/lib/utils/session";

export const uploadFile = cache(async (formData: FormData) => {
  const token = await getBearerToken();
  const headers = { Authorization: `Bearer ${token}` };
  const res = await fetch(`${API_ENDPOINT}/images`, {
    method: "POST",
    body: formData,
    headers,
  });

  if (!res.ok) {
    handleThrowError(res);
  }

  const { data }: UploadFileResponse = await res.json();
  return data;
});
