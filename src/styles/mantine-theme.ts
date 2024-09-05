import { createTheme, em } from "@mantine/core";

import { bodyFont, headingsFont } from "./fonts";

export const theme = createTheme({
  cursorType: "pointer",
  fontSmoothing: true,
  defaultRadius: "xl",
  fontFamily: bodyFont.style.fontFamily,
  headings: { fontFamily: headingsFont.style.fontFamily },
  colors: {
    primary: [
      "#fef6e5",
      "#f6ebd6",
      "#e9d4b1",
      "#dcbc88",
      "#d1a864",
      "#ca9b4d",
      "#c79541",
      "#af8132",
      "#9d722a",
      "#88621c",
    ],
  },
  primaryColor: "primary",
  breakpoints: {
    xs: em(576),
    sm: em(640),
    md: em(768),
    lg: em(1024),
    xl: em(1280),
    "2xl": em(1536),
    "3xl": em(1792),
  },
});
