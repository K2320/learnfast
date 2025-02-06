/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three-globe"],
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]
    return config
  },
  images: {
    domains: ["example.com"], // Add the domain where your Nikola Tesla image is hosted
  },
}

module.exports = nextConfig

