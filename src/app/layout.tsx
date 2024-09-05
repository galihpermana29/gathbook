import { metadataSettings } from "@/lib/metadata";

import "@/styles/globals.css";

import { theme } from "@/styles/mantine-theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { TanstackQueryProvider } from "@/components/providers/tanstack-query-provider";
import { ThemedToaster } from "@/components/themed-toaster";

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
        <TanstackQueryProvider>
          <MantineProvider
            defaultColorScheme="auto"
            theme={theme}
          >
            <ThemedToaster />
            {children}
          </MantineProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
