import { Address } from "fhir/r4";
import { formatAddress } from "localized-address-format";
import _ from "lodash";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { removeDoubleSpaces } from "./helpers";
import { fhirPeriodTypeAdapter } from "./period";

/**
 * An address expressed using postal conventions
 *
 * @see https://hl7.org/fhir/datatypes.html#address
 */

export type FhirAddressFormatOptions = {
  style?: "text" | "full" | "extended" | null | undefined;
  useValueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
  typeValueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
};

export interface FhirAddressTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR address
   *
   * @see https://hl7.org/fhir/datatypes.html#address
   */
  format(
    value: Address | null | undefined,
    options?: FhirAddressFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirAddressTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirAddressTypeAdapter(
  locale?: string | undefined
): FhirAddressTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirAddress, options) {
      if (!fhirAddress) return "";

      const use = fhirCodeTypeAdapter(locale).format(fhirAddress.use, {
        valueSetExpansions: options?.useValueSetExpansions,
      });
      const type = fhirCodeTypeAdapter(locale).format(fhirAddress.type, {
        valueSetExpansions: options?.typeValueSetExpansions,
      });

      const fullAddress = formatAddress({
        postalCountry: fhirAddress.country,
        administrativeArea: fhirAddress.state,
        locality: fhirAddress.city,
        dependentLocality: fhirAddress.district,
        postalCode: fhirAddress.postalCode,
        addressLines: fhirAddress.line,
      });

      switch (options?.style) {
        case null:
        case undefined:
        case "text":
          return fhirAddress.text || "";
        case "full":
          return fullAddress.join("\n");
        case "extended":
          return removeDoubleSpaces(
            _.compact([
              `(${fhirPeriodTypeAdapter(locale).format(fhirAddress.period)})`,
              `${type} - ${use}`,
              ...fullAddress,
              fhirAddress.country,
            ]).join("\n")
          );
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}
