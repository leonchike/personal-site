// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// const withMDX = require("@next/mdx")();
import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-.*",
      },
    ],
  },
};

// module.exports = withMDX(nextConfig);
export default withMDX(nextConfig);
