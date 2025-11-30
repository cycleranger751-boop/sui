import path from "node:path";
import { fileURLToPath } from "node:url";

// Fix __dirname in ESM (.mjs)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// YOUR GITHUB REPO NAME
const repoName = "multi-sig-treasury-policies";

const LOADER = path.resolve(
  __dirname,
  "src/visual-edits/component-tagger-loader.js"
);

const nextConfig = {
  // Static export required for GitHub Pages
  output: "export",

  // Required for GitHub Pages static hosting
  basePath: "/" + repoName,
  assetPrefix: "/" + repoName + "/",

  // Disable Next.js image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }
    ]
  },

  // Keep your existing config
  outputFileTracingRoot: path.resolve(__dirname, "../../"),

  typescript: {
    ignoreBuildErrors: true
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
