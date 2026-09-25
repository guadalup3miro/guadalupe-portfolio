"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  GATE_COOKIE,
  GATE_PATH,
  expectedToken,
  passwordMatches,
} from "@/lib/tax-engine-gate";

export async function unlock(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const token = expectedToken();

  if (!token || !passwordMatches(password)) {
    redirect(`${GATE_PATH}?error=1`);
  }

  (await cookies()).set(GATE_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: GATE_PATH,
    maxAge: 60 * 60 * 24 * 30,
  });
  redirect(GATE_PATH);
}
