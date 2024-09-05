"use client";

import Link from "next/link";

import { Button } from "@mantine/core";
import { FaBook, FaMoneyBill } from "react-icons/fa";

import type { Book } from "@/lib/types/books";

import { useBuyBook } from "../_hooks/use-buy-book";

export const BookActionButton = ({
  id,
  isBought,
}: {
  id: Book["id"];
  isBought: boolean;
}) => {
  const { mutate: buyBook, isPending } = useBuyBook(id);
  switch (isBought) {
    case false:
      return (
        <Button
          loading={isPending}
          onClick={() => buyBook()}
          leftSection={<FaMoneyBill />}
        >
          Buy Book
        </Button>
      );
    case true:
      return (
        <Button
          component={Link}
          href={`/read/${id}`}
          leftSection={<FaBook />}
        >
          Read Book
        </Button>
      );
  }
};
