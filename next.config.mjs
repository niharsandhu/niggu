/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "hobbybucket.blr1.cdn.digitaloceanspaces.com"
          ],
    }
    ,
    eslint:{
        ignoreDuringBuilds:true,
    }
};

export default nextConfig;

