import path from "node:path";
import { fileURLToPath } from "node:url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Loader path
const LOADER = path.resolve(
  __dirname,
  "src/visual-edits/component-tagger-loader.js"
);

const nextConfig = {
  // REQUIRED for Netlify static hosting
  output: "export",

  // Netlify cannot run the image optimizer
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }
    ]
  },

  // Disable type & lint errors during build
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Your custom turbopack loader support
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },

  // OPTIONAL but recommended to avoid export warnings
  trailingSlash: true
};

export default nextConfig;
