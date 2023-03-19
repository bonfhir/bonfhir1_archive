export const startCase = (str: string) =>
  str
    .match(/[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g)
    ?.reduce(
      (result, word, index) =>
        result +
        (index ? " " : "") +
        word.charAt(0).toUpperCase() +
        word.slice(1),
      ""
    );
