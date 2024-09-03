import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "E-mail is required!" })
    .email({ message: "You have to enter a valid email!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(4, { message: "Password has to be longer than 4 characters!" }),
});
