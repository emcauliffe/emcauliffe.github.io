import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

import avrasm from "highlight.js/lib/languages/avrasm";

export default async function markdownToHtml(markdown: string) {
  const result = await serialize(markdown, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeKatex,
        [rehypeHighlight, { languages: { avrasm } }],
      ],
    },
  });
  return result;
}
