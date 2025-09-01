import fg from "fast-glob";
import fs from "fs/promises";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { create } from "xmlbuilder2";

import { BLOG_URL, SITE_TITLE, SITE_URL } from "../consts";
import type { BlogPostSchema } from "../content/config";

const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

const BASE_FEED_OBJECT = {
  feed: {
    "@xmlns": "http://www.w3.org/2005/Atom",
    id: SITE_URL + "/",
    title: SITE_TITLE,
    updated: "",
    link: [
      {
        "@rel": "self",
        "@href": `${SITE_URL}/atom.xml`,
      },
      {
        "@href": SITE_URL,
      },
    ],
    author: {
      name: "Zahra Traboulsi",
      uri: SITE_URL,
    },
  },
};

async function buildPostItemFromFile(filePath: string) {
  const filename = filePath.split("/").pop()?.split(".")[0];
  const source = await fs.readFile(filePath, "utf-8");

  const { content, data } = matter(source);
  const { title, description, pubDate, draft } = data as BlogPostSchema;

  return {
    title,
    description,
    pubDate: new Date(pubDate),
    id: BLOG_URL + "/" + filename,
    link: BLOG_URL + "/" + filename,
    content,
    draft: !!draft,
  };
}

interface PostData {
  title: string;
  description: string;
  pubDate: Date;
  id: string;
  link: string;
  content: string;
  draft: boolean;
}

function markdownToHtml(content: string): string {
  return sanitizeHtml(
    markdown
      .render(content)
      .replace('src="/', `src="${SITE_URL}/`)
      .replace('href="/', `href="${SITE_URL}/`),
  );
}

function convertPostItemToXML(post: PostData) {
  return {
    title: post.title,
    link: {
      "@href": post.link,
    },
    id: post.link,
    // TODO: wire in updated date from frontmatter
    updated: post.pubDate.toISOString(),
    content: {
      "@type": "html",
      $: markdownToHtml(post.content),
    },
  };
}

async function generateAtomFeed() {
  const files = await fg("src/content/blog/*.md");

  const postItems: PostData[] = await Promise.all(
    files.map((file) => buildPostItemFromFile(file)),
  );

  postItems.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  postItems.filter((post) => post.draft !== true);

  const latestPubDate = postItems[0].pubDate.toISOString();

  const entries = postItems
    .filter((item) => !item.draft)
    .map((post) => convertPostItemToXML(post));
  const feedObject: any = { ...BASE_FEED_OBJECT };
  feedObject.feed.entry = entries;
  feedObject.feed.updated = latestPubDate;

  const doc = create({ version: "1.0", encoding: "UTF-8" }, feedObject);
  const xml = doc.end({ prettyPrint: true });

  const output_dir = "./dist/";
  await fs.access(output_dir);
  await fs.writeFile(`${output_dir}atom.xml`, xml, "utf-8");
}

try {
  generateAtomFeed();
  console.info("✨ Built atom feed successfully!");
} catch (error) {
  console.error(error);
  process.exit(1);
}
