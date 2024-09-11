import { Suspense } from "react";
import Link from "next/link";

import type { User } from "@/lib/types/user";
import { getServerSession } from "@/lib/utils/session";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

import { ConnectWalletButton } from "./connect-wallet-button";
import { DashboardButton } from "./dashboard-button";
import { LogOutButton } from "./log-out-button";

export const DefaultTopNav = async () => {
  const session = await getServerSession();
  return (
    <header className="container sticky top-0 z-50 flex w-full items-center justify-between gap-4 py-4 backdrop-blur-sm">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        <Suspense>
          <ProfileIndicator session={session} />
        </Suspense>
        <div className="flex items-center gap-2">
          <ConnectWalletButton />
          <Suspense>
            <DashboardButton session={session} />
          </Suspense>
          <LogOutButton />
          <ThemeToggle
            variant="light"
            size="lg"
          />
        </div>
      </div>
    </header>
  );
};

const ProfileIndicator = async ({ session }: { session: User | undefined }) => {
  if (!session) return null;
  return (
    <p className="line-clamp-1 hidden max-w-48 text-ellipsis text-sm font-semibold hover:text-mtn-primary-filled xs:inline">
      {session.name}
    </p>
  );
};
