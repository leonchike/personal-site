import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import style from "./render-markdown.module.css";

const RenderMarkdown = ({ content }: { content: string }) => {
  return (
    <article className={style.reactMarkDown}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        className={style.reactMarkDown}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default RenderMarkdown;
