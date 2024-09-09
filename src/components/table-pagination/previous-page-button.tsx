"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@mantine/core";
import { FaChevronLeft } from "react-icons/fa";

import { useQueryParam } from "@/lib/hooks/use-query-param";

import { PAGE_PARAM_NAME } from ".";

export const PreviousPageButton = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get(PAGE_PARAM_NAME) ?? "1";
  const isDisabled = page === "1";

  const { updateQueryParam } = useQueryParam();
  const onClick = () => {
    const newPage = parseInt(page) - 1;
    updateQueryParam(PAGE_PARAM_NAME, newPage.toString());
  };

  return (
    <Button
      size="xs"
      variant="light"
      leftSection={<FaChevronLeft size="0.75rem" />}
      onClick={onClick}
      disabled={isDisabled}
    >
      Previous
    </Button>
  );
};
