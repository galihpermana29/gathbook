import { metadataSettings } from "@/lib/metadata";

import "@/lib/styles/globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { theme } from "@/lib/styles/mantine-theme";

export const metadata = metadataSettings;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className="scroll-smooth antialiased">
        <MantineProvider
          defaultColorScheme="light"
          theme={theme}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
