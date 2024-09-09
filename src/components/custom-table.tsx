import { Suspense } from "react";

import {
  Paper,
  Skeleton,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";

type TableProps = {
  body: JSX.Element;
  minWidth?: number;
  columns: string[];
};

type TableLoadingProps = {
  columns: string[];
  rowCount?: number;
};

export const CustomTable = ({ columns, body, minWidth = 640 }: TableProps) => {
  return (
    <TableScrollContainer minWidth={minWidth}>
      <Paper
        withBorder
        className="overflow-hidden px-4 py-2"
      >
        <Table>
          <TableThead>
            <TableTr>
              {columns.map((column, index) => (
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
            <Suspense fallback={<CustomTableLoading columns={columns} />}>
              {body}
            </Suspense>
          </TableTbody>
        </Table>
      </Paper>
    </TableScrollContainer>
  );
};

export const CustomTableLoading = ({
  columns,
  rowCount = 10,
}: TableLoadingProps) => {
  return Array.from({ length: rowCount }).map((row) => (
    <TableTr key={`row-${row}`}>
      {columns.map((column) => (
        <TableTd key={`column-${column}`}>
          <Skeleton className="h-6 w-full" />
        </TableTd>
      ))}
    </TableTr>
  ));
};
