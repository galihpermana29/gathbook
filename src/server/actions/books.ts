"use server";

import { revalidatePath } from "next/cache";
import { cache } from "react";

import { API_ENDPOINT } from "@/lib/constants";
import type {
  Book,
  BuyBookPayload,
  BuyBookResponse,
  CreateBookPayload,
  CreateBookResponse,
  GetAllBooksResponse,
  GetBookByIdResponse,
  UpdateBookPayload,
  UpdateBookResponse,
} from "@/lib/types/books";
import { handleThrowError } from "@/lib/utils/handle-error";
import { getBearerToken } from "@/lib/utils/session";

/** Fetches all books from the API. */
export const getBooks = cache(async () => {
  const token = await getBearerToken();
  const headers = { Authorization: `Bearer ${token}` };
  const res = await fetch(`${API_ENDPOINT}/book`, { method: "GET", headers });

  if (!res.ok) {
    handleThrowError(res);
  }

  const { data }: GetAllBooksResponse = await res.json();
  return data;
});

/** Fetches a single book by its ID from the API. */
export const getBookById = cache(async (id: Book["id"]) => {
  const token = await getBearerToken();
  const headers = { Authorization: `Bearer ${token}` };
  const res = await fetch(`${API_ENDPOINT}/book/${id}`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    handleThrowError(res);
  }

  const { data }: GetBookByIdResponse = await res.json();
  return data;
});

/** Creates a new book in the API. */
export const createBook = cache(async (payload: CreateBookPayload) => {
  const token = await getBearerToken();
  const headers = { Authorization: `Bearer ${token}` };
  const body = { 
    title: payload.title, 
    author: payload.author, 
    synopsis: payload.synopsis, 
    cover: payload.cover, 
    topics: payload.topics, 
    price: payload.price.toString() 
  };
  const res = await fetch(`${API_ENDPOINT}/book`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    handleThrowError(res);
  }

  const { data }: CreateBookResponse = await res.json();
  revalidatePath("/dashboard");
  revalidatePath("/");
  return data;
});

/** Updates an existing book by its ID in the API. */
export const updateBook = cache(
  async (id: Book["id"], payload: UpdateBookPayload) => {
    const token = await getBearerToken();
    const headers = { Authorization: `Bearer ${token}` };
    const body = { ...payload, price: payload.price.toString() };
    const res = await fetch(`${API_ENDPOINT}/book/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      handleThrowError(res);
    }

    const { data }: UpdateBookResponse = await res.json();
    revalidatePath(`/book/${id}`, "page");
    revalidatePath("/dashboard");
    revalidatePath("/");
    return data;
  },
);

export const buyBook = cache(async (id: Book["id"]) => {
  const token = await getBearerToken();
  const headers = { Authorization: `Bearer ${token}` };
  const payload: BuyBookPayload = { book_id: parseInt(id.toString()) };

  const res = await fetch(`${API_ENDPOINT}/buy`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    handleThrowError(res);
  }

  const { data }: BuyBookResponse = await res.json();
  revalidatePath(`/book/${id}`, "page");
  return data;
});
