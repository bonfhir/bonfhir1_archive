export const uniqBy = (values: ReadonlyArray<unknown>, propName: string) =>
  values.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (x: any, i, self) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i === self.findIndex((y: any) => x[propName] === y[propName])
  );
