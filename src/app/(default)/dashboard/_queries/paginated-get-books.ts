import { cache } from "react";

import { getBooks } from "@/server/actions/books";

import { paginateData } from "@/lib/utils/paginate-data";

import { filterSearchBook } from "../_utils/filter-search-book";

export const paginatedGetBooks = cache(
  async ({
    limit,
    search,
  }: {
    limit: number | undefined;
    search: string | undefined;
  }) => {
    const result = await getBooks();
    const data = search ? filterSearchBook(result, search) : result;

    if (!limit || isNaN(limit)) return { data: [data], totalPage: 1 };

    const paginated = paginateData({ data, limit });
    return {
      data: paginated,
      totalPage: paginated.length === 0 ? 1 : paginated.length,
    };
  },
);
