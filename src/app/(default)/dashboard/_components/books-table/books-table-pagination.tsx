import { TablePagination } from "@/components/table-pagination";

import { paginatedGetBooks } from "../../_queries/paginated-get-books";

export const BooksTablePagination = async ({
  limit,
  search,
  page,
}: {
  limit: string | undefined;
  search: string | undefined;
  page: string | undefined;
}) => {
  const rowLimit = limit ? parseInt(limit) : undefined;
  const tablePage = page ? parseInt(page) : 1;
  const { totalPage } = await paginatedGetBooks({ limit: rowLimit, search });

  return (
    <TablePagination
      page={tablePage}
      totalPage={totalPage}
    />
  );
};
