import { z } from "zod";

import { SuccessResultSchema } from "./api";
import { UserSchema } from "./user";

/** Represents the payload needed for a login request. */
export type LoginPayload = z.infer<typeof LoginPayloadSchema>;
export const LoginPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

/** Represents the data of a successful login response. */
export type LoginResponseData = z.infer<typeof LoginResponseDataSchema>;
export const LoginResponseDataSchema = z.object({
  token: z.string(),
  user: UserSchema,
});

/** Represents the response received after a successful login. */
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export const LoginResponseSchema = SuccessResultSchema(LoginResponseDataSchema);

/** Represents the payload needed to register a new user. */
export type RegisterPayload = z.infer<typeof RegisterPayloadSchema>;
export const RegisterPayloadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

/** Represents the response after a successful register request. */
export type RegisterResponseData = z.infer<typeof RegisterResponseDataSchema>;
export const RegisterResponseDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

/** Represents the response received after a successful registration. */
export type RegisterResponse = z.infer<typeof RegisterResponseSchema>;
export const RegisterResponseSchema = SuccessResultSchema(
  RegisterResponseDataSchema,
);
