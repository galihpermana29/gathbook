"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export const useIsActiveSegment = (segment: string) => {
  const layout = useSelectedLayoutSegment() ?? "";
  const isActive = `/${layout}` === segment;
  return isActive;
};
