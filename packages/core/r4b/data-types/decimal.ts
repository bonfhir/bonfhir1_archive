import Decimal from "decimal.js";
/**
 * Rational numbers that have a decimal representation.
 *
 * @see https://hl7.org/fhir/datatypes.html#decimal
 */

export interface FhirDecimalFormatOptions {
  notation?:
    | "standard"
    | "scientific"
    | "engineering"
    | "compact-short"
    | "compact-long"
    | null
    | undefined;
}

export interface FhirDecimalTypeAdapter {
  locale: string | undefined;
  /**
   * Parse a FHIR decimal
   *
   * @see https://hl7.org/fhir/datatypes.html#decimal
   */
  parse(value: string | number | undefined): FhirDecimal | undefined;

  /**
   * Format a FHIR decimal
   *
   * @see https://hl7.org/fhir/datatypes.html#decimal
   */
  format(
    value: FhirDecimal | string | number | undefined,
    options?: FhirDecimalFormatOptions | undefined
  ): string;
}

/**
 * A parsed FHIR date
 *
 * @see https://hl7.org/fhir/datatypes.html#decimal
 */
export interface FhirDecimal extends Decimal {
  significantDigits: number | undefined;
}

const fhirDecimalRegexp = new RegExp(
  "^-?(0|[1-9][0-9]*)(.[0-9]+)?([eE][+-]?[0-9]+)?$"
);

/**
 * Return a {@link FhirDecimalTypeAdapter} that uses the [`Intl` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 * (ECMAScript Internationalization API)
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirDecimalTypeAdapter(
  locale?: string | undefined
): FhirDecimalTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    parse(value) {
      if (typeof value !== "number") {
        if (!value?.trim()) {
          return undefined;
        }

        if (!value.trim().match(fhirDecimalRegexp))
          throw new Error(
            "Value does not match the fhir date format as described in `https://hl7.org/fhir/datatypes.html#decimal'"
          );
      }

      const decimal = new Decimal(value) as FhirDecimal;
      if (typeof value === "string" && !value.includes("e")) {
        decimal.significantDigits = value.trim().replace(/\.|-/g, "").length;
      } else {
        decimal.significantDigits = decimal.precision();
      }

      return decimal;
    },

    format(value, options) {
      const fhirDecimal = value instanceof Object ? value : this.parse(value);

      if (!fhirDecimal) return "";

      const valueToFormat = fhirDecimal.toNumber();

      const intlOptions: Intl.NumberFormatOptions = {};
      if (options?.notation) {
        if (
          options.notation === "compact-short" ||
          options.notation === "compact-long"
        ) {
          intlOptions.notation = "compact";
          intlOptions.compactDisplay =
            options.notation === "compact-long" ? "long" : "short";
        } else {
          intlOptions.notation = options.notation;
        }
      } else {
        intlOptions.minimumSignificantDigits = fhirDecimal.significantDigits;
      }

      return new Intl.NumberFormat(locale, intlOptions).format(valueToFormat);
    },
  };
}
