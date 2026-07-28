import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St Luke’s Bombed Out Church | Prototype",
  description: "A redesign prototype for St Luke’s Bombed Out Church, Liverpool.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
