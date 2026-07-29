import type { Metadata } from "next";

export const SITE_NAME = "St Luke’s Bombed Out Church";
export const SITE_URL = "https://www.slboc.com";
export const SITE_DESCRIPTION = "Visit St Luke’s Bombed Out Church in Liverpool for events, heritage, the Garden Bar, weddings and venue hire.";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [{ url: "/og-seo.png", width: 1731, height: 909, alt: `${SITE_NAME}, Liverpool` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-seo.png"],
    },
  };
}
