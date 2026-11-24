import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` produces a plain /out folder
  // that can be uploaded to Cloudflare Pages, Netlify or any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
