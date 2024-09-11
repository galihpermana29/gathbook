"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { ActionIcon } from "@mantine/core";
import { MdSpaceDashboard } from "react-icons/md";

import type { User } from "@/lib/types/user";
import { isAdmin } from "@/lib/utils/is-admin";

export const DashboardButton = ({ session }: { session: User | undefined }) => {
  const segment = useSelectedLayoutSegment();
  if (!session) return null;

  const userIsAdmin = isAdmin(session);
  if (!userIsAdmin) return null;

  const isActive = segment === "dashboard";

  return (
    <ActionIcon
      component={Link}
      href="/dashboard"
      size="lg"
      variant={isActive ? "filled" : "light"}
    >
      <MdSpaceDashboard size="1rem" />
    </ActionIcon>
  );
};
