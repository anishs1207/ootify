import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
