import { DefaultBottomNav } from "./_components/default-bottom-nav";
import { DefaultSidebar } from "./_components/default-sidebar";
import { DefaultTopNav } from "./_components/default-top-nav";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-dvh grid-rows-[1fr_auto] overflow-y-auto lg:grid-cols-[auto_1fr] 3xl:grid-rows-[1fr_auto]">
      <DefaultSidebar />
      <div className="no-scrollbar grid grid-rows-[auto_1fr_auto] lg:h-max lg:grid-rows-[auto_1fr] 3xl:h-auto 3xl:grid-rows-[auto_1fr_auto]">
        <DefaultTopNav />
        <main className="w-full overflow-hidden">{children}</main>
        <DefaultBottomNav />
      </div>
    </div>
  );
}
