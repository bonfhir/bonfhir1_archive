/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};

module.exports = config;
