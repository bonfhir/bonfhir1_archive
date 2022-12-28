import { evaluate as evaluateFhirPath } from "fhirpath";
import { writeFileSync } from "fs";
import hb from "handlebars";
import { join as pathJoin } from "node:path";
import { Context } from "../context";

export const buildFhirPathFiles =
  (ctx: Context, templateDir: string) =>
  (
    fnCtx: unknown,
    path: string,
    filenameTemplate: string,
    options: hb.HelperOptions
  ) => {
    const evaluated = evaluateFhirPath(fnCtx, path);

    for (const entry of evaluated) {
      const fileContent = options.fn(entry);
      const fileName = hb.compile(filenameTemplate, { noEscape: true })(entry);
      const targetFile = pathJoin(templateDir, fileName);
      writeFileSync(targetFile, fileContent, { encoding: "utf8" });
      ctx.writtenFiles.push(targetFile);
    }

    return "";
  };
