/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "pl"], // Obsługiwane języki
    defaultLocale: "pl", // Domyślny język
  },
};

export default nextConfig;
