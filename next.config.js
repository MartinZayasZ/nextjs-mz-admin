/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    domains: ['tailwindui.com', 'robohash.org', 'upload.wikimedia.org']
  },
  router: {
    ignoreRoutes: ['/layouts']
  }
};

module.exports = nextConfig;
