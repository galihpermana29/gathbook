"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
  type ActionIconProps,
} from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = (props: ActionIconProps) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const handleToggleScheme = () =>
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");

  return (
    <ActionIcon
      aria-label="Toggle color scheme"
      onClick={handleToggleScheme}
      {...props}
    >
      {computedColorScheme === "light" ? <FaSun /> : <FaMoon />}
    </ActionIcon>
  );
};
