/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dcb9wy3kf/image/upload/v1695306444/vibe-image/**",
      },
      {
        protocol: "https",
        hostname: "artistic-virtue-0470908127.strapiapp.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

// domains: ["https://artistic-virtue-0470908127.strapiapp.com"],
