import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.allrecipes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pcrm.org',
      },
      {
        protocol: 'https',
        hostname: 'minimalistbaker.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jocooks.com',
      },
      {
        protocol: 'https',
        hostname: 'bakerbynature.com',
      },
      {
        protocol: 'https',
        hostname: 'www.seriouseats.com',
      },
      {
        protocol: 'https',
        hostname: 'images.themodernproper.com',
      },
    ],
  },
};

export default nextConfig;