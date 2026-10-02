/**
 * Prefixes a path to a file in `public/` with the deployment base path.
 * Next.js adds basePath to <Link> and routes automatically, but not to
 * plain <a href> links, <Image src> strings or metadata image URLs.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
