"use client";

import Link from "next/link";

import { Button } from "@mantine/core";

import type { navigationBarMenu } from "@/lib/constants/navigation-bar-menu";
import { useIsActiveSegment } from "@/hooks/useActiveMenu";

type Item = (typeof navigationBarMenu)[number];

export const BottomNavItem = ({ item }: { item: Item }) => {
  const isActive = useIsActiveSegment(item.route);
  return (
    <Button
      fullWidth
      component={Link}
      href={item.route}
      variant={isActive ? "light" : "subtle"}
      size="md"
    >
      {item.icon}
    </Button>
  );
};
