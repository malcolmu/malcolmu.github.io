import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/app/components/PageHero";
import { SiteFooter } from "@/app/components/SiteFooter";
import { posts } from "@/app/lib/site-content";

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })); }

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <main>
      <title>{post.title} | St Luke’s Bombed Out Church</title>
      <meta name="description" content={post.excerpt} />
      <PageHero eyebrow="Blog & stories" title={post.title} intro={post.excerpt} image={post.image} alt={post.imageAlt}>
        <Link href="/blog" className="button button--light">All stories <span aria-hidden="true">↗</span></Link>
      </PageHero>
      <article className="article wrap">
        <p className="eyebrow">{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${post.date}T12:00:00`))}</p>
        {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </article>
      <SiteFooter />
    </main>
  );
}
