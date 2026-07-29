import { SiteHeader } from "@/app/components/SiteHeader";

export function PageHero({ eyebrow, title, intro, image, alt, children }: { eyebrow: string; title: string; intro: string; image: string; alt: string; children?: React.ReactNode }) {
  const isLongTitle = title.length > 90 || title.split(" ").length > 12;

  return <section className={`page-hero ${isLongTitle ? "page-hero--long" : ""}`}>
    <img src={image} alt={alt} />
    <div className="page-hero__overlay" />
    <SiteHeader inverted />
    <div className="wrap page-hero__copy" id="main-content" tabIndex={-1}>
      <div className="page-hero__content">
        <div className="page-hero__title-block">
          <p className="kicker">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero__support">
          <p>{intro}</p>
          {children}
        </div>
      </div>
    </div>
  </section>;
}
