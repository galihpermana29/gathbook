"use client";

import { useRouter } from "next/navigation";
import { ActionIcon, Avatar, Button, Drawer, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaArrowRight, FaSignOutAlt } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";

import { navigationBarMenu } from "@/lib/constants/navigation-bar-menu";
import { useIsActiveSegment } from "@/hooks/useActiveMenu";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export const SidebarDrawer = () => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ blur: 4 }}
        closeButtonProps={{ size: "md" }}
        classNames={{
          content: "px-5 flex flex-col",
          body: "flex flex-col justify-between flex-grow",
        }}
        title={
          <div className="flex items-center gap-4">
            <Logo size="3rem" />
            <Title order={1}>Gathbook</Title>
          </div>
        }
      >
        <div className="flex flex-col gap-4 py-4">
          {navigationBarMenu.map((menu) => (
            <SidebarDrawerItem
              key={menu.route}
              icon={menu.icon}
              label={menu.label}
              route={menu.route}
              close={close}
            />
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4">
          <Button
            fullWidth
            leftSection={
              <Avatar
                size="sm"
                name="Alexander Mark"
                variant="transparent"
              />
            }
            classNames={{ inner: "flex justify-start" }}
            variant="default"
            size="sm"
          >
            Alex
          </Button>
          <ThemeToggle size="lg" />
          <ActionIcon size="lg">
            <FaSignOutAlt />
          </ActionIcon>
        </div>
      </Drawer>
      <ActionIcon
        onClick={open}
        variant="default"
        size="xl"
      >
        <RiMenu2Line />
      </ActionIcon>
    </>
  );
};

const SidebarDrawerItem = ({
  route,
  label,
  icon,
  close,
}: {
  route: string;
  label: string;
  icon: JSX.Element;
  close: () => void;
}) => {
  const router = useRouter();
  const isActive = useIsActiveSegment(route);
  const handleClick = () => {
    router.push(route);
    close();
  };

  return (
    <Button
      leftSection={icon}
      classNames={{ inner: "justify-start px-2", label: "w-full" }}
      variant={isActive ? "light" : "default"}
      className="group"
      onClick={handleClick}
      fullWidth
      rightSection={
        <FaArrowRight className="ml-auto -translate-x-1 opacity-0 transition-all ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
      }
    >
      {label}
    </Button>
  );
};
