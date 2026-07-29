import Link from "next/link";
import { ArrowIcon } from "@/app/components/ArrowIcon";
import { PageHero } from "@/app/components/PageHero";
import { ResponsiveImage } from "@/app/components/ResponsiveImage";
import { SiteFooter } from "@/app/components/SiteFooter";
import { posts } from "@/app/lib/site-content";
import { pageMetadata } from "@/app/lib/metadata";
import { assetPath } from "@/app/lib/site-path";

export const metadata = pageMetadata({
  title: "Blog & stories",
  description: "News, reflections and stories from St Luke’s Bombed Out Church, its programme, partners and community.",
  path: "/blog",
});

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
            <Link className="post-card__image" href={`/blog/${post.slug}`} prefetch={false}>
              <ResponsiveImage
                src={post.image}
                alt={post.imageAlt}
                sizes="(max-width: 600px) calc(100vw - 32px), 31vw"
              />
            </Link>
            <p className="eyebrow">{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${post.date}T12:00:00`))}</p>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.excerpt}</p>
            <Link className="text-link" href={`/blog/${post.slug}`}>Read story <ArrowIcon /></Link>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
