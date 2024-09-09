import { RowsPerPage } from "../rows-per-page";
import { NextPageButton } from "./next-page-button";
import { PreviousPageButton } from "./previous-page-button";

export const PAGE_PARAM_NAME = "page";

export const TablePagination = ({
  page,
  totalPage,
}: {
  page: number;
  totalPage: number;
}) => {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <RowsPerPage className="hidden md:flex" />
      <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-center">
        <PreviousPageButton />
        <span>
          Page {page} / {totalPage}
        </span>
        <NextPageButton totalPage={totalPage} />
      </div>
    </div>
  );
};
