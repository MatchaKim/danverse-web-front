import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@gorae-ui-local': path.resolve(__dirname, "../gorae-ui-info-web-front/src"),
    };
    return config;
  },
};

export default nextConfig;
