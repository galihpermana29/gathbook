import type { SuccessResult } from "./api";
import type { User } from "./user";

/**
 * Represents the payload needed for a login request.
 */
export type LoginPayload = {
  email: string;
  password: string;
};

/**
 * Represents the data of successful login response
 */
export type LoginResponseData = {
  token: string;
  user: User;
};

/**
 * Represents the response received after a successful login.
 */
export type LoginResponse = SuccessResult<LoginResponseData>;

/**
 * Represents the payload needed to register a new user.
 */
export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

/**
 * Represents the response after a successful register request.
 */
export type RegisterResponseData = {
  id: number;
  name: string;
  email: string;
};

/**
 * Represents the response received after a successful login.
 */
export type RegisterResponse = SuccessResult<RegisterResponseData>;
