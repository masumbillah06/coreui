import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coreui.io",
        pathname: "/demos/react/latest/default/assets/**",
      },
    ],
  },
};

export default nextConfig;
