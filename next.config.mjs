/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ybx_static/out',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
