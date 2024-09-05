"use client";

import { useComputedColorScheme } from "@mantine/core";
import { Toaster } from "sonner";

export const ThemedToaster = () => {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Toaster
      theme={computedColorScheme ?? "system"}
      richColors
    />
  );
};
