import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailPage } from "@/app/components/EventDetailPage";
import { events } from "@/app/lib/events";
import { pageMetadata } from "@/app/lib/metadata";

export function generateStaticParams() { return events.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return {};
  return pageMetadata({
    title: event.title,
    description: event.summary,
    path: `/whats-on/${event.slug}`,
  });
}

export default async function EventRoute({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const event = events.find((item) => item.slug === slug); if (!event) notFound(); return <EventDetailPage event={event} />; }
