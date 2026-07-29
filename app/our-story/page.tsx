import { PageHero } from "@/app/components/PageHero";
import { ResponsiveImage } from "@/app/components/ResponsiveImage";
import { SiteFooter } from "@/app/components/SiteFooter";
import { StoryChapters } from "@/app/components/StoryChapters";
import { pages, site } from "@/app/lib/site-content";
import { pageMetadata } from "@/app/lib/metadata";
import { assetPath } from "@/app/lib/site-path";

const story = pages.story;

export const metadata = pageMetadata({
  title: "Our story",
  description: story.intro,
  path: "/our-story",
});

const storyMoments = [
  { year: "1811", label: "Foundation stone laid", text: "The church began as part of a growing Liverpool, built to serve a fast-changing city." },
  { year: "1832", label: "Church opens", text: "Its tower and stonework quickly became part of the city’s mental map and street life." },
  { year: "1941", label: "Blitz damage", text: "An incendiary bomb left the building roofless, and the ruin became a place of memory." },
  { year: "Today", label: "A living landmark", text: "St Luke’s now holds culture, heritage, hospitality and quieter moments side by side." },
] as const;

const storyImages = [
  { src: assetPath("/images/church-roof.jpg"), alt: "The open roof and stone arches inside St Luke’s." },
  { src: assetPath("/images/church-arch.jpg"), alt: "St Luke’s tower framed by a weathered brick arch." },
  { src: assetPath("/images/church-wall.jpg"), alt: "The long red-brick wall and arches of St Luke’s." },
  { src: assetPath("/images/church-nave.jpg"), alt: "The ruined nave looking towards the tower and open sky." },
  { src: assetPath("/images/garden-crowd.jpg"), alt: "People gathering beside St Luke’s in the sunny garden." },
] as const;

export default function StoryPage() {
  return (
    <main className="story-page">
      <PageHero {...story}>
        <a className="button button--light" href="#story-journey">Explore the story <span aria-hidden="true">↓</span></a>
      </PageHero>

      <div className="verify-note wrap">
        <strong>Check before you travel</strong>
        {site.notice}
      </div>

      <section className="story-overview wrap" aria-labelledby="story-overview-title">
        <div>
          <p className="section-label">Why it matters</p>
          <h2 id="story-overview-title">A church, a memorial and a place people still use.</h2>
          <p className="story-overview__lead">
            St Luke’s is powerful because it holds more than one identity at once. It is a surviving piece of Liverpool’s built history, a reminder of wartime loss and a place that continues to welcome new memories.
          </p>
        </div>
        <div className="story-moments" aria-label="Key moments in the history of St Luke’s">
          {storyMoments.map((moment) => (
            <article key={moment.year} className="story-moment">
              <span>{moment.year}</span>
              <h3>{moment.label}</h3>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-gallery wrap" aria-label="Views of St Luke’s">
        <div className="story-gallery__lead">
          <ResponsiveImage src={storyImages[0].src} alt={storyImages[0].alt} sizes="(max-width: 600px) 100vw, 62vw" />
        </div>
        <div className="story-gallery__stack">
          <ResponsiveImage src={storyImages[1].src} alt={storyImages[1].alt} sizes="(max-width: 600px) 100vw, 34vw" />
          <ResponsiveImage src={storyImages[2].src} alt={storyImages[2].alt} sizes="(max-width: 600px) 100vw, 34vw" />
        </div>
      </section>

      <section className="story-quote">
        <div className="wrap">
          <p>Left open to the sky, St Luke’s became not an ending, but a different kind of beginning for the city around it.</p>
        </div>
      </section>

      <StoryChapters blocks={story.blocks} images={storyImages} />

      <SiteFooter />
    </main>
  );
}
