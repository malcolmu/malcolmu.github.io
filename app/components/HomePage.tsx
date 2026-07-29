import Link from "next/link";
import { ArrowIcon } from "@/app/components/ArrowIcon";
import { EventCard } from "@/app/components/EventCard";
import { ResponsiveImage } from "@/app/components/ResponsiveImage";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { events, formatEventDate, formatTime } from "@/app/lib/events";
import { assetPath } from "@/app/lib/site-path";

export function HomePage() {
  const upcoming = events.slice(0, 3);
  const nextEvent = upcoming[0];
  return (
    <main>
      <section className="hero" aria-labelledby="home-title">
        <ResponsiveImage
          className="hero__image"
          src={assetPath("/images/church-roof.jpg")}
          alt="The open-roof interior of St Luke’s Bombed Out Church."
          sizes="100vw"
          priority
        />
        <div className="hero__wash" />
        <SiteHeader inverted />
        <div className="hero__copy wrap" id="main-content" tabIndex={-1}>
          <p className="kicker">Liverpool city centre</p>
          <h1 id="home-title">A place of reflection<br />and a living venue.</h1>
          <p className="hero__dek">St Luke’s is Liverpool’s open-air historic landmark — home to events, heritage, a garden bar and moments of quiet.</p>
          <div className="hero__actions">
            <Link href="/whats-on" prefetch={false} className="button button--light">See what’s on <ArrowIcon /></Link>
            <Link href="/visit" prefetch={false} className="button button--ghost">Plan your visit <ArrowIcon direction="down" /></Link>
          </div>
          <Link className="hero-next-event" href={`/whats-on/${nextEvent.slug}`} prefetch={false}>
            <span><small>Next event</small>{formatEventDate(nextEvent)} · {formatTime(nextEvent.time)}</span>
            <strong>{nextEvent.title}</strong>
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="intro wrap" id="story" aria-labelledby="intro-title">
        <p className="section-label">Not just a building</p>
        <div className="intro__grid">
          <h2 id="intro-title">Meet in the<br /><em>middle of the city.</em></h2>
          <div>
            <p className="intro__lead">A survivor of Liverpool’s past, full of life in the present. Come for a concert, a quiet moment, a drink in the garden or a story you haven’t heard before.</p>
            <Link href="/our-story" prefetch={false} className="text-link">Discover the story <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="programme" aria-labelledby="programme-title">
        <div className="wrap programme__head">
          <div>
            <p className="section-label">This month at St Luke’s</p>
            <h2 id="programme-title">Come as you are.</h2>
          </div>
          <Link href="/whats-on" prefetch={false} className="text-link">View the calendar <ArrowIcon /></Link>
        </div>
        <div className="wrap event-grid">
          {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>

      <section className="visit-band" id="visit" aria-labelledby="visit-title">
        <div className="visit-band__image">
          <ResponsiveImage
            src={assetPath("/images/church-arch.jpg")}
            alt="St Luke’s tower visible through a brick arch."
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <div className="visit-band__copy">
          <p className="section-label">Find your way here</p>
          <h2 id="visit-title">Step inside.</h2>
          <p>Five minutes from Lime Street, at the junction of Leece Street and Berry Street. Our gardens, bar and building each have their own rhythm — check before you travel.</p>
          <Link href="/visit" prefetch={false} className="button button--dark">Visit St Luke’s <ArrowIcon /></Link>
        </div>
      </section>

      <section className="garden-band" id="garden" aria-labelledby="garden-title">
        <div className="wrap garden-band__content">
          <div>
            <p className="section-label">Garden Bar &amp; Café</p>
            <h2 id="garden-title">Good things<br />grow here.</h2>
            <Link href="/garden-bar" prefetch={false} className="button button--green">Garden Bar details <ArrowIcon /></Link>
          </div>
          <ResponsiveImage
            src={assetPath("/images/garden-bar.jpg")}
            alt="People enjoying the Garden Bar next to the church."
            sizes="(max-width: 600px) calc(100vw - 32px), 52vw"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
