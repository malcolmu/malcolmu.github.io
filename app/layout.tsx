import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/lib/metadata";
import { siteBasePath } from "@/app/lib/site-path";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  let origin = SITE_URL;

  if (process.env.STATIC_EXPORT !== "1") {
    const requestHeaders = await headers();
    const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
    const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.startsWith("localhost") ? "http" : "https");
    if (host) origin = `${protocol}://${host}`;
  }

  const socialImage = `${origin}/og-seo.png`;

  return {
    metadataBase: new URL(origin),
    title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    category: "arts and culture",
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: `${siteBasePath}/favicon.svg`,
      shortcut: `${siteBasePath}/favicon.svg`,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      siteName: SITE_NAME,
      url: "/",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "The green, open-roof interior of St Luke’s Bombed Out Church." }],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      images: [socialImage],
    },
  };
}

const placeStructuredData = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "Place"],
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-seo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Leece Street",
    addressLocality: "Liverpool",
    postalCode: "L1 2TR",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.instagram.com/bombedoutchurchliverpool/",
    "https://www.facebook.com/StLukesBombedOutChurch/",
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeStructuredData) }}
        />
      </body>
    </html>
  );
}
