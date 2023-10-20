/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [
      ["next-superjson-plugin", {}]
    ]

  },
  images: {
    domains: [
      "res.cloudinary.com", // not sure
      "avatars.githubusercontent.com", // gets icon from github
      "lh3.googleusercontent.com" // gets icon from google
    ]
  }
}

module.exports = nextConfig
