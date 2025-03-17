/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure proper handling of static assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf|doc|docx|xls|xlsx|zip|rar|wav|mp3)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/',
            outputPath: 'static/',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 