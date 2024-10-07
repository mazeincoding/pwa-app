import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const config = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  register: true,
  skipWaiting: true,
})(nextConfig);

export default config;
