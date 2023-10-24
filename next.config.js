/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            }
        ]
    },
    assetPrefix: './',
}

module.exports = nextConfig
