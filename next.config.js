/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Ensure proper handling of static assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig 