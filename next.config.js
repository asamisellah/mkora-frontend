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
  images: {
    loader: "custom",
    loaderFile: './ImageLoader.js'
  },
}

module.exports = nextConfig
