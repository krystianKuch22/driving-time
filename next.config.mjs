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
  i18n: {
    locales: ["pl", "en"], // Obsługiwane języki
    defaultLocale: "pl", // Domyślny język
    localeDetection: false,
  },
};

export default nextConfig;
