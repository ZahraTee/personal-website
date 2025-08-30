import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export const GET: APIRoute = async function get() {
  const cgBoldFontData = await fs.readFile(
    "./public/fonts/CabinetGrotesk-Bold.woff",
  );
  const cgRegularFontData = await fs.readFile(
    "./public/fonts/CabinetGrotesk-Regular.woff",
  );

  const svg = await satori(
    {
      children: null,
      key: "",
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "64px 64px 64px 564px",
          backgroundColor: "#0f0302",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: `url("https://zahra.dev/og-bg.png")`,
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    children: SITE_TITLE,
                    style: {
                      fontFamily: "Cabinet Grotesk",
                      fontWeight: 600,
                      color: "white",
                      fontSize: "7em",
                      lineHeight: "1",
                      textWrap: "balance",
                      width: "9ch",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      position: "absolute",
                      left: "470px",
                      top: "120px",
                      height: "120px",
                      width: "12px",
                      backgroundColor: "#56e6ff99",
                    },
                  },
                },
              ],
            },
          },
          {
            type: "span",
            props: {
              children: SITE_DESCRIPTION,
              style: {
                fontFamily: "Cabinet Grotesk",
                fontWeight: 400,
                color: "white",
                fontSize: "2.5em",
              },
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
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
