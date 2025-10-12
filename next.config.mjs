/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // For traditional server deployment
  output: 'standalone',
  trailingSlash: false,
  reactStrictMode: false,
  // Production optimizations
  poweredByHeader: false,
  compress: true,
}

export default nextConfig