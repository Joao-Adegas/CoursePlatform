import type { NextConfig } from "next";
import test from "node:test";

const nextConfig: NextConfig = {
  turbopack:{
    rules:{
      "*.svg":{
        loaders:["@svgr/webpack"],
        as: "*.js"
      }
    }
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/
    })
  }
};

export default nextConfig;
