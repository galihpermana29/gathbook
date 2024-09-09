"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@mantine/core";
import { FaChevronRight } from "react-icons/fa";

import { useQueryParam } from "@/lib/hooks/use-query-param";

import { PAGE_PARAM_NAME } from ".";

export const NextPageButton = ({ totalPage }: { totalPage: number }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get(PAGE_PARAM_NAME) ?? "1";
  const isDisabled = page === totalPage.toString();

  const { updateQueryParam } = useQueryParam();
  const onClick = () => {
    const newPage = parseInt(page) + 1;
    updateQueryParam(PAGE_PARAM_NAME, newPage.toString());
  };

  return (
    <Button
      size="xs"
      variant="light"
      rightSection={<FaChevronRight size="0.75rem" />}
      onClick={onClick}
      disabled={isDisabled}
    >
      Next
    </Button>
  );
};
