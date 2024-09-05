"use client";

import { useSelectedLayoutSegment } from "next/navigation";

/**
 * Custom hook to determine if a given segment matches the currently active layout segment.
 *
 * @param {string} segment The segment to check against the active layout segment.
 * @returns {boolean} `true` if the segment matches the active layout segment; otherwise, `false`.
 */
export const useIsActiveSegment = (segment: string): boolean => {
  const layout = useSelectedLayoutSegment() ?? "";
  const isActive = `/${layout}` === segment;
  return isActive;
};
