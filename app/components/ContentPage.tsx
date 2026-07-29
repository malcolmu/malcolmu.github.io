import Link from "next/link";
import { ArrowIcon } from "@/app/components/ArrowIcon";
import { PageHero } from "@/app/components/PageHero";
import { SiteFooter } from "@/app/components/SiteFooter";
import { PrototypeForm } from "@/app/components/PrototypeForm";
import { FAQ } from "@/app/components/FAQ";
import { faqs, site, type ContentBlock } from "@/app/lib/site-content";
export function ContentPage({ content, form, includeFaq = false }: { content: { eyebrow: string; title: string; intro: string; image: string; alt: string; blocks: readonly ContentBlock[] }, form?: string, includeFaq?: boolean }) { return <main><PageHero {...content}><Link href="/contact" className="button button--light">Get in touch <ArrowIcon /></Link></PageHero><div className="verify-note wrap"><strong>Check before you travel</strong>{site.notice}</div><section className="content-layout wrap"><div><p className="section-label">St Luke’s, Liverpool</p><h2>{content.title}</h2></div><div>{content.blocks.map((block) => <section className="content-block" id={block.id} key={block.heading}><h3>{block.heading}</h3><p>{block.text}</p>{block.link && <a className="text-link" href={block.link.href} target="_blank" rel="noreferrer">{block.link.label} <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>}</section>)}</div></section>{includeFaq && <div className="wrap"><FAQ items={faqs} /></div>}{form && <section className="form-band"><div className="wrap"><PrototypeForm title={form} /></div></section>}<SiteFooter /></main>; }
