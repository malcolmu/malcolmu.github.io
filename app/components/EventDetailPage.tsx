import Link from "next/link";
import { ArrowIcon } from "@/app/components/ArrowIcon";
import { PageHero } from "@/app/components/PageHero";
import { SiteFooter } from "@/app/components/SiteFooter";
import { formatEventDate, formatTime, type VenueEvent } from "@/app/lib/events";
import { SITE_NAME, SITE_URL } from "@/app/lib/metadata";

export function EventDetailPage({ event }: { event: VenueEvent }) {
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: `${event.date}T${event.time}:00+01:00`,
    endDate: `${event.endDate ?? event.date}T${event.endTime ?? event.time}:00+01:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    url: `${SITE_URL}/whats-on/${event.slug}`,
    image: `${SITE_URL}/og-seo.png`,
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Leece Street",
        addressLocality: "Liverpool",
        postalCode: "L1 2TR",
        addressCountry: "GB",
      },
    },
    organizer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <main className="event-detail-page">
      <PageHero
        eyebrow={event.category}
        title={event.title}
        intro={event.summary}
        image={event.image}
        alt={event.imageAlt}
      >
        <div className="event-hero-actions">
          <Link href="/whats-on" className="text-link"><ArrowIcon direction="left" /> Back to what’s on</Link>
          <a href="https://www.eventbrite.co.uk/" target="_blank" rel="noreferrer" className="button button--light">
            Check Eventbrite <ArrowIcon />
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
            Check Eventbrite <ArrowIcon />
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
          <Link href="/whats-on" className="button button--light">Browse the calendar <ArrowIcon /></Link>
        </div>
      </section>

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
      />
    </main>
  );
}
