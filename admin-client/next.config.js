/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "https://s3.ap-south-1.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
