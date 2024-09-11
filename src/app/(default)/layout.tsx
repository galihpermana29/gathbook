import { Suspense } from "react";

import { DefaultFooter } from "@/components/default-footer";
import { DefaultTopNav } from "@/components/default-top-nav";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="no-scrollbar flex h-dvh flex-col overflow-y-scroll">
      <Suspense>
        <DefaultTopNav />
      </Suspense>
      <main className="flex w-full flex-grow">{children}</main>
      <DefaultFooter />
    </div>
  );
}
