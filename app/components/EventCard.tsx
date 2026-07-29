import Link from "next/link";
import { ArrowIcon } from "@/app/components/ArrowIcon";
import { ResponsiveImage } from "@/app/components/ResponsiveImage";
import type { VenueEvent } from "@/app/lib/events";
import { formatEventDate, formatTime } from "@/app/lib/events";

export function EventCard({ event, compact = false }: { event: VenueEvent; compact?: boolean }) {
  return (
    <Link
      href={`/whats-on/${event.slug}`}
      className={`event-card ${compact ? "event-card--compact" : ""}`}
      prefetch={false}
    >
      <div className="event-card__image">
        <ResponsiveImage
          src={event.image}
          alt={event.imageAlt}
          sizes={compact
            ? "(max-width: 600px) 35vw, 18vw"
            : "(max-width: 600px) 42vw, (max-width: 900px) 32vw, 30vw"}
        />
        <span className="event-card__type">{event.category}</span>
      </div>
      <div className="event-card__body">
        <p className="eyebrow">{formatEventDate(event)} · {formatTime(event.time)}</p>
        <h3>{event.title}</h3>
        {!compact && <p>{event.summary}</p>}
        <span className="text-link">Find out more <ArrowIcon /></span>
      </div>
    </Link>
  );
}
