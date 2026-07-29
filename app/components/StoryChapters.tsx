"use client";

import { useEffect, useRef } from "react";
import { ResponsiveImage } from "@/app/components/ResponsiveImage";
import type { ContentBlock } from "@/app/lib/site-content";

type StoryImage = {
  src: string;
  alt: string;
};

export function StoryChapters({
  blocks,
  images,
}: {
  blocks: readonly ContentBlock[];
  images: readonly StoryImage[];
}) {
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scenes = Array.from(journey.querySelectorAll<HTMLElement>(".story-chapter"));
    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;

      scenes.forEach((scene) => {
        const image = scene.querySelector<HTMLElement>(".story-chapter__image");
        if (!image) return;

        const bounds = scene.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > viewportHeight) return;

        const progress = (viewportHeight - bounds.top) / (viewportHeight + bounds.height);
        const offset = (progress - 0.5) * 90;
        image.style.setProperty("--parallax-offset", `${offset.toFixed(1)}px`);
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="story-journey" id="story-journey" ref={journeyRef} aria-labelledby="story-chapters-title">
      <header className="story-journey__intro wrap">
        <p className="section-label">The story continues</p>
        <h2 id="story-chapters-title">Five chapters. One extraordinary place.</h2>
        <p>Scroll through the moments that made St Luke’s — from a church built for a changing city to the open-air landmark Liverpool knows today.</p>
      </header>

      <div className="story-chapters">
        {blocks.map((block, index) => {
          const image = images[(index + 1) % images.length];
          const sectionId = "id" in block ? block.id : undefined;

          return (
            <article
              className={`story-chapter ${index % 2 === 1 ? "story-chapter--right" : ""}`}
              id={sectionId}
              key={block.heading}
            >
              <div className="story-chapter__image" aria-hidden="true">
                <ResponsiveImage src={image.src} alt="" sizes="100vw" />
              </div>
              <div className="story-chapter__shade" aria-hidden="true" />
              <div className="story-chapter__inner wrap">
                <div className="story-chapter__copy">
                  <p className="story-chapter__number">
                    <span>Chapter</span>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3>{block.heading}</h3>
                  <p>{block.text}</p>
                </div>
              </div>
              <span className="sr-only">{image.alt}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
