// @ts-check
const { em } = require("@mantine/core");
module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-preset-mantine": { autoRem: true },
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": em(576),
        "mantine-breakpoint-sm": em(640),
        "mantine-breakpoint-md": em(768),
        "mantine-breakpoint-lg": em(1024),
        "mantine-breakpoint-xl": em(1280),
        "mantine-breakpoint-2xl": em(1536),
      },
    },
  },
};
