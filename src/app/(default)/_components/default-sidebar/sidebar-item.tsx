"use client";

import Link from "next/link";

import { ActionIcon } from "@mantine/core";

import type { navigationBarMenu } from "@/lib/constants/navigation-bar-menu";
import { useIsActiveSegment } from "@/hooks/useActiveMenu";

type Item = (typeof navigationBarMenu)[number];

export const SidebarItem = ({ item }: { item: Item }) => {
  const isActive = useIsActiveSegment(item.route);
  return (
    <ActionIcon
      component={Link}
      href={item.route}
      variant={isActive ? "light" : "subtle"}
      size="xl"
    >
      {item.icon}
    </ActionIcon>
  );
};
