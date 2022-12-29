import { readFile, writeFile } from "fs/promises";
import hb from "handlebars";
import handlebarsHelpers from "handlebars-helpers";
import Listr, { ListrTask } from "listr";
import _ from "lodash";
import { join as pathJoin, parse as pathParse } from "node:path";
import { Context } from "./context";
import { elementImmediatePath } from "./helpers/elementImmediatePath";
import { fhirPath } from "./helpers/fhirPath";
import { notIn } from "./helpers/notIn";
import { eachRecursiveFlatten } from "./helpers/recursiveFlatten";
import { safeNameAsVar } from "./helpers/safeNameAsVar";
import { buildWriteFiles } from "./helpers/writeFiles";

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
          startCase: _.startCase,
          fhirPath,
          writeFiles: buildWriteFiles(ctx, templateParsedPath.dir),
          safeNameAsVar,
          eachRecursiveFlatten,
          elementImmediatePath,
          notIn,
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
