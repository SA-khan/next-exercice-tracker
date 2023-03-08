/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ['cdn.weatherapi.com', 'media.cnn.com'],
    formats: ["image/webp"],
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
