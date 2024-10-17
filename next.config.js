/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['c.animaapp.com'],
  },
  output: 'standalone',
}

module.exports = nextConfig
