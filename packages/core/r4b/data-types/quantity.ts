import { Quantity } from "fhir/r4";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { FhirDecimalFormatOptions, fhirDecimalTypeAdapter } from "./decimal";
import { removeDoubleSpaces } from "./helpers";

/**
 * A measured amount (or an amount that can potentially be measured).
 *
 * @see https://hl7.org/fhir/datatypes.html#quantity
 */

export type FhirQuantityFormatOptions = {
  codeValueSetExpansions: FhirCodeFormatOptions["valueSetExpansions"];
  valueNotation: FhirDecimalFormatOptions["notation"];
};

export interface FhirIntegerTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR integer
   *
   * @see https://hl7.org/fhir/datatypes.html#integer
   */
  format(
    value: Quantity | null | undefined,
    options?: FhirQuantityFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirQuantityTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirQuantityTypeAdapter(
  locale?: string | undefined
): FhirIntegerTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirQuantity, options) {
      if (!fhirQuantity) return "";

      // value https://build.fhir.org/datatypes-definitions.html#Quantity.value
      const formattedValue = fhirDecimalTypeAdapter(locale).format(
        fhirQuantity.value,
        {
          notation: options?.valueNotation,
        }
      );

      // comparator https://build.fhir.org/datatypes-definitions.html#Quantity.comparator
      const formattedComparator = fhirQuantity.comparator || "=";

      // unit https://build.fhir.org/datatypes-definitions.html#Quantity.unit
      const formattedUnit = fhirQuantity.unit?.trim() || "";

      // system https://build.fhir.org/datatypes-definitions.html#Quantity.system
      const formattedSystem = fhirQuantity.system?.trim() || "";

      // code https://build.fhir.org/datatypes-definitions.html#Quantity.code
      let formattedCode: string;
      if (fhirQuantity.code)
        formattedCode = fhirCodeTypeAdapter(locale).format(fhirQuantity.code, {
          valueSetExpansions: options?.codeValueSetExpansions,
        });
      formattedCode ||= "";

      return removeDoubleSpaces(
        [
          formattedComparator,
          formattedValue,
          formattedCode ? formattedCode : formattedUnit,
          formattedSystem ? `(${formattedSystem})` : "",
        ].join(" ")
      );
    },
  };
}
