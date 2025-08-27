import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\\\\.svg$/,
      use: ["@svgr/webpack"],
    });
    
    // if (!isServer) {
    //   config.resolve.fallback = {
    //     fs: false,
    //     path: false,
    //   };
    // }

    return config;
  },
  // experimental: {
  //   serverComponentsExternalPackages: ['fs', 'path'],
  // },
};

export default nextConfig;
