import type { Metadata } from "next";

import { RegisterForm } from "./_components/forms/register-form";
import { SectionTitle } from "./_components/section-title";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register your account to delve deep into the world of literacy.",
};

export default function RegisterPage() {
  return (
    <div className="container flex w-full max-w-sm flex-grow flex-col justify-center gap-6 py-12">
      <SectionTitle />
      <RegisterForm className="flex flex-col gap-3" />
    </div>
  );
}
