import { SiteHeader } from "@/app/components/SiteHeader";

export function PageHero({ eyebrow, title, intro, image, alt, children }: { eyebrow: string; title: string; intro: string; image: string; alt: string; children?: React.ReactNode }) {
  return <section className="page-hero">
    <img src={image} alt={alt} />
    <div className="page-hero__overlay" />
    <SiteHeader inverted />
    <div className="wrap page-hero__copy"><div className="page-hero__content"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{children}</div></div>
  </section>;
}
