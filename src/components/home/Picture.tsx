type Source = { src: string; width: number };

type PictureProps = {
  /** Path without size/extension, e.g. "/images/welder" -> /images/welder-640.webp */
  base: string;
  /** Size suffixes and their intrinsic pixel widths, e.g. [{suffix: 640, width: 640}] */
  variants: { suffix: number; width: number }[];
  fallbackExt: "jpg" | "png";
  alt: string;
  width: number;
  height: number;
  sizes: string;
  /** Above the fold: load eagerly instead of lazy. */
  eager?: boolean;
  /** LCP image: fetchpriority="high". */
  highPriority?: boolean;
  className?: string;
  imgClassName?: string;
};

/** <picture> with WebP source + JPG/PNG fallback, explicit dimensions, lazy by default. */
export default function Picture({
  base,
  variants,
  fallbackExt,
  alt,
  width,
  height,
  sizes,
  eager = false,
  highPriority = false,
  className,
  imgClassName,
}: PictureProps) {
  const srcSet = (ext: string) =>
    variants
      .map<Source>((v) => ({ src: `${base}-${v.suffix}.${ext}`, width: v.width }))
      .map((s) => `${s.src} ${s.width}w`)
      .join(", ");
  const largest = variants[variants.length - 1];

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`${base}-${largest.suffix}.${fallbackExt}`}
        srcSet={srcSet(fallbackExt)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={imgClassName}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "auto" : "async"}
        fetchPriority={highPriority ? "high" : undefined}
      />
    </picture>
  );
}

export const LOGO_VARIANTS = [
  { suffix: 104, width: 330 },
  { suffix: 156, width: 495 },
  { suffix: 216, width: 685 },
];
export const WELDER_VARIANTS = [
  { suffix: 640, width: 640 },
  { suffix: 960, width: 960 },
  { suffix: 1122, width: 1122 },
];
