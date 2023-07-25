/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['api.slingacademy.com']
  }
}

module.exports = nextConfig
