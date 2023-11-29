/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  //   async redirects() {
  //     return [
  //       {
  //         source: "/blog",
  //         destination: "/",
  //         permanent: true,
  //       },
  //     ];
  //   },
};

module.exports = nextConfig;
