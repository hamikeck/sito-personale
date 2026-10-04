import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Miniature dei video YouTube (components/site/youtube-player.tsx).
  images: {
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
