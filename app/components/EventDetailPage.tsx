import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
import { events, formatEventDate, formatTime } from "@/app/lib/events";

export function EventDetailPage() {
  const event = events.find((item) => item.slug === "sound-bath-experience")!;
  return (
    <main className="event-detail-page">
      <div className="event-detail-hero">
        <img src={event.image} alt={event.imageAlt} />
        <div className="event-detail-hero__overlay" />
        <SiteHeader inverted />
        <div className="wrap event-detail-hero__copy">
          <Link href="/whats-on" className="back-link">← Back to what’s on</Link>
          <p className="kicker">{event.category}</p>
          <h1>{event.title}</h1>
          <p className="event-detail-hero__summary">{event.summary}</p>
          <a href="https://www.eventbrite.co.uk/" target="_blank" rel="noreferrer" className="button button--light event-detail-hero__booking">
            Book with Eventbrite <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <section className="event-detail-body wrap">
        <aside className="event-facts" aria-label="Event details">
          <div><span>Date</span><strong>{formatEventDate(event, { weekday: "long", day: "numeric", month: "long" })}</strong></div>
          <div><span>Time</span><strong>{formatTime(event.time)}–{formatTime(event.endTime!)}</strong></div>
          <div><span>Place</span><strong>{event.location}</strong></div>
          <div><span>Tickets</span><strong>{event.price}</strong></div>
          <a href="https://www.eventbrite.co.uk/" target="_blank" rel="noreferrer" className="button button--dark">
            Book with Eventbrite <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </aside>
        <article className="event-story">
          <p className="event-story__lead">An invitation to slow down, listen differently and be held by a much-loved Liverpool landmark.</p>
          <p>{event.description}</p>
          <p>Whether you’re familiar with sound baths or trying one for the first time, this is a gentle, welcoming session. There is no need to achieve anything — simply arrive, settle and take the space you need.</p>
          <div className="note-box"><strong>Good to know</strong><p>Bring a mat, blanket and anything that helps you feel comfortable. Doors open 30 minutes before the event.</p></div>
          <h2>Access</h2>
          <p>{event.access}</p>
          <p>For a chat before booking, email <a href="mailto:hello@slboc.com">hello@slboc.com</a>.</p>
        </article>
      </section>
      <section className="event-detail-next">
        <div className="wrap"><p className="section-label">Keep exploring</p><h2>More reasons to come in.</h2><Link href="/whats-on" className="button button--light">Browse the calendar <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
