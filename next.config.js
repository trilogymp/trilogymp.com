/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  images: {
    loader: 'custom',
  },
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    const headers = [];

    if (process.env.NODE_ENV !== 'production') {
      headers.push({
        source: '/:path*',
        headers: [
          {
            key: 'robots',
            value: 'noindex, nofollow',
          },
          {
            key: 'x-robots-tag',
            value: 'noindex, nofollow',
          },
        ],
      });
    }

    return headers;
  },
};

module.exports = nextConfig;
