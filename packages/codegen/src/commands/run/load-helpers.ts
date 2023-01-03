/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ListrTask } from "listr";
import { Context } from "./context.js";

/**
 * This task loads a js helpers file into the context
 */
export const LoadHelpersTask: ListrTask<Context> = {
  title: "Load helpers",
  task: async (ctx) => {
    ctx.helpers = await import(ctx.config.helpers!);
  },
  skip: (ctx) => !ctx.config.helpers,
};
