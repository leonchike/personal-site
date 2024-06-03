/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeBlock from "@/components/blog/code-block";

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="text-lg text-blue-500 pb-2">
      {props.children}
    </h1>
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="font-semibold pb-2">
      {props.children}
    </h2>
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="font-semibold pb-2 text-[0.8888rem]">
      {props.children}
    </h3>
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p {...props} className="leading-6 mb-6 text-[0.8888rem]">
      {props.children}
    </p>
  ),
  img: (props: React.HTMLProps<HTMLImageElement>) => (
    <div className="-mx-4 md:-mx-8">
      <img {...props} className="w-full h-auto" />
    </div>
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <CodeBlock {...props}>{props.children}</CodeBlock>
  ),
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
