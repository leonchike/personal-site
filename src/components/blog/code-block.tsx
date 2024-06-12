"use client";

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import clsx from "clsx";

export default function CodeBlock({ children }: { children: any }) {
  const language =
    children?.props?.className?.replace(/language-/, "") || "shell";
  const code = children.props.children;
  return (
    <Highlight theme={themes.nightOwlLight} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="rounded-lg md:-mx-4 overflow-clip shadow-sm mb-6 border-[1px] border-gray-200">
          <div className="bg-gray-200 py-1 px-2 flex justify-end">
            <div className="text-[0.75rem] text-gray-600 font-semibold uppercase">
              {language}
            </div>
          </div>
          <div className="text-[0.78rem] overflow-x-auto bg-[#fbfbfb]">
            <pre className={clsx(className, "p-4 pb-0")} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} key={i}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  );
}
