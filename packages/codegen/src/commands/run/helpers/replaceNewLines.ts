/**
 * Replace new lines characters with spaces.
 */
export const replaceNewLines = (
  value: string | null | undefined,
  replace: string
): string | undefined => {
  if (!value) {
    return undefined;
  }

  return value.replace(/([\r\n]+)/g, replace);
};
