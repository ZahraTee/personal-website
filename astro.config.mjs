import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://zahra.dev',
	integrations: [mdx(), sitemap()],
	defaultLocale: "en",
    locales: ["en"],
});
