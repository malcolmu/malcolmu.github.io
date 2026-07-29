import Link from "next/link";
import { ArrowIcon } from "@/app/components/ArrowIcon";

export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__identity">
        <p className="footer-wordmark">St Luke’s<br />Bombed Out Church</p>
        <address>Leece Street<br />Liverpool L1 2TR</address>
        <a href="mailto:hello@slboc.com">hello@slboc.com</a>
        <a href="mailto:weddings@slboc.com">weddings@slboc.com</a>
      </div>
      <nav aria-label="Main footer links">
        <p>Explore</p>
        <Link href="/whats-on" prefetch={false}>What’s on</Link>
        <Link href="/visit" prefetch={false}>Visit & access</Link>
        <Link href="/our-story" prefetch={false}>Our story</Link>
        <Link href="/garden-bar" prefetch={false}>Garden Bar</Link>
        <Link href="/weddings" prefetch={false}>Weddings</Link>
        <Link href="/venue-hire" prefetch={false}>Venue hire</Link>
      </nav>
      <nav aria-label="Organisation links">
        <p>More</p>
        <Link href="/blog" prefetch={false}>Blog & stories</Link>
        <Link href="/get-involved" prefetch={false}>Get involved</Link>
        <Link href="/jobs" prefetch={false}>Jobs</Link>
        <Link href="/contact" prefetch={false}>Contact</Link>
        <Link href="/terms" prefetch={false}>Terms</Link>
        <Link href="/privacy" prefetch={false}>Privacy</Link>
      </nav>
      <nav aria-label="Social media">
        <p>Follow</p>
        <a href="https://www.instagram.com/bombedoutchurchliverpool/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>
        <a href="https://www.facebook.com/StLukesBombedOutChurch/" target="_blank" rel="noreferrer">Facebook <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>
        <a href="https://www.instagram.com/bocgardenbar/" target="_blank" rel="noreferrer">Garden Bar <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>
      </nav>
      <p className="site-footer__small">Local prototype · details to verify before publication</p>
    </footer>
  );
}
