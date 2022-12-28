import chalk from "chalk";
import Listr from "listr";
import { Argv } from "yargs";
import { Config, Context } from "./context";
import { LoadDefinitionsTask } from "./load-definitions";
import { PostProcessingTask } from "./post-processing";
import { ProcessTemplatesTask } from "./process-templates";
import { ScanTemplatesTask } from "./scan-templates";

export const command = "run";
export const describe = "Run code generation";

export const builder = (yargs: Argv) => {
  return yargs
    .options("definitions", {
      type: "string",
      demandOption: true,
      describe: "FHIR definitions files path (glob pattern).",
    })
    .options("templates", {
      type: "string",
      demandOption: true,
      describe: "Template files path (glob pattern)",
    })
    .options("post-processing", {
      type: "array",
      describe:
        "Command(s) to run for each file after generation. Use the token %file% to reference the file, or %files% to reference all files.",
    });
};

export const handler = async (config: Config) => {
  try {
    await new Listr<Context>(
      [
        LoadDefinitionsTask,
        ScanTemplatesTask,
        ProcessTemplatesTask,
        PostProcessingTask,
      ],
      {
        exitOnError: true,
      }
    ).run({
      config,
      definitions: {},
      templates: [],
      writtenFiles: [],
    });
  } catch (error) {
    console.error(chalk.red(error));
    console.error();
    console.error(chalk.gray((error as Error).stack));
  }
};
