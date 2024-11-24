/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.graphify.info',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
