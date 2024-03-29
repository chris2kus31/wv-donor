const withSvgr = require("next-plugin-svgr");

/** @type {import('next').NextConfig} */

const API_KEY = process.env.WV_DONOR_KEY;

const nextConfig = withSvgr({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore for now, as there is vscode typescript version conflict with that of the workspace
  },
  svgrOptions: {
    titleProp: true,
    icon: true,
  },
  webpack(config) {
    return config;
  },
  publicRuntimeConfig: {
    API_KEY,
  },
});

module.exports = nextConfig;
