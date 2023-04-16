/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.ibb.co",
				port: "",
				pathname: "/image/upload/**",
			},
		],
	},
};

module.exports = nextConfig;
