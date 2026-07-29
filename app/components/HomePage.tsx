import Link from "next/link";
import { EventCard } from "@/app/components/EventCard";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { events, formatEventDate, formatTime } from "@/app/lib/events";

export function HomePage() {
  const upcoming = events.slice(0, 3);
  const nextEvent = upcoming[0];
  return (
    <main>
      <section className="hero" aria-labelledby="home-title">
        <img className="hero__image" src="/images/church-roof.jpg" alt="The open-roof interior of St Luke’s Bombed Out Church." />
        <div className="hero__wash" />
        <SiteHeader inverted />
        <div className="hero__copy wrap">
          <p className="kicker">Liverpool city centre</p>
          <h1 id="home-title">A place of reflection<br />and a living venue.</h1>
          <p className="hero__dek">St Luke’s is Liverpool’s open-air historic landmark — home to events, heritage, a garden bar and moments of quiet.</p>
          <div className="hero__actions">
            <Link href="/whats-on" className="button button--light">See what’s on <span aria-hidden="true">↗</span></Link>
            <Link href="/visit" className="button button--ghost">Plan your visit <span aria-hidden="true">↓</span></Link>
          </div>
          <Link className="hero-next-event" href={`/whats-on/${nextEvent.slug}`}>
            <span><small>Next event</small>{formatEventDate(nextEvent)} · {formatTime(nextEvent.time)}</span>
            <strong>{nextEvent.title}</strong>
            <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </section>

      <section className="intro wrap" id="story" aria-labelledby="intro-title">
        <p className="section-label">Not just a building</p>
        <div className="intro__grid">
          <h2 id="intro-title">Meet in the<br /><em>middle of the city.</em></h2>
          <div>
            <p className="intro__lead">A survivor of Liverpool’s past, full of life in the present. Come for a concert, a quiet moment, a drink in the garden or a story you haven’t heard before.</p>
            <Link href="/our-story" className="text-link">Discover the story <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="programme" aria-labelledby="programme-title">
        <div className="wrap programme__head">
          <div>
            <p className="section-label">This month at St Luke’s</p>
            <h2 id="programme-title">Come as you are.</h2>
          </div>
          <Link href="/whats-on" className="text-link">View the calendar <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="wrap event-grid">
          {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>

      <section className="visit-band" id="visit" aria-labelledby="visit-title">
        <div className="visit-band__image"><img src="/images/church-arch.jpg" alt="St Luke’s tower visible through a brick arch." /></div>
        <div className="visit-band__copy">
          <p className="section-label">Find your way here</p>
          <h2 id="visit-title">Step inside.</h2>
          <p>Five minutes from Lime Street, at the junction of Leece Street and Berry Street. Our gardens, bar and building each have their own rhythm — check before you travel.</p>
          <Link href="/visit" className="button button--dark">Visit St Luke’s <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="garden-band" id="garden" aria-labelledby="garden-title">
        <div className="wrap garden-band__content">
          <div>
            <p className="section-label">Garden Bar &amp; Café</p>
            <h2 id="garden-title">Good things<br />grow here.</h2>
            <Link href="/garden-bar" className="button button--green">Garden Bar details <span aria-hidden="true">↗</span></Link>
          </div>
          <img src="/images/garden-bar.jpg" alt="People enjoying the Garden Bar next to the church." />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
