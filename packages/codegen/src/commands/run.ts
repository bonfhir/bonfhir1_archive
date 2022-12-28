import chalk from "chalk";
import { Argv } from "yargs";

export const command = "run";
export const describe = "Run code generation";

export const builder = (yargs: Argv) => {
  return yargs.options("definitions", {
    type: "string",
    demandOption: true,
    describe: "FHIR definitions file directory path.",
  });
};

interface CommandOptions {
  definitions: string;
}

export const handler = async (yargs: CommandOptions) => {
  try {
    console.log(yargs.definitions);
  } catch (error) {
    console.error(chalk.red(error));
    console.error();
    console.error(chalk.gray((error as Error).stack));
  }
};
