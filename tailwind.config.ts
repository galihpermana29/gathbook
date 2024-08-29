import { em } from "@mantine/core";

import { mantineTailwind } from "./tailwind.mantine.preset";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [mantineTailwind],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "3xl": em(1792) },
    },
    extend: {
      screens: { xs: em(576) },
    },
  },
  plugins: [],
};
export default config;
