/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: 'export', 
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
