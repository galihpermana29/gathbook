"use client";

import Link from "next/link";

import { Button, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import type { z } from "zod";

import { useRegister } from "../../../_hooks/use-register";
import { registerSchema } from "./schema";

type FormSchema = z.infer<typeof registerSchema>;
const initialValues: FormSchema = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = (props: React.HTMLAttributes<HTMLFormElement>) => {
  const { mutate, isPending } = useRegister();
  const form = useForm<FormSchema>({
    mode: "uncontrolled",
    initialValues,
    validate: zodResolver(registerSchema),
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => mutate(values))}
      {...props}
    >
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Enter your name"
        autoComplete="name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
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
      <TextInput
        withAsterisk
        label="Password Confirmation"
        type="password"
        placeholder="Confirm your password"
        description="Please confirm your account's password"
        key={form.key("confirmPassword")}
        {...form.getInputProps("confirmPassword")}
      />
      <Button
        type="submit"
        loading={isPending}
        fullWidth
      >
        Register
      </Button>
      <Button
        component={Link}
        href="/login"
        type="button"
        disabled={isPending}
        fullWidth
        variant="default"
      >
        Already have an account?
      </Button>
    </form>
  );
};
