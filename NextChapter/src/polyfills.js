// Polyfill for import.meta in web environments
if (typeof globalThis !== "undefined" && !globalThis.import) {
  globalThis.import = { meta: {} };
}

if (typeof window !== "undefined" && !window.import) {
  window.import = { meta: {} };
}

if (typeof global !== "undefined" && !global.import) {
  global.import = { meta: {} };
}

// Additional polyfills for React Native Web compatibility
if (typeof globalThis !== "undefined") {
  globalThis.process = globalThis.process || { env: {} };
}
