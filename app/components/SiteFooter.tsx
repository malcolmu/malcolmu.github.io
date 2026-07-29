import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <p className="footer-wordmark">St Luke’s<br />Bombed Out Church</p>
        <address>Leece Street<br />Liverpool L1 2TR</address>
        <a href="mailto:hello@slboc.com">hello@slboc.com</a>
        <a href="mailto:weddings@slboc.com">weddings@slboc.com</a>
      </div>
      <nav aria-label="Main footer links">
        <p>Explore</p>
        <Link href="/whats-on">What’s on</Link>
        <Link href="/visit">Visit & access</Link>
        <Link href="/our-story">Our story</Link>
        <Link href="/garden-bar">Garden Bar</Link>
        <Link href="/weddings">Weddings</Link>
        <Link href="/venue-hire">Venue hire</Link>
      </nav>
      <nav aria-label="Organisation links">
        <p>More</p>
        <Link href="/blog">Blog & stories</Link>
        <Link href="/get-involved">Get involved</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
      <nav aria-label="Social media">
        <p>Follow</p>
        <a href="https://www.instagram.com/bombedoutchurchliverpool/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        <a href="https://www.facebook.com/StLukesBombedOutChurch/" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a>
        <a href="https://www.instagram.com/bocgardenbar/" target="_blank" rel="noreferrer">Garden Bar <span aria-hidden="true">↗</span></a>
      </nav>
      <p className="site-footer__small">Local prototype · details to verify before publication</p>
    </footer>
  );
}
