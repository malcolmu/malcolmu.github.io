import Link from "next/link";
import type { VenueEvent } from "@/app/lib/events";
import { formatEventDate, formatTime } from "@/app/lib/events";

export function EventCard({ event, compact = false }: { event: VenueEvent; compact?: boolean }) {
  return (
    <Link
      href={`/whats-on/${event.slug}`}
      className={`event-card ${compact ? "event-card--compact" : ""}`}
      aria-label={`${event.title} on ${formatEventDate(event)} at ${formatTime(event.time)}`}
    >
      <div className="event-card__image">
        <img src={event.image} alt={event.imageAlt} />
        <span className="event-card__type">{event.category}</span>
      </div>
      <div className="event-card__body">
        <p className="eyebrow">{formatEventDate(event)} · {formatTime(event.time)}</p>
        <h3>{event.title}</h3>
        {!compact && <p>{event.summary}</p>}
        <span className="text-link">Find out more <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
