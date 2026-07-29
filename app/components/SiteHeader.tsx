"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const currentPath = pathname?.replace(/^\/slboc(?=\/|$)/, "") || "/";
  const isCurrent = (href: string) => currentPath === href || (href !== "/" && currentPath.startsWith(`${href}/`));

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"))
      : [];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 40);
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("menu-is-open");

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-is-open");
    };
  }, [open]);

  return (
    <header className={`site-header ${inverted ? "site-header--inverted" : ""}`} role="banner">
      <Link className="wordmark" href="/" aria-label="St Luke's Bombed Out Church home">
        <span>St Luke’s</span>
        <strong>Bombed Out<br />Church</strong>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        {primaryLinks.map(([href, label]) => <Link href={href} key={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <Link className="header-link" href="/visit" aria-current={isCurrent("/visit") ? "page" : undefined}>Plan your visit <span aria-hidden="true">↘</span></Link>

      <button ref={triggerRef} className="menu-trigger" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
        <span>Explore</span><i aria-hidden="true"><b /><b /></i>
      </button>

      <div className={`menu-backdrop ${open ? "is-open" : ""}`} aria-hidden={!open} onClick={() => setOpen(false)} />
      <aside
        ref={panelRef}
        className={`menu-panel ${open ? "is-open" : ""}`}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="menu-panel__head">
          <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
            <span>St Luke’s</span><strong>Bombed Out<br />Church</strong>
          </Link>
          <button ref={closeRef} type="button" onClick={() => { setOpen(false); triggerRef.current?.focus(); }} aria-label="Close menu">Close <span aria-hidden="true">×</span></button>
        </div>
        <nav aria-label="Mobile navigation" className="menu-panel__primary">
          {primaryLinks.map(([href, label], index) => (
            <Link href={href} key={href} onClick={() => setOpen(false)} aria-current={isCurrent(href) ? "page" : undefined}>
              <small>0{index + 1}</small><span>{label}</span><b aria-hidden="true">↗</b>
            </Link>
          ))}
        </nav>
        <nav aria-label="More pages" className="menu-panel__secondary">
          {secondaryLinks.map(([href, label]) => <Link href={href} key={href} onClick={() => setOpen(false)} aria-current={isCurrent(href) ? "page" : undefined}>{label}</Link>)}
        </nav>
        <p>Leece Street, Liverpool L1 2TR<br /><a href="mailto:hello@slboc.com">hello@slboc.com</a></p>
      </aside>
    </header>
  );
}
