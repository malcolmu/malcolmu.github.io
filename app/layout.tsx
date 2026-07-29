import type { Metadata } from "next";
import { siteBasePath } from "@/app/lib/site-path";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "St Luke’s Bombed Out Church", template: "%s | St Luke’s Bombed Out Church" },
  description: "St Luke’s Bombed Out Church, Liverpool: heritage, events, Garden Bar, weddings and venue hire.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: `${siteBasePath}/favicon.svg`,
    shortcut: `${siteBasePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
