import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

// Reads real pixel dimensions for a file under /public, so masonry cards
// can size themselves to the actual uploaded image instead of a fixed
// cycling aspect-ratio pattern. Synchronous + cached so it's cheap to call
// from a server component on every render.
const cache = new Map<string, { width: number; height: number } | null>();

export function getPublicImageSize(
  publicPath: string,
): { width: number; height: number } | null {
  if (cache.has(publicPath)) return cache.get(publicPath) ?? null;

  let result: { width: number; height: number } | null = null;
  try {
    const filePath = path.join(process.cwd(), "public", publicPath);
    const buffer = fs.readFileSync(filePath);
    const { width, height } = imageSize(buffer);
    if (width && height) result = { width, height };
  } catch {
    result = null;
  }

  cache.set(publicPath, result);
  return result;
}
