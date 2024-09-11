import { redirect } from "next/navigation";

import { ActionIcon } from "@mantine/core";
import { FaSignOutAlt } from "react-icons/fa";

import { clearServerSession } from "@/lib/utils/session";

const logOut = async () => {
  "use server";
  await clearServerSession();
  return redirect("/login");
};

export const LogOutButton = () => {
  return (
    <form action={logOut}>
      <ActionIcon
        size="lg"
        type="submit"
        variant="light"
      >
        <FaSignOutAlt />
      </ActionIcon>
    </form>
  );
};
