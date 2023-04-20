import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "r4b/global.ts",
  },
  format: ["iife"],
  minify: true,
  outDir: "dist/r4b",
  shims: false,
  dts: false,
  tsconfig: "tsconfig.build.json",
  noExternal: ["localized-address-format", "marked"],
});
