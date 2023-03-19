import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["r4b/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist/r4b",
  shims: true,
  dts: true,
  tsconfig: "tsconfig.build.json",
  noExternal: ["localized-address-format", "marked"],
});
