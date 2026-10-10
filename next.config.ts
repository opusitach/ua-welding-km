import type { NextConfig } from "next";

// Static export: `next build` emits plain HTML/CSS/JS into `out/`, served by nginx (see nginx.conf).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
