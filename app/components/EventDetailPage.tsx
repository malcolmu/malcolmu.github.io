import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { SiteFooter } from "@/app/components/SiteFooter";
import { formatEventDate, formatTime, type VenueEvent } from "@/app/lib/events";

export function EventDetailPage({ event }: { event: VenueEvent }) {
  return (
    <main className="event-detail-page">
      <title>{event.title} | St Luke’s Bombed Out Church</title>
      <meta name="description" content={event.summary} />

      <PageHero
        eyebrow={event.category}
        title={event.title}
        intro={event.summary}
        image={event.image}
        alt={event.imageAlt}
      >
        <div className="event-hero-actions">
          <Link href="/whats-on" className="text-link">← Back to what’s on</Link>
          <a href="https://www.eventbrite.co.uk/" target="_blank" rel="noreferrer" className="button button--light">
            Check Eventbrite <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </PageHero>

      <div className="verify-note wrap">
        <strong>Time-sensitive listing</strong>
        Dates, prices, access and Eventbrite destinations are placeholders to verify before publication.
      </div>

      <section className="event-detail-body wrap">
        <aside className="event-facts">
          <div><span>Date</span><strong>{formatEventDate(event, { weekday: "long", day: "numeric", month: "long" })}</strong></div>
          <div><span>Time</span><strong>{formatTime(event.time)}–{formatTime(event.endTime ?? event.time)}</strong></div>
          <div><span>Place</span><strong>{event.location}</strong></div>
          <div><span>Tickets</span><strong>{event.price}</strong></div>
          <a href="https://www.eventbrite.co.uk/" target="_blank" rel="noreferrer" className="button button--dark">
            Check Eventbrite <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </aside>
        <article className="event-story">
          <p className="event-story__lead">A reason to come in, look up and experience St Luke’s in a different way.</p>
          <p>{event.description}</p>
          <div className="note-box"><strong>Good to know</strong><p>{event.access}</p></div>
          <h2>Before you book</h2>
          <p>This is a local prototype. The final website will send visitors to the approved Eventbrite listing and will show confirmed event, ticket and access information.</p>
        </article>
      </section>

      <section className="event-detail-next">
        <div className="wrap">
          <p className="section-label">Keep exploring</p>
          <h2>More reasons to come in.</h2>
          <Link href="/whats-on" className="button button--light">Browse the calendar <span>↗</span></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
