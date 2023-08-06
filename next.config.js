/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/report',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
