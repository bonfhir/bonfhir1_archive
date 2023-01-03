/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
  ],
  ignorePatterns: [
    "**/{.cache,.parcel-cache,coverage,dist,node_modules}/*",
    "**/storybook-static",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  root: true,
};
