import { Period } from "fhir/r4";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirDateTimeFormatOptions, fhirDateTimeTypeAdapter } from "./dateTime";
import { removeDoubleSpaces } from "./helpers";

/**
 * A time period defined by a start and end date/time.
 *
 * @see https://hl7.org/fhir/datatypes.html#period
 */

export type FhirPeriodFormatOptions = FhirDateTimeFormatOptions;

export interface FhirPeriodTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR period
   *
   * @see https://hl7.org/fhir/datatypes.html#period
   */
  format(
    value: Period | null | undefined,
    options?: FhirPeriodFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirPeriodTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirPeriodTypeAdapter(
  locale?: string | undefined
): FhirPeriodTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirPeriod, options) {
      if (!fhirPeriod?.start) return "";

      const dateTimeAdapter = fhirDateTimeTypeAdapter(locale);
      const formattedStartDateTime = dateTimeAdapter.format(
        fhirPeriod.start,
        options
      );
      const formattedEndDateTime = fhirPeriod.end ? dateTimeAdapter.format(
        fhirPeriod.end,
        options
      ) : "ongoing";

      return removeDoubleSpaces(
        [formattedStartDateTime, " - ", formattedEndDateTime].join(" ")
      );
    },
  };
}
