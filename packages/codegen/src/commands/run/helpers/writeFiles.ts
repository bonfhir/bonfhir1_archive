/* eslint-disable @typescript-eslint/ban-ts-comment */
import { writeFileSync } from "fs";
import hb from "handlebars";
import { join as pathJoin } from "node:path";
import { Context } from "../context";

export function buildWriteFiles(ctx: Context, templateDir: string) {
  return function (filenameTemplate: string, options: hb.HelperOptions) {
    // @ts-ignore
    const fileContent = options.fn(this);
    // @ts-ignore
    const fileName = hb.compile(filenameTemplate, { noEscape: true })(this);
    const targetFile = pathJoin(templateDir, fileName);
    writeFileSync(targetFile, fileContent, { encoding: "utf8" });
    ctx.writtenFiles.push(targetFile);

    return "";
  };
}
