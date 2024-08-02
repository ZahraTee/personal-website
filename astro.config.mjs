import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  defaultLocale: "en",
  locales: ["en"],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          content: {
            type: "text",
            value: "#",
          },
          headingProperties: {
            className: ["anchor"],
          },
          properties: {
            className: ["anchor-link"],
          },
        },
      ],
    ],
  },
});
