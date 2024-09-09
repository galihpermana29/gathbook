"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParam = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      value ? params.set(name, value) : params.delete(name);
      return params.toString();
    },
    [searchParams],
  );

  const updateQueryParam = useCallback(
    (name: string, value: string) => {
      const param = createQueryParam(name, value);
      return router.replace(`${pathname}?${param}`);
    },
    [createQueryParam, pathname, router],
  );

  return { createQueryParam, updateQueryParam };
};
