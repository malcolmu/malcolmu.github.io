import Link from "next/link";
import type { VenueEvent } from "@/app/lib/events";
import { formatEventDate, formatTime } from "@/app/lib/events";

export function EventCard({ event, compact = false }: { event: VenueEvent; compact?: boolean }) {
  return (
    <article className={`event-card ${compact ? "event-card--compact" : ""}`}>
      <div className="event-card__image">
        <img src={event.image} alt={event.imageAlt} />
        <span className="event-card__type">{event.category}</span>
      </div>
      <div className="event-card__body">
        <p className="eyebrow">{formatEventDate(event)} · {formatTime(event.time)}</p>
        <h3>{event.title}</h3>
        {!compact && <p>{event.summary}</p>}
        <Link href={`/whats-on/${event.slug}`} className="text-link">Find out more <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
