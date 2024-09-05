import { z } from "zod";

import { SuccessResultSchema } from "./api";

/** Represents a user in the system. */
export type User = z.infer<typeof UserSchema>;
export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

/** Represents the response from server after getting a user with certain `id` */
export type GetUserByIdResponse = z.infer<typeof GetUserByIdResponseSchema>;
export const GetUserByIdResponseSchema = SuccessResultSchema(UserSchema);
