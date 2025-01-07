/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n:{
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
