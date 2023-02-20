import { HumanName } from "fhir/r4";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { removeDoubleSpaces } from "./helpers";

/**
 * A name of a human with text, parts and usage information.
 *
 * @see https://hl7.org/fhir/datatypes.html#humanName
 */

export type FhirHumanNameFormatOptions = {
  style?:
    | "text"
    | "full"
    | "long"
    | "medium"
    | "short"
    | "shorter"
    | null
    | undefined;
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
  ): string | string[];
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

      if (Array.isArray(fhirHumanName))
        return sortHumanNames(fhirHumanName).map(
          (humanName) => this.format(humanName, options) as string
        );

      const shortStyle = removeDoubleSpaces(
        `${fhirHumanName.given?.[0]} ${fhirHumanName.family}`
      );
      const use = fhirCodeTypeAdapter(locale).format(fhirHumanName.use, {
        valueSetExpansions: options?.useValueSetExpansions,
      });
      switch (options?.style) {
        case null:
        case undefined:
        case "text":
          return fhirHumanName.text || shortStyle;
        case "short":
          return shortStyle;
        case "full":
          return removeDoubleSpaces(
            [
              ...(fhirHumanName.prefix || []),
              fhirHumanName.family,
              ...(fhirHumanName.given || []),
              fhirHumanName.suffix,
              use ? `(${use})` : "",
            ].join(" ")
          );
        case "long":
          return removeDoubleSpaces(
            [
              ...(fhirHumanName.prefix || []),
              fhirHumanName.family,
              ...(fhirHumanName.given || []),
            ].join(" ")
          );
        case "medium":
          return removeDoubleSpaces(
            [
              ...(fhirHumanName.prefix || []),
              fhirHumanName.family,
              fhirHumanName.given?.[0],
            ].join(" ")
          );
        case "shorter":
          return fhirHumanName.given?.[0] || "";
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}

const humanNameUseOrder = {
  usual: 0,
  official: 1,
  nickname: 2,
  temp: 3,
  anonymous: 4,
  old: 5,
  maiden: 6,
  undefined: 7,
};

const sortHumanNames = (humanNames: HumanName[]): HumanName[] => {
  return humanNames.sort((humanName1, humanName2) => {
    return (
      humanNameUseOrder[humanName1.use || "undefined"] -
      humanNameUseOrder[humanName2.use || "undefined"]
    );
  });
};
