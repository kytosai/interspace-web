/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['interspace-api.kytosai.com', 'cloudflare-ipfs.com'],
  },
};

module.exports = nextConfig;
