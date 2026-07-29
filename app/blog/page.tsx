import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { posts } from "@/app/lib/site-content";

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <section className="listing-intro wrap">
        <p className="kicker">Blog & stories</p>
        <h1>From under<br /><em>the open sky.</em></h1>
        <p>News, reflections and stories from the building, its programme, partners and the community around it.</p>
      </section>
      <section className="post-grid wrap" aria-label="Blog articles">
        {posts.map((post) => (
          <article className="post-card" key={post.slug}>
            <Link className="post-card__image" href={`/blog/${post.slug}`}><img src={post.image} alt={post.imageAlt} /></Link>
            <p className="eyebrow">{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${post.date}T12:00:00`))}</p>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.excerpt}</p>
            <Link className="text-link" href={`/blog/${post.slug}`}>Read story <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
