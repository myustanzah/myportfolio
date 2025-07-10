const isProd = process.env.NODE_ENV === "production";
 
const nextConfig = {
  basePath: "",
  assetPrefix: "",
  // output: "export",
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig;