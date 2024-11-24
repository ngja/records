export const CDN_BASE_URL = process.env.CDN_BASE_URL

export function cdn(path: string): string {
  return `${CDN_BASE_URL}${path}`;
}