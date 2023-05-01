/**
 * Random utilities functions that may be useful to other Bonfhir packages as well.
 * Oftentimes, these are available in other libraries (e.g. lodash...).
 *
 * This allows us to not take the libraries as a dependency.
 */

/**
 * Iterate over an array and create a map indexed from the key function.
 */
export function toMap<TInitialValue, TKey = string, TValue = TInitialValue>(
  values: ReadonlyArray<TInitialValue>,
  key: (value: TInitialValue) => TKey,
  value?: ((value: TInitialValue) => TValue) | null | undefined
): Map<TKey, TValue> {
  const result = new Map<TKey, TValue>();

  for (const initialValue of values) {
    result.set(
      key(initialValue),
      value ? value(initialValue) : (initialValue as unknown as TValue)
    );
  }

  return result;
}

/**
 * Recursively clone a value.
 */
export function cloneDeep<T>(value: T): T {
  return value instanceof Object ? JSON.parse(JSON.stringify(value)) : value;
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 */
export function isEqual<T>(a: T, b: T) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Filter values by removing duplicates entries by an iteratee function.
 */
export function uniqBy<T>(
  values: ReadonlyArray<T>,
  iteratee: (value: T) => unknown
): T[] {
  return values.filter(
    (x, i, self) => i === self.findIndex((y) => iteratee(x) === iteratee(y))
  );
}

/**
 * Returns the given `value` as is if it satisfies `Array.isArray` or otherwise
 * wraps the given `value` in an array.
 */
export function asArray<T>(
  value: T
): T extends ReadonlyArray<unknown> ? T : [T] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Array.isArray(value) ? (value as any) : [value];
}

/**
 * Returns a formatted value based on the given `pattern` and `value`.
 * If no pattern is provided, the value is returned as is.
 * @param value - the value to format
 * @param pattern - the pattern to use
 * @returns the formatted value
 */
export function formatValueWithPattern(value: string, pattern: string): string {
  if (!pattern) {
    return value;
  }

  const patternChars = pattern.split("");
  const valueChars = value.split("");

  return patternChars
    .map((char, i) => {
      if (char === `\\` && patternChars[i + 1] === "#") {
        return "#";
      }
      if (char === "#") {
        const valueChar = valueChars.shift();
        return valueChar;
      }

      if (char === valueChars[0]) {
        return valueChars.shift();
      }

      return char;
    })
    .join("");
}
