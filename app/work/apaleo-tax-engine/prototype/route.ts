import fs from "node:fs/promises";
import path from "node:path";
import { isUnlocked } from "@/lib/tax-engine-gate";

// Serves the live tax-engine prototype for the case study's iframe. The
// file lives outside /public so it sits behind the same password gate as
// the page itself.
export async function GET() {
  if (!(await isUnlocked())) {
    return new Response("Not found", { status: 404 });
  }

  const html = await fs.readFile(
    path.join(process.cwd(), "content", "tax-engine-v5.html"),
    "utf8",
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
