// Prefix an internal absolute path with the site's base path so links and
// assets resolve when the landing page is mounted under a path prefix (e.g.
// `/work/wordpress-skills`) as a separate Cloudflare Worker. Falls back to a
// plain path when no base is set (local dev / tests, where BASE_URL is `/`).
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}
