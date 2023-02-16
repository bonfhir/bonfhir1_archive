import { Money } from "fhir/r4";

import { FhirDataTypeAdapter } from "../data-type-adapter";

/**
 * An amount of currency.
 *
 * @see https://hl7.org/fhir/datatypes.html#money
 */

export type FhirMoneyFormatOptions = {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#:~:text=must%20be%20provided.-,currencyDisplay,-How%20to%20display
  currencyDisplay?: undefined | "symbol" | "narrowSymbol" | "code" | "name";
  currencySign?: undefined | "accounting" | "standard";
  notation?:
    | "standard"
    | "scientific"
    | "engineering"
    | "compact-short"
    | "compact-long"
    | null
    | undefined;
};

export interface FhirMoneyTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR money
   *
   * @see https://hl7.org/fhir/datatypes.html#money
   */
  format(
    value: Money | null | undefined,
    options?: FhirMoneyFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirMoneyTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirMoneyTypeAdapter(
  locale?: string | undefined
): FhirMoneyTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirMoney, options) {
      if (!fhirMoney?.value) return "";

      const intlOptions: Intl.NumberFormatOptions = {
        style: "currency",
        currency: fhirMoney.currency,
      };

      intlOptions.currencyDisplay = options?.currencyDisplay;
      intlOptions.currencySign = options?.currencySign;
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
      }

      return new Intl.NumberFormat(locale, intlOptions).format(fhirMoney.value);
    },
  };
}
