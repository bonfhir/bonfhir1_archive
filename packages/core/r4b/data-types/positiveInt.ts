import { FhirDataTypeAdapter } from "../data-type-adapter";

/**
 * A Positive Integer
 *
 * @see https://hl7.org/fhir/datatypes.html#positiveInt
 */

export interface FhirPositiveIntFormatOptions {
  notation?:
    | "standard"
    | "scientific"
    | "engineering"
    | "compact-short"
    | "compact-long"
    | null
    | undefined;
}

export interface FhirPositiveIntTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];
  /**
   * Parse a FHIR positiveInt
   *
   * @see https://hl7.org/fhir/datatypes.html#positiveInt
   */
  parse(value: string | number | null | undefined): number | undefined;

  /**
   * Format a FHIR positiveInt
   *
   * @see https://hl7.org/fhir/datatypes.html#positiveInt
   */
  format(
    value: number | string | null | undefined,
    options?: FhirPositiveIntFormatOptions | null | undefined
  ): string;
}

const fhirPositiveIntRegexp = new RegExp("^([0]|[+]?[1-9][0-9]*)$");

/**
 * Return a {@link FhirPositiveIntTypeAdapter} that uses the [`Intl` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 * (ECMAScript Internationalization API)
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirPositiveIntTypeAdapter(
  locale?: string | undefined
): FhirPositiveIntTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    parse(value) {
      if (typeof value === "number")
        if (Number.isInteger(value) && value >= 0) return value;
        else {
          // is a float
          throw new Error(
            `Value is a ${
              value < 0 ? "float" : "negative"
            }. It does not match the fhir positiveInt format as described in 'https://hl7.org/fhir/datatypes.html#number'`
          );
        }

      if (!value?.trim()) {
        return undefined;
      }

      if (!value.trim().match(fhirPositiveIntRegexp))
        throw new Error(
          "Value does not match the fhir positiveInt format as described in `https://hl7.org/fhir/datatypes.html#positiveInt'"
        );

      return parseInt(value);
    },

    format(value, options) {
      const fhirPositiveInt = this.parse(value);

      if (!fhirPositiveInt) return "";

      if (
        options?.notation &&
        ["compact-short", "compact-long"].includes(options.notation)
      ) {
        return new Intl.NumberFormat(locale, {
          notation: "compact",
          compactDisplay:
            options.notation === "compact-long" ? "long" : "short",
        }).format(fhirPositiveInt);
      }

      return new Intl.NumberFormat(locale, {
        notation: options?.notation as Intl.NumberFormatOptions["notation"],
      }).format(fhirPositiveInt);
    },
  };
}

export type FhirUnsignedIntTypeAdapter = FhirPositiveIntTypeAdapter;

export const fhirUnsignedIntTypeAdapter = fhirPositiveIntTypeAdapter.bind({});
