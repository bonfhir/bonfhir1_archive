import { HumanName } from "fhir/r4";
import reduce from "lodash/reduce";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { removeDoubleSpaces } from "./helpers";

/**
 * A name of a human with text, parts and usage information.
 *
 * @see https://hl7.org/fhir/datatypes.html#humanName
 */

export type FhirHumanNameFormatOptions = {
  /**
   * - shorter: first given name
   * - short: first given name and family name
   * - standard: all given name and family name
   * - medium: prefix, first given name and family name
   * - long: prefix, all given name and family name
   * - full: prefix, all given name, family name and suffix
   */
  style?:
    | "full"
    | "long"
    | "medium"
    | "standard"
    | "short"
    | "shorter"
    | null
    | undefined;

  /**
   * If present, send text regardless of the style. Defaults to true
   */
  preferText?: boolean | null | undefined;

  /**
   * Whether we should include the use or not. Defaults to false
   **/
  includeUse?: boolean | null | undefined;

  /**
   * When using a list of names:
   * - the sort order for the `use` attribute.
   * - the filter to select only specific values
   *
   * Defaults to [usual, official, temp, nickname, anonymous, old, maiden, undefined]
   */
  useFilterOrder?: Array<HumanName["use"]> | null | undefined;

  /**
   * When using a list of names, format only the first n (after sorting).
   * Default to Infinity to show or all names in a list.
   */
  max?: number | null | undefined;

  /**
   * When using a list of names, the options to pass to the Intl listFormat method.
   */
  listFormatOptions?: Intl.ListFormatOptions | undefined;

  useValueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
};

export interface FhirHumanNameTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR humanName
   *
   * @see https://hl7.org/fhir/datatypes.html#humanName
   */
  format(
    value: HumanName | HumanName[] | null | undefined,
    options?: FhirHumanNameFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirHumanNameTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirHumanNameTypeAdapter(
  locale?: string | undefined
): FhirHumanNameTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirHumanName, options) {
      if (!fhirHumanName) return "";

      if (Array.isArray(fhirHumanName)) {
        const formattedHumanNameList = filterAndSortHumanNames(
          fhirHumanName,
          options
        ).map((humanName) => this.format(humanName, options));

        return new Intl.ListFormat(locale, options?.listFormatOptions).format(
          formattedHumanNameList
        );
      }

      if (options?.preferText !== false && fhirHumanName.text)
        return fhirHumanName.text;

      let nameComponents: Array<string | undefined>;

      switch (options?.style) {
        case "full":
          nameComponents = [
            ...(fhirHumanName.prefix || []),
            fhirHumanName.family,
            ...(fhirHumanName.given || []),
            ...(fhirHumanName.suffix || []),
          ];
          break;
        case "long":
          nameComponents = [
            ...(fhirHumanName.prefix || []),
            fhirHumanName.family,
            ...(fhirHumanName.given || []),
          ];
          break;
        case "medium":
          nameComponents = [
            ...(fhirHumanName.prefix || []),
            fhirHumanName.family,
            fhirHumanName.given?.[0],
          ];
          break;
        case "standard":
          nameComponents = [
            ...(fhirHumanName.given || []),
            fhirHumanName.family,
          ];
          break;
        case null:
        case undefined:
        case "short":
          nameComponents = [fhirHumanName.given?.[0], fhirHumanName.family];
          break;
        case "shorter":
          nameComponents = [fhirHumanName.given?.[0] || ""];
          break;
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }

      if (options?.includeUse) {
        const use = fhirCodeTypeAdapter(locale).format(fhirHumanName.use, {
          valueSetExpansions: options?.useValueSetExpansions,
        });

        if (use) nameComponents.push(`(${use})`);
      }

      return removeDoubleSpaces(nameComponents.join(" "));
    },
  };
}

const filterAndSortHumanNames = (
  humanNames: HumanName[],
  options: FhirHumanNameFormatOptions | null | undefined
): HumanName[] => {
  const useFilterOrder = options?.useFilterOrder || humanNameUseOrderFilter;
  const indexedOrder: { [k: string]: number } = reduce(
    useFilterOrder,
    (indexedValues, currentValue, index) => ({
      ...indexedValues,
      [currentValue || "undefined"]: index,
    }),
    {}
  );

  // filter out by use
  if (options?.useFilterOrder)
    humanNames = humanNames.filter((humanName) =>
      useFilterOrder.includes(humanName.use)
    );

  // sort by use
  humanNames.sort((humanName1, humanName2) => {
    return (
      (indexedOrder[humanName1.use || "undefined"] || 0) -
      (indexedOrder[humanName2.use || "undefined"] || 0)
    );
  });

  if (options?.max) {
    humanNames = humanNames.slice(0, options.max);
  }

  return humanNames;
};

const humanNameUseOrderFilter: HumanName["use"][] = [
  "usual",
  "official",
  "temp",
  "nickname",
  "anonymous",
  "old",
  "maiden",
  undefined,
];
