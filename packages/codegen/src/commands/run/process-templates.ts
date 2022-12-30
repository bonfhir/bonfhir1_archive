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
import { recursiveFlatten } from "./helpers/recursiveFlatten";
import { safeNameAsVar } from "./helpers/safeNameAsVar";
import { buildWriteFiles } from "./helpers/writeFiles";

/**
 * For each of the template files, execute a subtask to render the template by passing
 * the current context.
 * Injects custom helpers as well:
 *  - all helpers from [handlebars-helpers](https://assemble.io/helpers/)
 *  - `startCase` from [lodash](https://lodash.com/docs/4.17.15#startCase)
 *  - helpers from the `helpers` directory
 */
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
          recursiveFlatten,
          elementImmediatePath,
          notIn,
          ...(ctx.helpers || {}),
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
