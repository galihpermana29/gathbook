import Link from "next/link";

import {
  ActionIcon,
  Input,
  Paper,
  Select,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTh,
  TableThead,
  TableTr,
  Title,
} from "@mantine/core";
import { FaPlus, FaSearch } from "react-icons/fa";

import { booksTableColumn } from "@/lib/constants";
import { CustomTableLoading } from "@/components/custom-table";
import { NextPageButton } from "@/components/table-pagination/next-page-button";
import { PreviousPageButton } from "@/components/table-pagination/previous-page-button";

export default function LoadingDashboard() {
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
          <LoadingTableSearch />
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
        <LoadingTable />
        <LoadingTablePagination />
      </div>
    </div>
  );
}

export const LoadingTableSearch = () => {
  return (
    <Input
      disabled
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

export const LoadingTable = () => {
  return (
    <TableScrollContainer minWidth={720}>
      <Paper
        withBorder
        className="overflow-hidden px-4 py-2"
      >
        <Table>
          <TableThead>
            <TableTr>
              {booksTableColumn.map((column, index) => (
                <TableTh
                  className="text-mtn-primary-light-color"
                  key={`${index}${column}`}
                >
                  {column}
                </TableTh>
              ))}
            </TableTr>
          </TableThead>
          <TableTbody>
            <CustomTableLoading columns={booksTableColumn} />
          </TableTbody>
        </Table>
      </Paper>
    </TableScrollContainer>
  );
};

export const LoadingTablePagination = () => {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <div className="hidden items-center gap-2 md:flex">
        Showing
        <Select
          size="xs"
          className="max-w-44"
          allowDeselect={false}
          disabled
          placeholder="10 rows per page"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-center">
        <PreviousPageButton />
        <span>Page 1 / 1</span>
        <NextPageButton totalPage={1} />
      </div>
    </div>
  );
};
