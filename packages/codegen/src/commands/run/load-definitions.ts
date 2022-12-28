import fg from "fast-glob";
import { readFile } from "fs/promises";
import { ListrTask } from "listr";
import { parse as pathParse } from "node:path";
import { Context } from "./context";

export const LoadDefinitionsTask: ListrTask<Context> = {
  title: "Load definitions files",
  task: async (ctx, task) => {
    const allDefinitionFiles = await fg(ctx.config.definitions);
    for (const entry of allDefinitionFiles) {
      const filenameWithoutExtension = pathParse(entry).name;
      const fileContent = JSON.parse(await readFile(entry, "utf8"));
      ctx.definitions[filenameWithoutExtension] = fileContent;
    }

    task.title += `: ${ctx.definitions.size} bundle(s) loaded.`;
  },
};
