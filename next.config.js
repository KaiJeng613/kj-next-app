/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? '' : 'http://localhost:3000',
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "lemonsqueezy.imgix.net" },
            { protocol: "https", hostname: "image.tmdb.org" },
            { protocol: "https", hostname: "kaijeng.netlify.app" },
        ],
    },
}


module.exports = nextConfig
