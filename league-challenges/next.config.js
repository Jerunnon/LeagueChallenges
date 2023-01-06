/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/random'
      }
    ],
    domains: ['source.unsplash.com', 'placeimg.com']
  },
};

module.exports = nextConfig;
