import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { SiteFooter } from "@/app/components/SiteFooter";
import { posts } from "@/app/lib/site-content";
import { assetPath } from "@/app/lib/site-path";

export const metadata: Metadata = {
  title: "Blog & stories",
  description: "News, reflections and stories from St Luke’s Bombed Out Church, its programme, partners and community.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog & stories"
        title="From under the open sky."
        intro="News, reflections and stories from the building, its programme, partners and the community around it."
        image={assetPath("/images/church-wall.jpg")}
        alt="The long brick wall and open arches of St Luke’s Bombed Out Church."
      />
      <section className="post-grid blog-listing wrap" aria-label="Blog articles">
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
