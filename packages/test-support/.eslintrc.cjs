/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: "@bonfhir/eslint-config",
  overrides: [
    {
      files: ["**/{.*,*.config}.{cjs,js,mjs,ts}"],
      env: {
        node: true,
      },
    },
  ],
};
