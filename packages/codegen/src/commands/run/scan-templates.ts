import fg from "fast-glob";
import { ListrTask } from "listr";
import { Context } from "./context";

export const ScanTemplatesTask: ListrTask<Context> = {
  title: "Scan templates",
  task: async (ctx, task) => {
    ctx.templates = await fg(ctx.config.templates);
    task.title += `: ${ctx.templates.length} template(s) found.`;
  },
};
