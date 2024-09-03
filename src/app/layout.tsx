import { metadataSettings } from "@/lib/metadata";

import "@/styles/globals.css";

import { theme } from "@/styles/mantine-theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";

import { TanstackQueryProvider } from "@/components/providers/tanstack-query-provider";

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
        <TanstackQueryProvider>
          <MantineProvider
            defaultColorScheme="light"
            theme={theme}
          >
            <Toaster
              theme="light"
              richColors
            />
            {children}
          </MantineProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
