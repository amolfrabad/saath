/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/en', // default locale
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
