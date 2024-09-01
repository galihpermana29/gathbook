import Link from "next/link";

import { navigationBarMenu } from "@/lib/constants/navigation-bar-menu";
import { Logo } from "@/components/logo";
import { MotionPaper } from "@/components/motion/motion-paper";

import { SidebarDrawer } from "./sidebar-drawer";
import { SidebarItem } from "./sidebar-item";

export const DefaultSidebar = () => {
  return (
    <MotionPaper
      shadow="xl"
      withBorder
      layout
      className="sticky top-4 my-4 ml-8 hidden h-[calc(100dvh-2rem)] items-center justify-between gap-2 py-4 lg:flex lg:flex-col lg:px-3 lg:py-4 3xl:hidden"
      whileInView={{ translateX: 0, opacity: 1 }}
      initial={{ translateX: -60, opacity: 0 }}
    >
      <Link href="/">
        <Logo size="3rem" />
      </Link>
      <div className="flex w-full gap-4 lg:flex-col">
        {navigationBarMenu.map((item) => (
          <SidebarItem
            key={item.route}
            item={item}
          />
        ))}
      </div>
      <SidebarDrawer />
    </MotionPaper>
  );
};
