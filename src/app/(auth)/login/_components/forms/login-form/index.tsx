"use client";

import Link from "next/link";

import { Button, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import type { z } from "zod";

import { useLogin } from "../../../_hooks/use-login";
import { loginSchema } from "./schema";

type FormSchema = z.infer<typeof loginSchema>;
const initialValues: FormSchema = { email: "", password: "" };

export const LoginForm = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const { mutate, isPending } = useLogin();
  const form = useForm<FormSchema>({
    mode: "uncontrolled",
    initialValues,
    validate: zodResolver(loginSchema),
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => mutate(values))}
      {...props}
    >
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        autoComplete="email"
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <TextInput
        withAsterisk
        label="Password"
        type="password"
        placeholder="Enter your password"
        autoComplete="current-password"
        key={form.key("password")}
        {...form.getInputProps("password")}
      />
      <Button
        type="submit"
        loading={isPending}
        fullWidth
      >
        Login
      </Button>
      <Button
        component={Link}
        href="/register"
        type="button"
        loading={isPending}
        fullWidth
        variant="default"
      >
        Create an account
      </Button>
    </form>
  );
};
