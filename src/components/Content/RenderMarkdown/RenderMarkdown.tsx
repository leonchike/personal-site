// import React from "react";
// import styled from "styled-components";
// import ReactMarkdown from "react-markdown";

// import style from "./render-markdown.module.css";

// const RenderMarkdown = ({ content }: { content: string }) => {
//   return (
//     <Wrapper>
//       <ReactMarkdown className={style.reactMarkDown}>{content}</ReactMarkdown>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div``;

// export default RenderMarkdown;

// Pure Rehype

// import React, { createElement, Fragment, useEffect, useState } from "react";
// import styled from "styled-components";
// import { unified } from "unified";
// import rehypeParse from "rehype-parse";
// import rehypeReact from "rehype-react";

// import style from "./render-markdown.module.css";

// const RenderMarkdown = ({ content }: { content: string }) => {
//   const [Content, setContent] = useState(Fragment);

//   console.log(content);

//   useEffect(() => {
//     unified()
//       .use(rehypeParse, { fragment: true })
//       .use(rehypeReact, {
//         createElement,
//         Fragment,
//         // components: {
//         //   p: StyledParagraph,
//         // },
//       })
//       .process(content)
//       .then((file) => {
//         setContent(file.result);
//       });
//   }, [content]);

//   // return Content;
//   return <Wrapper className={style.reactMarkDown}>{Content}</Wrapper>;
// };

// const Wrapper = styled.div``;

// export default RenderMarkdown;

// A mix
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
