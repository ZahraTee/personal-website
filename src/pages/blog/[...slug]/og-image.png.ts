import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { findLargestUsableFontSize } from "@altano/satori-fit-text";

interface Props {
  props: { post: CollectionEntry<"blog"> };
}

export const GET = async function get({ props }: Props) {
  const cgBoldFontData = await fs.readFile(
    "./public/fonts/CabinetGrotesk-Bold.woff"
  );
  const cgRegularFontData = await fs.readFile(
    "./public/fonts/CabinetGrotesk-Regular.woff"
  );

  const pjsFontData = await fs.readFile(
    "./public/fonts/PlusJakartaSans-Variable.woff"
  );

  const titleFontSize = await findLargestUsableFontSize({
    text: props.post.data.title,
    font: {
      name: "Cabinet Grotesk",
      data: cgBoldFontData,
      weight: 600,
    },
    maxWidth: 580,
    maxHeight: 320,
  });

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "48px 48px 48px 564px",
          backgroundColor: "#0f0302",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: `url("https://zahra.dev/og-bg.png")`,
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    children: props.post.data.title,
                    style: {
                      fontFamily: "Cabinet Grotesk",
                      fontWeight: 600,
                      color: "white",
                      fontSize: titleFontSize,
                      lineHeight: "1",
                      textWrap: "balance",
                      maxWidth: "500px",
                    },
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                paddingTop: "32px",
                borderTop: "4px solid #fff6",
              },
              children: [
                {
                  type: "span",
                  props: {
                    children: "zahra.dev",
                    style: {
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 400,
                      color: "#ffff",
                      fontSize: "2.5em",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Cabinet Grotesk",
          data: cgRegularFontData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Cabinet Grotesk",
          data: cgBoldFontData,
          weight: 600,
          style: "normal",
        },
        {
          name: "Plus Jakarta Sans",
          data: pjsFontData,
          weight: 300,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
