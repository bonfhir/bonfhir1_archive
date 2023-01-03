/** @type {import("@swc/core").Config & Record<string, unknown>} */
const transpilationConfig = {
  sourceMaps: true,
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: true,
    },
    target: "es2020",
  },
};

/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.(t|j)s?$": ["@swc/jest", transpilationConfig],
  },
};

module.exports = config;
