/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nbaiw6gccbuytvgc.public.blob.vercel-storage.com',
      },
    ],
  },
};

module.exports = nextConfig;
