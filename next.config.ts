import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
