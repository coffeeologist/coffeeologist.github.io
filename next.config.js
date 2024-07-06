/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
