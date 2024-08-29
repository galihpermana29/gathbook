import type { Metadata } from "next";
import { Button, Title } from "@mantine/core";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex size-full flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center">
        <Title order={1}>Hello, world!</Title>
        <p>This is a paragraph</p>
      </div>
      <Button>Button</Button>
    </main>
  );
}
