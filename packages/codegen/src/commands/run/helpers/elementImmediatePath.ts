export const elementImmediatePath = (path: string) => {
  const splitted = path.split(".");
  if (splitted.length > 2) {
    return undefined;
  }

  const resolvedImmediatePath = splitted[1];
  if (resolvedImmediatePath?.includes("[")) {
    return undefined;
  }

  return resolvedImmediatePath;
};
