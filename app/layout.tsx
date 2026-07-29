import type { Metadata } from "next";
import { headers } from "next/headers";
import { siteBasePath } from "@/app/lib/site-path";
import "./globals.css";

const title = "St Luke’s Bombed Out Church";
const description = "A place of reflection and a living venue — heritage, events, gardens and community in the heart of Liverpool.";

export async function generateMetadata(): Promise<Metadata> {
  let origin = "https://www.slboc.com";

  if (process.env.STATIC_EXPORT !== "1") {
    const requestHeaders = await headers();
    const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
    const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.startsWith("localhost") ? "http" : "https");
    if (host) origin = `${protocol}://${host}`;
  }

  const socialImage = `${origin}${siteBasePath}/og.png`;

  return {
    metadataBase: new URL(origin),
    title: { default: title, template: `%s | ${title}` },
    description,
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
    openGraph: {
      type: "website",
      title,
      description,
      siteName: title,
      images: [{ url: socialImage, width: 1731, height: 909, alt: "The green, open-roof interior of St Luke’s Bombed Out Church." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
