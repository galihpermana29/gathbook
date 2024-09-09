/**
 * Splits data into an array of paginated data, with a specified number of rows per page.
 * @template T
 * @param {Object} params - The parameters for pagination.
 * @param {T[]} params.data - The data to be paginated.
 * @param {number} params.limit - The number of rows per page.
 *
 * @example
 * const data = [
 *   { name: "A" },
 *   { name: "B" },
 *   { name: "C" }
 * ];
 *
 * const paginated = paginateData({ data, limit: 2 });
 * console.log(paginated); // [[{ name: "A" }, { name: "B" }], [{ name: "C" }]]
 */
export const paginateData = <T>({
  data,
  limit,
}: {
  data: T[];
  limit: number;
}) => {
  const paginatedData: T[][] = [];
  if (!data) return paginatedData;

  for (let i = 0; i < data.length; i += limit) {
    paginatedData.push(data.slice(i, i + limit));
  }

  return paginatedData;
};
