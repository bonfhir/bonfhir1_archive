import { Coding } from "fhir/r4";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";

/**
 * A Coding is a representation of a defined concept using a symbol from a defined "code system"
 *
 * @see https://hl7.org/fhir/datatypes.html#coding
 */

export type FhirCodingFormatOptions = {
  valueSetExpansions: FhirCodeFormatOptions["valueSetExpansions"];
};

export interface FhirCodingTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR coding
   *
   * @see https://hl7.org/fhir/datatypes.html#coding
   */
  format(
    value: Coding | null | undefined,
    options?: FhirCodingFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirCodingTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirCodingTypeAdapter(
  locale?: string | undefined
): FhirCodingTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirCoding, options) {
      if (!fhirCoding?.code) return "";

      const formattedCode = fhirCodeTypeAdapter(locale).format(
        fhirCoding.code,
        {
          valueSetExpansions: options?.valueSetExpansions,
        }
      );

      return formattedCode !== fhirCoding.code && formattedCode
        ? formattedCode
        : fhirCoding.display || formattedCode || fhirCoding.code;
    },
  };
}
