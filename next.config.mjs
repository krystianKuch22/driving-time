/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["pl", "en"], // Obsługiwane języki
    defaultLocale: "pl", // Domyślny język
    localeDetection: false,
  },
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;
