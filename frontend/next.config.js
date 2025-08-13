/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/frontend' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/frontend' : '',
  env: {
    API_BASE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://yourdomain.com/api' 
      : 'http://localhost/api'
  }
}

module.exports = nextConfig