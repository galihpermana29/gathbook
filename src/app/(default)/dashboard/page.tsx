import { Suspense } from "react";
import Link from "next/link";

import { ActionIcon } from "@mantine/core";
import { FaPlus } from "react-icons/fa";

import { StyledTitle } from "@/components/styled-title";

import { BooksTable } from "./_components/books-table";
import { BooksTablePagination } from "./_components/books-table/books-table-pagination";
import { TableSearch } from "./_components/table-search";
import { paginatedGetBooks } from "./_queries/paginated-get-books";
import { LoadingTablePagination, LoadingTableSearch } from "./loading";

type PageSearchParams = {
  limit: string | undefined;
  page: string | undefined;
  search: string | undefined;
};

export default function DashboardPage({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const { limit, page, search } = searchParams;
  void paginatedGetBooks({
    limit: limit ? parseInt(limit) : undefined,
    search,
  });

  return (
    <div className="container flex w-full flex-col gap-4 py-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <StyledTitle
          className="w-full text-3xl lg:text-4xl"
          order={1}
        >
          Book Dashboard
        </StyledTitle>
        <div className="flex w-full items-center justify-end gap-2">
          <Suspense fallback={<LoadingTableSearch />}>
            <TableSearch />
          </Suspense>
          <ActionIcon
            component={Link}
            href="/dashboard/book/create"
            size="lg"
          >
            <FaPlus size="1rem" />
          </ActionIcon>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <BooksTable
          search={search}
          limit={limit}
          page={page}
        />
        <Suspense fallback={<LoadingTablePagination />}>
          <BooksTablePagination
            limit={limit}
            search={search}
            page={page}
          />
        </Suspense>
      </div>
    </div>
  );
}
