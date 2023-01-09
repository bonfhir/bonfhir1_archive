/**
 * Return true if the first argument is in the second argument.
 * List of values can be provided as an array, or a comma-delimited string.
 */
export const inFn = <T>(fnCtx: T, values: T[] | string) => {
  const filter =
    typeof values === "string" ? (values.split(",") as T[]) : values;
  return filter.includes(fnCtx) ? fnCtx : undefined;
};
