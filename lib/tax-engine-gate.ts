import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

// Simple shared-password gate for /work/apaleo-tax-engine while the project
// is still in development. Not real auth: one password (TAX_ENGINE_PASSWORD
// env var), and a cookie holding a hash of it. Changing the password
// invalidates every existing cookie. With no password set, the page stays
// locked.
export const GATE_COOKIE = "tax-engine-access";
export const GATE_PATH = "/work/apaleo-tax-engine";

function hash(value: string) {
  return createHash("sha256").update(`tax-engine:${value}`).digest("hex");
}

export function expectedToken() {
  const password = process.env.TAX_ENGINE_PASSWORD;
  return password ? hash(password) : null;
}

export function passwordMatches(input: string) {
  const expected = expectedToken();
  if (!expected) return false;
  return timingSafeEqual(Buffer.from(hash(input)), Buffer.from(expected));
}

export async function isUnlocked() {
  const expected = expectedToken();
  if (!expected) return false;
  const token = (await cookies()).get(GATE_COOKIE)?.value;
  if (!token || token.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
