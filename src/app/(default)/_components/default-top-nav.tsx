import Link from "next/link";
import { ActionIcon, Avatar, Button, Input } from "@mantine/core";
import { IoSearch, IoWallet } from "react-icons/io5";

import { Logo } from "@/components/logo";

export const DefaultTopNav = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between gap-4 px-8 py-4 backdrop-blur-sm">
      <div className="flex w-full items-center gap-4 lg:contents 3xl:flex">
        <Link
          className="lg:hidden 3xl:block"
          href="/"
        >
          <Logo
            className="shrink-0"
            size="2rem"
          />
        </Link>
        <Input
          leftSection={<IoSearch />}
          className="w-full border-0 lg:max-w-96"
          placeholder="Search book name, author, edition..."
        />
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="group flex items-center gap-3 hover:cursor-pointer">
          <Avatar
            name="Alexander Mark"
            color="violet"
          />
          <div className="hidden flex-col text-xs md:flex">
            <span className="whitespace-nowrap text-sm font-semibold group-hover:text-mtn-primary-filled">
              Alexander Mark
            </span>
            Lorem Ipsum
          </div>
        </div>
        <ActionIcon
          size="lg"
          className="md:hidden"
        >
          <IoWallet />
        </ActionIcon>
        <Button
          className="hidden md:block"
          leftSection={<IoWallet />}
        >
          Connect
        </Button>
      </div>
    </header>
  );
};
