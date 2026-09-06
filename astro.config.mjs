import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kedreamix.github.io',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'everforest-dark',
      wrap: true,
    },
  },
});
