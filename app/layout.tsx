import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "وهج | بخور ومخمريات وعطور",

  description:
    "وهج — بخور ومخمريات وعطور ومجموعات وهدايا بلمسة عربية معاصرة.",

  applicationName: "وهج",

  keywords: [
    "وهج",
    "بخور",
    "عطور",
    "مخمريات",
    "هدايا",
    "مجموعات"
  ],

  manifest: "/manifest.webmanifest",


  appleWebApp: {
    capable: true,
    title: "وهج",
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2a20"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}

      </body>
    </html>
  );
}
