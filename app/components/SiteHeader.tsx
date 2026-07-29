"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const primaryLinks = [
  ["/whats-on", "What’s on"],
  ["/visit", "Visit"],
  ["/our-story", "Our story"],
  ["/garden-bar", "Garden Bar"],
  ["/weddings", "Weddings"],
  ["/venue-hire", "Hire the church"],
] as const;

const secondaryLinks = [
  ["/blog", "Blog & stories"],
  ["/get-involved", "Get involved"],
  ["/contact", "Contact"],
] as const;

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    document.body.classList.add("menu-is-open");
    return () => {
      document.removeEventListener("keydown", close);
      document.body.classList.remove("menu-is-open");
    };
  }, [open]);

  return (
    <header className={`site-header ${inverted ? "site-header--inverted" : ""}`}>
      <Link className="wordmark" href="/" aria-label="St Luke's Bombed Out Church home">
        <span>St Luke’s</span>
        <strong>Bombed Out<br />Church</strong>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        {primaryLinks.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className="header-link" href="/visit">Plan your visit <span aria-hidden="true">↘</span></Link>

      <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
        <span>Explore</span><i aria-hidden="true"><b /><b /></i>
      </button>

      <div className={`menu-backdrop ${open ? "is-open" : ""}`} aria-hidden={!open} onClick={() => setOpen(false)} />
      <aside className={`menu-panel ${open ? "is-open" : ""}`} id="site-menu" aria-hidden={!open}>
        <div className="menu-panel__head">
          <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
            <span>St Luke’s</span><strong>Bombed Out<br />Church</strong>
          </Link>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">Close <span aria-hidden="true">×</span></button>
        </div>
        <nav aria-label="Mobile navigation" className="menu-panel__primary">
          {primaryLinks.map(([href, label], index) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              <small>0{index + 1}</small><span>{label}</span><b aria-hidden="true">↗</b>
            </Link>
          ))}
        </nav>
        <nav aria-label="More pages" className="menu-panel__secondary">
          {secondaryLinks.map(([href, label]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <p>Leece Street, Liverpool L1 2TR<br /><a href="mailto:hello@slboc.com">hello@slboc.com</a></p>
      </aside>
    </header>
  );
}
