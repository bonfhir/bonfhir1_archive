import { evaluate as evaluateFhirPath } from "fhirpath";
import hb from "handlebars";

export const fhirPath = (
  fnCtx: unknown,
  path: string,
  options: hb.HelperOptions
) => {
  const evaluated = evaluateFhirPath(fnCtx, path);
  return evaluated.map((x) => options.fn(x)).join("");
};
