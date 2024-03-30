/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        IPIFY_API_KEY: process.env.IPIFY_API_KEY,
        IPIFY_GEO_BASE_URL: process.env.IPIFY_GEO_BASE_URL,
        IPIFY_API_BASE_URL: process.env.IPIFY_API_BASE_URL,
    }
};

export default nextConfig;
