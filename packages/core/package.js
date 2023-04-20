/**
 * This script is a helper to create the final NPM package.
 */

import { existsSync } from "fs";
import {
  copyFile,
  readdir,
  readFile,
  rename,
  unlink,
  writeFile,
} from "fs/promises";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const execAsync = promisify(exec);

(async () => {
  const rootPackageDirectory = dirname(fileURLToPath(import.meta.url));
  const distDirectory = join(rootPackageDirectory, "dist");

  // Copy package.json while stripping unwanted information
  const packageJson = JSON.parse(
    await readFile(join(rootPackageDirectory, "package.json"), "utf8")
  );
  delete packageJson.scripts;
  delete packageJson.packageManager;
  delete packageJson.devDependencies;
  delete packageJson.prettier;

  packageJson.exports = {};
  for (const packageRootDirName of (
    await readdir(distDirectory, { withFileTypes: true })
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)) {
    packageJson.exports[`./${packageRootDirName}`] = {
      import: `./${packageRootDirName}/index.js`,
      require: `./${packageRootDirName}/index.cjs`,
      script: `./${packageRootDirName}/index.global.js`,
      types: `./${packageRootDirName}/index.d.ts`,
      default: `./${packageRootDirName}/index.js`,
    };
  }

  await writeFile(
    join(distDirectory, "package.json"),
    JSON.stringify(packageJson),
    "utf8"
  );

  // Copy README.md
  await copyFile(
    join(rootPackageDirectory, "README.md"),
    join(distDirectory, "README.md")
  );

  // Copy CHANGELOG.md
  await copyFile(
    join(rootPackageDirectory, "CHANGELOG.md"),
    join(distDirectory, "CHANGELOG.md")
  );

  // Delete TypeScript build info
  try {
    await unlink(join(distDirectory, "tsconfig.build.tsbuildinfo"));
  } catch {
    // Ignore the error if the file does not exists.
  }

  // eslint-disable-next-line no-undef
  const npmCommand = process.argv[2] || "pack";
  // eslint-disable-next-line no-undef
  const npmCommandOptions = process.argv.slice(3).join(" ");

  // Run npm in the dist directory
  const result = await execAsync(`npm ${npmCommand} ${npmCommandOptions}`, {
    cwd: distDirectory,
    maxBuffer: 1024 * 1000 * 10,
  });

  // eslint-disable-next-line no-undef
  console.log(result.stdout);
  // eslint-disable-next-line no-undef
  console.error(result.stderr);

  // Copy the package back to root if was produced
  const packageFilename = `${packageJson.name
    .replace("@", "")
    .replace("/", "-")}-${packageJson.version}.tgz`;
  if (existsSync(join(distDirectory, packageFilename))) {
    await rename(
      join(distDirectory, packageFilename),
      join(rootPackageDirectory, packageFilename)
    );
  }
})();
