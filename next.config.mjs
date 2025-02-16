/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        unoptimized: true,
        domains: ['wallpapers.com/'],
    },
};

export default nextConfig;
