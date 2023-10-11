/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  publicRuntimeConfig: {
      contextPath: process.env.NODE_ENV === 'production' ? '' : '',
      uploadPath: process.env.NODE_ENV === 'production' ? '/api/upload' : '/api/upload'
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

