import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    }
    return config;
  },
};

export default nextConfig;
