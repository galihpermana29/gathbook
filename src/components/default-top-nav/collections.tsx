"use client";
import { ActionIcon, Button } from "@mantine/core";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaBook } from "react-icons/fa";

export const Collections = () => {
  const segment = useSelectedLayoutSegment();
  const isActive = segment === "collections";
  return (
    <>
    <ActionIcon component={Link} href="/collections" size="lg" variant={isActive ? "filled" : "light"} className="hidden md:block" >
      <FaBook />
    </ActionIcon>

    <ActionIcon component={Link} href="/collections" variant={isActive ? "filled" : "light"} size="lg" className="md:hidden">
      <FaBook />
    </ActionIcon>
    </>
  );
};
