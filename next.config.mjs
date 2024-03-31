/**
 * @typedef {Object} ImagePattern
 * @property {string} protocol
 * @property {string} hostname
 * @property {string} port
 * @property {string} pathname
 */

/**
 * @typedef {Object} Header
 * @property {string} key
 * @property {string} value
 * @property {string} source
 */

/**
 * @typedef {Object} NextConfig
 * @property {boolean} reactStrictMode
 * @property {boolean} swcMinify
 * @property {boolean} compress
 * @property {{ remotePatterns: ImagePattern[] }} images
 * @property {() => Promise<Header[]>} headers
 */

/**
 * Type guard for ImagePattern
 * @param {any} obj
 * @returns {obj is ImagePattern}
 */
function isImagePattern(obj) {
  return (
    typeof obj.protocol === "string" &&
    typeof obj.hostname === "string" &&
    typeof obj.port === "string" &&
    typeof obj.pathname === "string"
  );
}

/**
 * Type guard for Header
 * @param {any} obj
 * @returns {obj is Header}
 */
function isHeader(obj) {
  return (
    typeof obj.key === "string" &&
    typeof obj.value === "string" &&
    typeof obj.source === "string"
  );
}

/** @type {NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
};

export default nextConfig;
