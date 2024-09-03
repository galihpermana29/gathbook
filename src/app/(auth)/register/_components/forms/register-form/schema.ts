import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string({ required_error: "Your name is required!" })
      .min(1, { message: "Name has to be longer than just 1 character!" }),
    email: z
      .string({ required_error: "E-mail is required!" })
      .email({ message: "You have to enter a valid email!" }),
    password: z
      .string({ required_error: "Password is required!" })
      .min(4, { message: "Password has to be longer than 4 characters!" }),
    confirmPassword: z.string({
      required_error: "Please confirm your password!",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password doesn't match!",
        path: ["confirmPassword"],
      });
    }
  });
