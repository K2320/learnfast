/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three-globe'],
  distDir: 'build',
}

module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? '/learnfast':'',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/learnfast':'',
  output: 'export',
};


