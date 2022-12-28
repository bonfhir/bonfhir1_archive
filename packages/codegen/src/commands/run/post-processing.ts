import Listr, { ListrTask } from "listr";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import { Context } from "./context";

const execAsync = promisify(exec);

export const PostProcessingTask: ListrTask<Context> = {
  title: "Post processing files",
  task: async (ctx) => {
    const globalPostProcessingTasks = ctx.config.postProcessing.filter(
      (x) => !x.includes("%file%")
    );
    for (const globalPostProcessingTask of globalPostProcessingTasks) {
      await execAsync(
        globalPostProcessingTask.replace(
          /%files%/g,
          ctx.writtenFiles.join(" ")
        ),
        {
          maxBuffer: 1024 * 1000 * 10,
        }
      );
    }

    return new Listr<Context>(
      ctx.writtenFiles
        .filter((x) => x.includes("%file%"))
        .map(CreatePostProcessingAFileTask)
    );
  },
  skip: (ctx) => !ctx.config.postProcessing?.length,
};

function CreatePostProcessingAFileTask(filePath: string): ListrTask<Context> {
  return {
    title: `Post-processing ${filePath}`,
    task: async (ctx) => {
      for (const command of ctx.config.postProcessing.filter((x) =>
        x.includes("%file%")
      )) {
        await execAsync(command.replace(/%file%/g, filePath), {
          maxBuffer: 1024 * 1000 * 10,
        });
      }
    },
  };
}
