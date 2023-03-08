import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDXRemote } from "next-mdx-remote/rsc";
import { compile } from "@mdx-js/mdx";
import MDXComponent from "@/components/MDXComponent";

const BlogContent = ({
  category,
  page,
}: {
  category: string;
  page: string;
}) => {
  // // read mdx file
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`/api/blog`)
      .then((res) => {
        setContent(res.data.file);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!content) return null;

  // const markdown = await;
  console.log(content);

  return <div>Blog</div>;
};

export default BlogContent;
