import { Suspense } from "react";
import Link from "next/link";

import { getServerSession } from "@/lib/utils/session";
import { Logo } from "@/components/logo";

import { ConnectWalletButton } from "./connect-wallet-button";
import { LogOutButton } from "./log-out-button";

export const DefaultTopNav = () => {
  return (
    <header className="container sticky top-0 z-10 flex w-full items-center justify-between gap-4 py-4 backdrop-blur-sm">
      <Link href="/">
        <Logo
          className="shrink-0"
          size="3rem"
        />
      </Link>
      <div className="flex items-center gap-4 lg:gap-6">
        <Suspense>
          <ProfileIndicator />
        </Suspense>
        <div className="flex items-center gap-2">
          <ConnectWalletButton />
          <LogOutButton />
        </div>
      </div>
    </header>
  );
};

const ProfileIndicator = async () => {
  const session = await getServerSession();
  if (!session) return null;

  return (
    <p className="line-clamp-1 max-w-48 text-sm font-semibold hover:text-mtn-primary-filled">
      {session.name}
    </p>
  );
};
