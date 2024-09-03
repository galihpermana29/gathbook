import { redirect } from "next/navigation";

import { ActionIcon, Button } from "@mantine/core";
import { FaSignOutAlt } from "react-icons/fa";

import { clearServerSession } from "@/lib/utils/session";

export const LogOutButton = () => {
  const logOut = async () => {
    "use server";
    clearServerSession();
    return redirect("/login");
  };

  return (
    <form action={logOut}>
      <Button
        className="hidden md:block"
        leftSection={<FaSignOutAlt />}
        variant="outline"
        type="submit"
      >
        Sign out
      </Button>
      <ActionIcon
        size="lg"
        type="submit"
        className="md:hidden"
        variant="outline"
      >
        <FaSignOutAlt />
      </ActionIcon>
    </form>
  );
};
