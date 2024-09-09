"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Select } from "@mantine/core";
import { useDebouncedCallback } from "@mantine/hooks";

import { cn } from "@/lib/utils/cn";

import { PAGE_PARAM_NAME } from "./table-pagination";

const ROWS_PER_PAGE_PARAM_NAME = "limit";

const rowsPerPageOptions = [
  { label: "5 rows per page", value: "5" },
  { label: "10 rows per page", value: "10" },
  { label: "15 rows per page", value: "15" },
  { label: "Every data at once", value: "none" },
];

export const RowsPerPage = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const searchParams = useSearchParams();
  const limit = searchParams.get(ROWS_PER_PAGE_PARAM_NAME) ?? "10";
  const router = useRouter();
  const pathname = usePathname();

  const onChange = useDebouncedCallback((value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    value
      ? params.set(ROWS_PER_PAGE_PARAM_NAME, value)
      : params.delete(ROWS_PER_PAGE_PARAM_NAME);
    params.delete(PAGE_PARAM_NAME);
    return router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      Showing
      <Select
        size="xs"
        defaultValue={limit}
        className="max-w-44"
        allowDeselect={false}
        data={rowsPerPageOptions}
        onChange={onChange}
      />
    </div>
  );
};
