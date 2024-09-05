import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine class names with conditional logic and merge Tailwind CSS classes.
 *
 * @param {...ClassValue[]} inputs An array of class values which can be strings, arrays, or objects.
 * @returns {string} A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
