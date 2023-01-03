import { ToWords } from "to-words";

const toWords = new ToWords({
  localeCode: "en-US",
});

/**
 * Return a string that can safely be used as a Typescript variable name.
 * Invalid characters are stripped out, and starting numbers are converted by their letter equivalent.
 */
export const safeNameAsVar = (value: string | null | undefined) => {
  const result = value?.replace(/[^\w_]/g, "");
  if (!result) {
    return result;
  }

  if (result.startsWith(parseInt(result).toString())) {
    return result.replace(
      parseInt(result).toString(),
      toWords.convert(parseInt(result)).replace(/[^\w]/g, "")
    );
  }

  return result;
};
