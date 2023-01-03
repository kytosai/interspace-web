/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'interspace-api.kytosai.com',
      'cloudflare-ipfs.com',
      'loremflickr.com',
      'localhost',
      'localhost:9050',
    ],
  },
};

module.exports = nextConfig;
