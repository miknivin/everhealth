/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'everhealth-bucket.s3.ap-south-1.amazonaws.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.amazonaws.com',
            },
        ],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin-allow-popups',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
