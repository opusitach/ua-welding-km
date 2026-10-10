type Props = { height?: number; className?: string };

/** Raster logo (1364:430) as <picture>: WebP with PNG fallback, intrinsic size set to avoid layout shift. */
export default function Logo({ height = 52, className }: Props) {
  const width = Math.round((height * 1364) / 430);
  const sizes = `${width}px`;
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet="/images/logo-104.webp 330w, /images/logo-156.webp 495w, /images/logo-216.webp 685w"
        sizes={sizes}
      />
      <img
        src="/images/logo-104.png"
        srcSet="/images/logo-104.png 330w, /images/logo-156.png 495w, /images/logo-216.png 685w"
        sizes={sizes}
        width={width}
        height={height}
        alt="UA WELDING-KM s.r.o."
        decoding="async"
      />
    </picture>
  );
}
