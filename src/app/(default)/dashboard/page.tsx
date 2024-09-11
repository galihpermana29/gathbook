import { Suspense } from "react";
import Link from "next/link";

import { ActionIcon, Title } from "@mantine/core";
import { FaPlus } from "react-icons/fa";

import { BooksTable } from "./_components/books-table";
import { BooksTablePagination } from "./_components/books-table/books-table-pagination";
import { TableSearch } from "./_components/table-search";
import { paginatedGetBooks } from "./_queries/paginated-get-books";

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
    <div className="container flex w-full flex-col gap-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <Title
          className="w-full"
          order={1}
        >
          Book Dashboard
        </Title>
        <div className="flex w-full items-center justify-end gap-2">
          <Suspense>
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
        <Suspense>
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