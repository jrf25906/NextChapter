const upstreamTransformer = require("@expo/metro-config/babel-transformer");

module.exports.transform = function ({ src, filename, options }) {
  // Replace import.meta with an empty object for web compatibility
  if (options.platform === "web" && src.includes("import.meta")) {
    src = src.replace(/import\.meta/g, "({})");
  }

  return upstreamTransformer.transform({ src, filename, options });
};
