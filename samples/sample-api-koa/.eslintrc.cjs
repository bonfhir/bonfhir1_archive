/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: "@bonfhir/eslint-config",
  overrides: [
    {
      files: ["**/{.*,*.config}.{cjs,js,mjs,ts,tsx}"],
      env: {
        node: true,
      },
    },
  ],
};
