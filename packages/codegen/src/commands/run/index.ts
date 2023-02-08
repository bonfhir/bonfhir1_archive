import chalk from "chalk";
import Listr from "listr";
import { CommandModule } from "yargs";
import { Config, Context } from "./context";
import { LoadDataJsonTask } from "./load-data-json";
import { LoadHelpersTask } from "./load-helpers";
import { PostProcessingTask } from "./post-processing";
import { ProcessTemplatesTask } from "./process-templates";
import { ScanTemplatesTask } from "./scan-templates";

export default <CommandModule<unknown, Config>>{
  command: "run",
  describe: "Run code generation",
  builder: {
    "data-json": {
      type: "string",
      alias: "d",
      demandOption: true,
      describe: "Data files to load as JSON (glob pattern).",
    },
    templates: {
      type: "string",
      alias: "t",
      demandOption: true,
      describe: "Template files path (glob pattern).",
    },
    "post-processing": {
      type: "array",
      alias: "p",
      describe:
        "Command(s) to run for each file after generation. Use the token %file% to reference the file, or %files% to reference all files.",
    },
    header: {
      type: "string",
      describe: "Header information to add to the top of the generated files.",
    },
    helpers: {
      type: "string",
      describe: "Path to a js file to load as Handlebars helpers.",
    },
  },
  handler: async (config) => {
    try {
      const finalContext = await new Listr<Context>(
        [
          LoadDataJsonTask,
          LoadHelpersTask,
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
  },
};
