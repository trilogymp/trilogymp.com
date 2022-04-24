/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
