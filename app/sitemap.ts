import type { MetadataRoute } from "next";
import { events } from "@/app/lib/events";
import { SITE_URL } from "@/app/lib/metadata";
import { posts } from "@/app/lib/site-content";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/whats-on",
  "/visit",
  "/our-story",
  "/garden-bar",
  "/weddings",
  "/venue-hire",
  "/blog",
  "/get-involved",
  "/jobs",
  "/contact",
  "/terms",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-07-29T00:00:00Z");

  return [
    ...staticRoutes.map((path, index) => ({
      url: `${SITE_URL}${path || "/"}`,
      lastModified: updated,
      changeFrequency: index === 0 ? "weekly" as const : "monthly" as const,
      priority: index === 0 ? 1 : path === "/whats-on" || path === "/visit" ? 0.9 : 0.7,
    })),
    ...events.map((event) => ({
      url: `${SITE_URL}/whats-on/${event.slug}`,
      lastModified: updated,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
