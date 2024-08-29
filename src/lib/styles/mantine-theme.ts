import { createTheme, em } from "@mantine/core";

import { bodyFont, headingsFont } from "@/lib/styles/fonts";

export const theme = createTheme({
  cursorType: "pointer",
  fontSmoothing: true,
  defaultRadius: "lg",
  fontFamily: bodyFont.style.fontFamily,
  headings: { fontFamily: headingsFont.style.fontFamily },
  primaryColor: "dark",
  breakpoints: {
    xs: em(576),
    sm: em(640),
    md: em(768),
    lg: em(1024),
    xl: em(1280),
    "2xl": em(1536),
  },
});
