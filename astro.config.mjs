// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
//
// /insights and /legal redirects to web.plyaz.net/en/* are NOT in
// Astro's `redirects` config — `[...slug]` (spread / catch-all)
// sources fail the build with `GetStaticPathsRequired`. Instead the
// rules live in `vercel.json` at the repo root and execute at the
// Vercel edge. The `.astro` redirect pages were also removed so
// the BOA doesn't claim these routes, leaving the edge rules to
// take effect.
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    keystatic()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
// Force Vercel to invalidate any cached build output (20260602-024244)
