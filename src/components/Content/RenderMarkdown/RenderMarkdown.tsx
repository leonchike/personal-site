import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import style from "./render-markdown.module.css";

const RenderMarkdown = ({ content }: { content: string }) => {
  return (
    <Wrapper>
      <ReactMarkdown className={style.reactMarkDown}>{content}</ReactMarkdown>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default RenderMarkdown;
