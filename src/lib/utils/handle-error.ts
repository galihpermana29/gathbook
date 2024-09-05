import type { ErrorResult } from "../types/api";

/** Handles an error response by parsing the JSON and throwing an error with the message. */
export const handleThrowError = async (response: Response) => {
  const { error }: ErrorResult = await response.json();
  throw new Error(error);
};
