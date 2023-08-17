import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import style from "./render-markdown.module.css";

const RenderMarkdown = ({ content }: { content: string }) => {
  return (
    <Wrapper className={style.reactMarkDown}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        className={style.reactMarkDown}
      >
        {content}
      </ReactMarkdown>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RenderMarkdown;
