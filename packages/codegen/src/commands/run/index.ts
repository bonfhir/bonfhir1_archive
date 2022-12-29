import chalk from "chalk";
import Listr from "listr";
import { Argv } from "yargs";
import { Config, Context } from "./context";
import { LoadDataJsonTask } from "./load-data-json";
import { PostProcessingTask } from "./post-processing";
import { ProcessTemplatesTask } from "./process-templates";
import { ScanTemplatesTask } from "./scan-templates";

export const command = "run";
export const describe = "Run code generation";

export const builder = (yargs: Argv) => {
  return yargs
    .options("data-json", {
      type: "string",
      alias: "d",
      demandOption: true,
      describe: "Data files to load as JSON (glob pattern).",
    })
    .options("templates", {
      type: "string",
      alias: "t",
      demandOption: true,
      describe: "Template files path (glob pattern)",
    })
    .options("post-processing", {
      type: "array",
      alias: "p",
      describe:
        "Command(s) to run for each file after generation. Use the token %file% to reference the file, or %files% to reference all files.",
    });
};

export const handler = async (config: Config) => {
  try {
    const finalContext = await new Listr<Context>(
      [
        LoadDataJsonTask,
        ScanTemplatesTask,
        ProcessTemplatesTask,
        PostProcessingTask,
      ],
      {
        exitOnError: true,
      }
    ).run({
      config,
      data: {},
      templates: [],
      writtenFiles: [],
    });

    console.log(
      chalk.green(
        `Generated ${finalContext.writtenFiles.length} files from ${finalContext.templates.length} templates.`
      )
    );
  } catch (error) {
    console.error(chalk.red(error));
    console.error();
    console.error(chalk.gray((error as Error).stack));
  }
};
