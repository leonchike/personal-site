"use client";

import React from "react";
import MDXComponent from "@/components/MDXComponent";

// Data
import * as About from "@/data/about/about.mdx";

const HomeAbout = () => {
  return <MDXComponent File={About.default} />;
};

export default HomeAbout;
