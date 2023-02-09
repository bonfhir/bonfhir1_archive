import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { execSync } from "child_process";
import { mkdirSync, writeFileSync } from "fs";
import packageJson from "./package.json" assert { type: "json" };

const extensions = [".ts"];

const gitHash = execSync("git rev-parse --short HEAD").toString().trim();
const moduleVersion = packageJson.version + "-" + gitHash;

const globalModules = []; // add package names to be treated as external
const makeGlobalModuleName = (id) => {
  const [moduleName, ..._] = id.replace("./", "").split("/");
  return moduleName;
};
const isExternalModule = (id) =>
  globalModules.includes(makeGlobalModuleName(id));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.cjs",
        format: "umd",
        name: "bonfhir.core",
        sourcemap: true,
        globals: makeGlobalModuleName,
      },
      {
        file: "dist/cjs/index.min.cjs",
        format: "umd",
        name: "bonfhir.core",
        plugins: [terser({ sourceMap: true })],
        globals: makeGlobalModuleName,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"production"',
          "process.env.BONFHIR_CORE_VERSION": `"${moduleVersion}"`,
        },
      }),
      json(),
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.build-cjs.json",
      }),
      {
        buildEnd: () => {
          mkdirSync("./dist/cjs", { recursive: true });
          writeFileSync("./dist/cjs/package.json", '{"type": "commonjs"}');
        },
      },
    ],
    external: isExternalModule,
  },
  {
    input: "src/r4b/index.ts",
    output: [
      {
        file: "dist/cjs/r4b/index.cjs",
        format: "umd",
        name: "test.medplum",
        sourcemap: true,
        globals: makeGlobalModuleName,
      },
      {
        file: "dist/cjs/r4b/index.min.cjs",
        format: "umd",
        name: "test.medplum",
        plugins: [terser({ sourceMap: true })],
        globals: makeGlobalModuleName,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"production"',
          "process.env.BONFHIR_CORE_VERSION": `"${moduleVersion}"`,
        },
      }),
      json(),
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.build-cjs-r4b.json",
      }),
      {
        buildEnd: () => {
          // TBD
        },
      },
    ],
    external: isExternalModule,
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/esm",
        entryFileNames: "[name].mjs",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
        globals: makeGlobalModuleName,
      },
      {
        file: "dist/esm/index.min.mjs",
        format: "esm",
        plugins: [terser({ sourceMap: true })],
        globals: makeGlobalModuleName,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"production"',
          "process.env.BONFHIR_CORE_VERSION": `"${moduleVersion}"`,
        },
      }),
      json(),
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.build-esm.json",
      }),
      {
        buildEnd: () => {
          mkdirSync("./dist/esm", { recursive: true });
          writeFileSync("./dist/esm/package.json", '{"type": "module"}');
        },
      },
    ],
    external: isExternalModule,
  },
];
