/* This custom responsive image pipeline supplies pre-sized WebP sources for static and worker builds. */
/* eslint-disable @next/next/no-img-element */

type ImageAsset = {
  width: number;
  height: number;
  variants: readonly number[];
};

const imageAssets: Record<string, ImageAsset> = {
  "church-arch.jpg": { width: 3600, height: 1440, variants: [480, 960, 1920] },
  "church-nave.jpg": { width: 1242, height: 1740, variants: [480, 828, 1200] },
  "church-roof.jpg": { width: 3600, height: 1440, variants: [480, 960, 1920] },
  "church-wall.jpg": { width: 3600, height: 1440, variants: [480, 960, 1920] },
  "garden-bar.jpg": { width: 1014, height: 1742, variants: [480, 800, 1000] },
  "garden-crowd.jpg": { width: 1010, height: 1742, variants: [480, 800, 1000] },
};

function variantPath(src: string, width: number) {
  return src.replace(/\.jpg$/, `-${width}.webp`);
}

export function ResponsiveImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const fileName = src.split("/").at(-1) ?? "";
  const asset = imageAssets[fileName];

  if (!asset) {
    return <img className={className} src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />;
  }

  const largestVariant = asset.variants.at(-1) ?? asset.width;

  return (
    <img
      className={className}
      src={variantPath(src, largestVariant)}
      srcSet={asset.variants.map((width) => `${variantPath(src, width)} ${width}w`).join(", ")}
      sizes={sizes}
      width={asset.width}
      height={asset.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
    />
  );
}
