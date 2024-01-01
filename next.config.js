/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    domains: [''],
  },
future: {
    serverComponents: true, // Enable Server Actions
  },
experimental: {
    serverActions: true,
  },
 testEnvironment: "node", 
}
