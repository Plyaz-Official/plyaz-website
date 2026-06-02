// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  // Edge-level redirects. The Vercel adapter materialises each entry
  // into the Build Output API's `routes` config so requests are 308'd
  // at the edge BEFORE Astro serves any static HTML — bypassing the
  // meta-refresh fallback `Astro.redirect()` produces in `output:
  // 'static'`. Destinations target the webapp's locale-prefixed paths
  // directly so the browser never hops through the `/blog → /en/blog`
  // 307. `[...slug]` is the Astro catch-all syntax — paired with the
  // matching path-param in the destination, the segment(s) pass
  // through verbatim.
  redirects: {
    '/insights': {
      status: 308,
      destination: 'https://web.plyaz.net/en/blog',
    },
    '/insights/[...slug]': {
      status: 308,
      destination: 'https://web.plyaz.net/en/blog/[...slug]',
    },
    '/legal': {
      status: 308,
      destination: 'https://web.plyaz.net/en/legal',
    },
    '/legal/[...slug]': {
      status: 308,
      destination: 'https://web.plyaz.net/en/legal/[...slug]',
    },
  },
  integrations: [
    react(),
    keystatic()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
