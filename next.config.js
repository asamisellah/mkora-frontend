/** @type {import('next').NextConfig} */
const nextConfig = {
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
