/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true }
  // ❌ remove the i18n block when using app/[locale]
  // i18n: {
  //   locales: ['en', 'hi', 'mr'],
  //   defaultLocale: 'en'
  // }
};

module.exports = nextConfig;
