import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/lib/site";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "UA WELDING-KM",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0d0f0e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below adds the "js" class before hydration
    <html lang="cs" suppressHydrationWarning>
      <head>
        {/* Preload the faces used above the fold */}
        <link rel="preload" href="/fonts/montserrat-latin-900-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/barlow-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        {/* Mark JS availability before paint so scroll-reveal never hides content for no-JS users */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
