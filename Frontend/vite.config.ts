import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: process.env.RAILWAY_ENVIRONMENT || process.env.VERCEL ? false : undefined,
});
