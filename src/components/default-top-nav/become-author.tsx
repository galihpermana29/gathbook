"use client";
import { ActionIcon, Button } from "@mantine/core";
import { FaPenNib } from "react-icons/fa";

export const BecomeAuthor = () => {

  return (
    <>
    <Button disabled className="hidden md:block" leftSection={<FaPenNib />} >
        Become an author 
    </Button>

    <ActionIcon size="lg" className="md:hidden">
        <FaPenNib />
    </ActionIcon>
    </>
  );
};
