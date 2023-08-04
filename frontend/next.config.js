/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    async redirects(){
        return [
            {
                source: '/',
                destination: '/order',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
