import {
  FhirCanonicalTypeAdapter,
  fhirCanonicalTypeAdapter,
} from "./data-types/canonical";
import { FhirDateTypeAdapter, fhirDateTypeAdapter } from "./data-types/date";
import {
  FhirDateTimeTypeAdapter,
  fhirDateTimeTypeAdapter,
} from "./data-types/dateTime";
import {
  FhirDecimalTypeAdapter,
  fhirDecimalTypeAdapter,
} from "./data-types/decimal";
import {
  FhirInstantTypeAdapter,
  fhirInstantTypeAdapter,
} from "./data-types/instant";
import {
  FhirIntegerTypeAdapter,
  fhirIntegerTypeAdapter,
} from "./data-types/integer";
import { FhirURITypeAdapter, fhirURITypeAdapter } from "./data-types/URI";
import { FhirURLTypeAdapter, fhirURLTypeAdapter } from "./data-types/URL";

/**
 * This is used to manipulate FHIR data types, both parsing values and formatting them as localized strings.
 *
 * @see https://hl7.org/fhir/datatypes.html
 */
export interface FhirDataTypeAdapter {
  locale: string | undefined;
  date: FhirDateTypeAdapter;
  dateTime: FhirDateTimeTypeAdapter;
  instant: FhirInstantTypeAdapter;
  integer: FhirIntegerTypeAdapter;
  decimal: FhirDecimalTypeAdapter;
  uri: FhirURITypeAdapter;
  url: FhirURLTypeAdapter;
  canonical: FhirCanonicalTypeAdapter;
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
    dateTime: fhirDateTimeTypeAdapter(locale),
    instant: fhirInstantTypeAdapter(locale),
    integer: fhirIntegerTypeAdapter(locale),
    decimal: fhirDecimalTypeAdapter(locale),
    uri: fhirURITypeAdapter(locale),
    url: fhirURLTypeAdapter(locale),
    canonical: fhirCanonicalTypeAdapter(locale),
  };
}

export * from "./data-types/date";
