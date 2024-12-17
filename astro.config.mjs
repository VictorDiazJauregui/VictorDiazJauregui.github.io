import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://victordiazjauregui.github.io',
  base: '/',
  build: {
    assets: '_assets'
  },
  devToolbar: {
    enabled: false,
  }
})
