/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/ar/:slug",
        destination: "/ar/index.html?slug=:slug",
      },
    ];
  },
};
export default nextConfig;
