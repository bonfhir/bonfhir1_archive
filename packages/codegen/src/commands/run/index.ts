import chalk from "chalk";
import Listr from "listr";
import { Argv } from "yargs";
import { Config, Context } from "./context";
import { LoadDefinitionsTask } from "./load-definitions";

export const command = "run";
export const describe = "Run code generation";

export const builder = (yargs: Argv) => {
  return yargs.options("definitions", {
    type: "string",
    demandOption: true,
    describe: "FHIR definitions file directory path.",
  });
};

export const handler = async (config: Config) => {
  try {
    await new Listr<Context>([LoadDefinitionsTask]).run({
      config,
      definitions: new Map(),
    });
  } catch (error) {
    console.error(chalk.red(error));
    console.error();
    console.error(chalk.gray((error as Error).stack));
  }
};
