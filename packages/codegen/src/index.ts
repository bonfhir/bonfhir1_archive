#!/usr/bin/env node

import chalk from "chalk";
import yargs from "yargs";
import * as run from "./commands/run";

try {
  yargs()
    .scriptName("bonfhir-codegen")
    .command(run)
    .demand(1, chalk.red("Error: Must provide a valid command"))
    .help("h")
    .alias("h", "help")
    .strictCommands()
    .demandCommand(1)
    .parse(
      process.argv[0]?.endsWith("child-entrypoint.js")
        ? process.argv.slice(2)
        : process.argv
    );
} catch (error) {
  console.error(chalk.red(error));
  console.error();
  console.error(chalk.gray((error as Error).stack));
}
