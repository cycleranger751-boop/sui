import path from "node:path";
import { fileURLToPath } from "node:url";

// Fix __dirname in ESM (.mjs)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOADER = path.resolve(
  __dirname,
  "src/visual-edits/component-tagger-loader.js"
);

const nextConfig = {
  // Netlify requires static output
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }
    ]
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  turbopack: {
    rules: {
      "*.{jsx,tsx}": { loaders: [LOADER] }
    }
  }
};

export default nextConfig;
