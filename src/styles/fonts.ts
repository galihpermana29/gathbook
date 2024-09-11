import {
  IBM_Plex_Mono as body,
  Lexend_Zetta as heading,
} from "next/font/google";

export const headingsFont = heading({ subsets: ["latin"] });
export const bodyFont = body({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
