import type { NextConfig } from "next";

/**
 * The site is exported as static HTML (`out/`) and hosted on GitHub Pages
 * at https://mibrahiim98.github.io/portfolio — a project page, so every URL
 * lives under the `/portfolio` base path. The deploy workflow sets
 * GITHUB_PAGES=true; locally the base path stays empty.
 */
const basePath = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // The default image optimizer needs a server; static hosting serves files as-is.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
