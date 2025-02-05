const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/learnfast/' : '',
  basePath: isProd ? '/learnfast' : '',
  output: 'export'
};

export default nextConfig;

