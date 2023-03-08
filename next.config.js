/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  disable: isProd ? false : true,
  dest: "public",
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: isProd ? false : true,
  swcMinify: true,
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "asset.cloudinary.com",
      },
    ],
  },
});
