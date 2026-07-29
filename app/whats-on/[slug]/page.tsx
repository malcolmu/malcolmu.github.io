import { notFound } from "next/navigation";
import { EventDetailPage } from "@/app/components/EventDetailPage";
import { events } from "@/app/lib/events";
export function generateStaticParams() { return events.map(({ slug }) => ({ slug })); }
export default async function EventRoute({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const event = events.find((item) => item.slug === slug); if (!event) notFound(); return <EventDetailPage event={event} />; }
