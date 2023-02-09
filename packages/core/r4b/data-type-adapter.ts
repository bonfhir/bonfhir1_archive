import { FhirDateTypeAdapter, fhirDateTypeAdapter } from "./data-types/date";
import {
  FhirDecimalTypeAdapter,
  fhirDecimalTypeAdapter,
} from "./data-types/decimal";

/**
 * This is used to manipulate FHIR data types, both parsing values and formatting them as localized strings.
 *
 * @see https://hl7.org/fhir/datatypes.html
 */
export interface FhirDataTypeAdapter {
  locale: string | undefined;
  date: FhirDateTypeAdapter;
  decimal: FhirDecimalTypeAdapter;
}

/**
 * Return a {@link FhirDataTypeAdapter} that uses the [`Intl` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 * (ECMAScript Internationalization API)
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function intlFhirDataTypeAdapter(
  locale: string | undefined
): FhirDataTypeAdapter {
  // JIT locale check
  Intl.DateTimeFormat(locale);

  return {
    locale,
    date: fhirDateTypeAdapter(locale),
    decimal: fhirDecimalTypeAdapter(locale),
  };
}

export * from "./data-types/date";
