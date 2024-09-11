import Link from "next/link";

import { ActionIcon, NumberFormatter, TableTd, TableTr } from "@mantine/core";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

import { paginatedGetBooks } from "../../_queries/paginated-get-books";
import { filterSearchBook } from "../../_utils/filter-search-book";

export const BooksTableBody = async ({
  limit,
  page,
  search,
}: {
  limit: string | undefined;
  page: string | undefined;
  search: string | undefined;
}) => {
  const rowLimit = limit ? parseInt(limit) : 10;
  const tablePage = page ? parseInt(page) : 1;
  const { data: booksData } = await paginatedGetBooks({
    limit: rowLimit,
    search,
  });

  const data = booksData[tablePage - 1];
  const books = search ? filterSearchBook(data, search) : data;

  if (!books || books.length === 0) {
    return <BooksTableEmpty />;
  }

  return books.map((book) => (
    <TableTr key={book.id}>
      <TableTd>{book.title}</TableTd>
      <TableTd>{book.author}</TableTd>
      <TableTd>
        <NumberFormatter
          value={book.price}
          decimalScale={2}
          thousandSeparator="."
          decimalSeparator=","
        />
      </TableTd>
      <TableTd className="flex items-center gap-2">
        <ActionIcon
          component={Link}
          href={`/dashboard/book/edit/${book.id}`}
          variant="subtle"
        >
          <FaPencil size="0.8rem" />
        </ActionIcon>
        <ActionIcon variant="subtle">
          <FaTrash size="0.8rem" />
        </ActionIcon>
      </TableTd>
    </TableTr>
  ));
};

const BooksTableEmpty = () => {
  return (
    <TableTr>
      <TableTd
        className="py-6 text-center"
        colSpan={4}
      >
        There are no data available.
      </TableTd>
    </TableTr>
  );
};
