/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/journey",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/stories",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/guides",
        permanent: true,
      },
    ]
  },
}

export default nextConfig