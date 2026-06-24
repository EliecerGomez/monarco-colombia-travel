// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Self-host deploy (ColombiaHosting / cPanel-LiteSpeed, static).
  // We do NOT force Nitro on: outside a Lovable build the wrapper produces a
  // native, Vite-only TanStack Start build (client -> dist/client, server ->
  // dist/server/server.js). That native layout is what the prerenderer's
  // preview server expects, so prerendering works and emits static HTML.
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // Prerender every route to static HTML so meta/OG tags are in the initial
    // payload (SEO + social/WhatsApp link previews), not injected client-side.
    prerender: { enabled: true, crawlLinks: true },
  },
});
