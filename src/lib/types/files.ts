import { z } from "zod";

import { SuccessResultSchema } from "./api";

export type UploadFileResponse = z.infer<typeof UploadFileResponseSchema>;
export const UploadFileResponseSchema = SuccessResultSchema(
  z.array(z.string()),
);
