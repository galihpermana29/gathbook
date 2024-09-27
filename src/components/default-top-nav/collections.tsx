"use client";
import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaBook } from "react-icons/fa";

export const Collections = () => {
  const segment = useSelectedLayoutSegment();
  const isActive = segment === "collections";
  return (
    <ActionIcon
        component={Link}
        href="/collections"
        size="lg"
        variant={isActive ? "filled" : "light"}
    >
        <FaBook />
    </ActionIcon>
  );
};
