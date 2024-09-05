import { DefaultTopNav } from "./_components/default-top-nav";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="no-scrollbar flex min-h-dvh flex-col">
      <DefaultTopNav />
      <main className="flex w-full flex-grow overflow-hidden">{children}</main>
    </div>
  );
}
