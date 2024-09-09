import { booksTableColumn } from "@/lib/constants";
import { CustomTable } from "@/components/custom-table";

import { BooksTableBody } from "./books-table-body";

export const BooksTable = ({
  limit,
  page,
  search,
}: {
  limit: string | undefined;
  page: string | undefined;
  search: string | undefined;
}) => {
  return (
    <CustomTable
      columns={booksTableColumn}
      body={
        <BooksTableBody
          limit={limit}
          page={page}
          search={search}
        />
      }
    />
  );
};
