import { ButtonGroup } from "@mantine/core";

import { navigationBarMenu } from "@/lib/constants/navigation-bar-menu";
import { MotionPaper } from "@/components/motion/motion-paper";

import { BottomNavItem } from "./bottom-nav-item";

export const DefaultBottomNav = () => {
  return (
    <div className="sticky bottom-5 mx-auto my-5 flex w-full justify-center px-8">
      <MotionPaper
        withBorder
        shadow="xl"
        className="flex w-full items-center justify-between lg:hidden lg:justify-center xs:w-fit xs:justify-center xs:gap-8 3xl:mx-auto 3xl:flex 3xl:max-w-fit 3xl:justify-center 3xl:gap-8"
        initial={{ translateY: 40, opacity: 0, scale: 0.75 }}
        whileInView={{ translateY: 0, opacity: 1, scale: 1 }}
      >
        <ButtonGroup className="flex w-full">
          {navigationBarMenu.map((item) => (
            <BottomNavItem
              key={item.route}
              item={item}
            />
          ))}
        </ButtonGroup>
      </MotionPaper>
    </div>
  );
};
