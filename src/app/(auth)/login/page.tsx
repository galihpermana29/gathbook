import { Button, Input, InputWrapper } from "@mantine/core";

import { BackHomeHeader } from "../_components/back-home-header";
import { SectionTitle } from "./_components/section-title";

export default function LoginPage() {
  return (
    <div className="flex size-full max-w-lg flex-col items-center justify-center space-y-3 p-16">
      <BackHomeHeader />
      <div className="flex w-full flex-grow flex-col justify-center gap-6 py-12">
        <SectionTitle />
        <div className="flex flex-col gap-3">
          <div className="relative flex w-full flex-col gap-2">
            <InputWrapper label="Username">
              <Input placeholder="Enter your username" />
            </InputWrapper>
            <InputWrapper label="Password">
              <Input
                placeholder="Enter your password"
                type="password"
              />
            </InputWrapper>
          </div>
          <Button fullWidth>Login</Button>
        </div>
      </div>
    </div>
  );
}
