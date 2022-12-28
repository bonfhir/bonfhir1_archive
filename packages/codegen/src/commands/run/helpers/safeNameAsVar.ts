import { ToWords } from "to-words";

const toWords = new ToWords({
  localeCode: "en-US",
});

export const safeNameAsVar = (value: string | null | undefined) => {
  const result = value?.replace(/[^\w]/g, "");
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
