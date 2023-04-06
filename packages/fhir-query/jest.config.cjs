/** @type {import('esbuild-jest').Options} */
const esbuildOptions = {
  // Setting `sourcemap` to `true` is needed[0] to correctly report line numbers
  // in Jest's built-in coverage reporting.
  //
  // [0]: https://github.com/aelbore/esbuild-jest/issues/79
  sourcemap: true,
};

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["esbuild-jest", esbuildOptions],
  },
};

module.exports = config;
