const upstreamTransformer = require("@expo/metro-config/babel-transformer");

module.exports.transform = function ({ src, filename, options }) {
  // Replace import.meta with appropriate polyfills for web compatibility
  if (options.platform === "web" && src.includes("import.meta")) {
    // Handle import.meta.env specifically (used by Zustand)
    src = src.replace(/import\.meta\.env/g, "(process.env || {})");
    // Handle other import.meta usages
    src = src.replace(/import\.meta/g, "({})");
  }

  return upstreamTransformer.transform({ src, filename, options });
};
