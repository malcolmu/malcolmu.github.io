import Link from "next/link";

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const navigation = (
    <>
      <Link href="/whats-on">What’s on</Link>
      <Link href="/#visit">Visit</Link>
      <Link href="/#story">Our story</Link>
      <Link href="/#garden">Garden Bar</Link>
      <Link href="/#hire">Hire the church</Link>
    </>
  );

  return (
    <header className={`site-header ${inverted ? "site-header--inverted" : ""}`}>
      <Link className="wordmark" href="/" aria-label="St Luke's Bombed Out Church home">
        <span>St Luke’s</span>
        <strong>Bombed Out<br />Church</strong>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        {navigation}
      </nav>
      <Link className="header-link" href="/#visit">Plan your visit <span aria-hidden="true">↘</span></Link>
      <details className="mobile-menu">
        <summary>Menu <span aria-hidden="true">＋</span></summary>
        <nav aria-label="Mobile navigation">
          {navigation}
        </nav>
      </details>
    </header>
  );
}
