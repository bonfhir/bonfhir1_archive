/* eslint-disable @typescript-eslint/no-explicit-any */
import hb from "handlebars";

export const eachRecursiveFlatten = (
  fnCtx: any[],
  attribute: string,
  options: hb.HelperOptions
) => {
  if (!fnCtx) {
    return "";
  }

  if (!Array.isArray(fnCtx)) {
    throw new Error("The context passed to recursiveFlatten must be an array.");
  }

  return [...recursiveExploration(fnCtx, attribute)]
    .map((x) => options.fn(x))
    .join("");
};

function* recursiveExploration(
  elements: any[],
  attribute: string
): Generator<any, any, undefined> {
  for (const element of elements) {
    yield element;
    if (element[attribute]) {
      for (const child of recursiveExploration(element[attribute], attribute)) {
        yield child;
      }
    }
  }
}
