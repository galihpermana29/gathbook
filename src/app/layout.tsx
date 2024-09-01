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
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className="scroll-smooth antialiased">
        <MantineProvider
          defaultColorScheme="auto"
          theme={theme}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
