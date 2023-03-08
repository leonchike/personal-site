import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogContent = ({
  category,
  page,
}: {
  category: string;
  page: string;
}) => {
  // read mdx file
  const [content, setContent] = useState("");

  // use axios to get mdx file from https://storage.googleapis.com/mdx-files/rebuildee.mdx; with headers Access-Control-Allow-Origin: * and Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
  useEffect(() => {
    axios
      .get(`https://storage.googleapis.com/mdx-files/${page}.mdx`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(content);

  return <div>blog content</div>;
};

export default BlogContent;
