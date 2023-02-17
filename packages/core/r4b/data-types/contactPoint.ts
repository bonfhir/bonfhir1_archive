import { ContactPoint } from "fhir/r4";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { fhirPeriodTypeAdapter } from "./period";

/**
 * Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.
 *
 * @see https://hl7.org/fhir/datatypes.html#contactPoint
 */

export type FhirContactPointFormatOptions = {
  style?: "full" | "long" | "medium" | "short" | null | undefined;
  systemValueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
  useValueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
};

export interface FhirContactPointTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR contactPoint
   *
   * @see https://hl7.org/fhir/datatypes.html#contactPoint
   */
  format(
    value: ContactPoint | null | undefined,
    options?: FhirContactPointFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirContactPointTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirContactPointTypeAdapter(
  locale?: string | undefined
): FhirContactPointTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirContactPoint, options) {
      if (!fhirContactPoint?.value) return "";

      const use = fhirCodeTypeAdapter(locale).format(fhirContactPoint.use, {
        valueSetExpansions: options?.useValueSetExpansions,
      });
      const system = fhirCodeTypeAdapter(locale).format(
        fhirContactPoint.system,
        {
          valueSetExpansions: options?.systemValueSetExpansions,
        }
      );
      switch (options?.style) {
        case null:
        case undefined:
        case "short":
          return fhirContactPoint.value;
        case "medium":
          return `${fhirContactPoint.value} (${use})`;
        case "long":
          return `${system}: ${fhirContactPoint.value} (${use})`;
        case "full":
          return [
            `nº${fhirContactPoint.rank} - ${fhirPeriodTypeAdapter(
              locale
            ).format(fhirContactPoint.period)}`,
            `${system}: ${fhirContactPoint.value} (${use})`,
          ].join("\n");
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}
