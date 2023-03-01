/** @type {import("@swc/core").Config & Record<string, unknown>} */
const transpilationConfig = {
  sourceMaps: true,
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: true,
    },
    target: "es2022",
  },
  module: {
    type: "ES6",
  },
};

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", transpilationConfig],
  },
};

module.exports = config;
