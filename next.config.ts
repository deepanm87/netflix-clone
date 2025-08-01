import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com"]
  }
}

export default nextConfig
