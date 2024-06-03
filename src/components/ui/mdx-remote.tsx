// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="text-lg text-blue-500 pb-2">
      {props.children}
    </h1>
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
