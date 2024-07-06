/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'export',
  basePath: '/coffeeologist.github.io',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
