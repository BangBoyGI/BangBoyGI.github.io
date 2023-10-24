/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            }
        ]
    }
}

module.exports = nextConfig
