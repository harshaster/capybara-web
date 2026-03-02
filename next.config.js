/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["api.capy.lol"],
  },
};

module.exports = nextConfig;
