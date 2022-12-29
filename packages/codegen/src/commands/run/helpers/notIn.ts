export const notIn = <T>(fnCtx: T, values: T[] | string) => {
  const filter =
    typeof values === "string" ? (values.split(",") as T[]) : values;
  return filter.includes(fnCtx) ? undefined : fnCtx;
};
