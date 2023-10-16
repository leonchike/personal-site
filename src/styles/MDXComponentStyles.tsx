"use client";

import React, { ReactNode, CSSProperties } from "react";

interface StyledProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const MDXComponentStyles = {
  p: (props: StyledProps) => (
    <p
      {...props}
      style={{
        fontSize: "1.25rem",
        lineHeight: "2.5rem",
        ...props.style,
      }}
    />
  ),
  a: (props: StyledProps) => (
    <a
      {...props}
      style={{
        color: "var(--color-offblack)",
        textDecoration: "underline",
        ...props.style,
      }}
    />
  ),
};

export default MDXComponentStyles;
