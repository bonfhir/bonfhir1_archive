import { evaluate as evaluateFhirPath } from "fhirpath";
import { writeFileSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import hb from "handlebars";
import handlebarsHelpers from "handlebars-helpers";
import Listr, { ListrTask } from "listr";
import { join as pathJoin, parse as pathParse } from "node:path";
import { Context } from "./context";

export const ProcessTemplatesTask: ListrTask<Context> = {
  title: "Process templates",
  task: async (ctx) => {
    return new Listr<Context>(ctx.templates.map(CreateTemplateProcessTask));
  },
};

function CreateTemplateProcessTask(templatePath: string): ListrTask<Context> {
  const templateParsedPath = pathParse(templatePath);
  return {
    title: templateParsedPath.name,
    task: async (ctx) => {
      const compiledTemplate = hb.compile(
        await readFile(templatePath, "utf8"),
        {
          noEscape: true,
          preventIndent: true,
        }
      );

      const result = compiledTemplate(ctx, {
        helpers: {
          ...handlebarsHelpers(),
          fhirPath: (
            fnCtx: unknown,
            path: string,
            options: hb.HelperOptions
          ) => {
            const evaluated = evaluateFhirPath(fnCtx, path);
            return evaluated.map((x) => options.fn(x)).join("");
          },
          fhirPathFiles: (
            fnCtx: unknown,
            path: string,
            filenameTemplate: string,
            options: hb.HelperOptions
          ) => {
            const evaluated = evaluateFhirPath(fnCtx, path);

            for (const entry of evaluated) {
              const fileContent = options.fn(entry);
              const fileName = hb.compile(filenameTemplate, { noEscape: true })(
                entry
              );
              const targetFile = pathJoin(templateParsedPath.dir, fileName);
              writeFileSync(targetFile, fileContent, { encoding: "utf8" });
              ctx.writtenFiles.push(targetFile);
            }

            return "";
          },
          safeNameAsVar: (value: string) => {
            return value?.replace(/[^\w]/g, "");
          },
        },
      });

      if (result.trim()) {
        const targetFile = pathJoin(
          templateParsedPath.dir,
          templateParsedPath.name
        );

        await writeFile(targetFile, result, { encoding: "utf8" });

        ctx.writtenFiles.push(targetFile);
      }
    },
  };
}
