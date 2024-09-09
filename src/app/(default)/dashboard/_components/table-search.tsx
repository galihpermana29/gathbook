"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@mantine/core";
import { useDebouncedCallback } from "@mantine/hooks";
import { FaSearch } from "react-icons/fa";

import { PAGE_PARAM_NAME } from "@/components/table-pagination";

const SEARCH_PARAM_NAME = "search";

export const TableSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const onChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    value
      ? params.set(SEARCH_PARAM_NAME, value)
      : params.delete(SEARCH_PARAM_NAME);
    params.delete(PAGE_PARAM_NAME);
    return router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      onChange={(event) => onChange(event.target.value)}
      leftSection={
        <FaSearch
          size="1rem"
          className="fill-mtn-primary-filled"
        />
      }
      className="w-full md:max-w-96"
      placeholder="Search books..."
    />
  );
};
