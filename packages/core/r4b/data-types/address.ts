import { Address } from "fhir/r4";
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
  style?: "text" | "full" | "long" | "medium" | "short" | null | undefined;
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

      const shortStyle = _.compact([
        fhirAddress.line?.[0],
        removeDoubleSpaces(
          [
            [fhirAddress.city, fhirAddress.district].join(" "),
            [fhirAddress.state, fhirAddress.postalCode].join(" "),
          ].join(", ")
        ),
      ]);
      const mediumStyle = _.compact([
        ...(fhirAddress.line || []),
        removeDoubleSpaces(
          [
            [fhirAddress.city, fhirAddress.district].join(" "),
            [fhirAddress.state, fhirAddress.postalCode].join(" "),
          ].join(", ")
        ),
      ]);
      const use = fhirCodeTypeAdapter(locale).format(fhirAddress.use, {
        valueSetExpansions: options?.useValueSetExpansions,
      });
      const type = fhirCodeTypeAdapter(locale).format(fhirAddress.type, {
        valueSetExpansions: options?.typeValueSetExpansions,
      });
      switch (options?.style) {
        case null:
        case undefined:
        case "text":
          return fhirAddress.text || shortStyle.join("\n");
        case "short":
          return shortStyle.join("\n");
        case "full":
          return removeDoubleSpaces(
            _.compact([
              `(${fhirPeriodTypeAdapter(locale).format(fhirAddress.period)})`,
              `${type} - ${use}`,
              ...mediumStyle,
              fhirAddress.country,
            ]).join("\n")
          );
        case "medium":
          return mediumStyle.join("\n");
        case "long":
          return removeDoubleSpaces(
            _.compact([`(${use})`, ...mediumStyle, fhirAddress.country]).join(
              "\n"
            )
          );
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}
