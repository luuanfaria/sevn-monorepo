/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
