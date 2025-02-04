/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three-globe'],
  distDir: 'build',
  basePath: "/learnfast",
  output: 'export',
};

module.exports = nextConfig;
