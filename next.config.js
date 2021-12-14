module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/api',
        destination: '/api/games',
        permanent: true,
      },
    ]
  },
}
