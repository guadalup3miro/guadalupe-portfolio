import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The tax-engine prototype is read from disk by its route handler (kept
  // out of /public so it stays behind the case study's password gate).
  outputFileTracingIncludes: {
    "/work/apaleo-tax-engine/prototype": ["./content/tax-engine-v5.html"],
  },
};

export default nextConfig;
