/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeBlock from "@/components/blog/code-block";

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className=" text-blue-500 pb-2 text-lg">
      {props.children}
    </h1>
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="font-semibold pb-2 text-base pt-6">
      {props.children}
    </h2>
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="font-semibold pb-2 text-base">
      {props.children}
    </h3>
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p {...props} className="mb-6">
      {props.children}
    </p>
  ),
  img: (props: React.HTMLProps<HTMLImageElement>) => (
    <div className="-mx-4 md:-mx-12 lg:-mx-24">
      <img {...props} className="w-full h-auto" />
    </div>
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <CodeBlock {...props}>{props.children}</CodeBlock>
  ),
  ol: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >
  ) => (
    <ol {...props} className="list-decimal ml-5 mb-6" type="1">
      {props.children}
    </ol>
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul {...props} className="list-disc ml-5 mb-6 ">
      {props.children}
    </ul>
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li {...props} className="mb-2">
      {props.children}
    </li>
  ),
  Summary: (props: React.HTMLProps<HTMLDivElement>) => (
    <div {...props} className="border-l-4 border-dark-gold pl-4 mb-6">
      {props.children}
    </div>
  ),
  LargeQuote: (props: React.HTMLProps<HTMLDivElement>) => (
    <div {...props} className="flex flex-col items-center text-center my-8">
      <div className="w-16 border-t-2 border-dark-gold my-4"></div>
      <blockquote className="font-sans text-2xl md:text-3xl font-medium text-gray-800 w-[90%] pt-6 leading-12">
        {props.children}
      </blockquote>
      <div className="w-16 border-t-2 border-dark-gold my-4"></div>
    </div>
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
