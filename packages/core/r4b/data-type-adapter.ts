import _ from "lodash";
import {
  FhirBooleanTypeAdapter,
  fhirBooleanTypeAdapter,
} from "./data-types/boolean";
import {
  FhirCanonicalTypeAdapter,
  fhirCanonicalTypeAdapter,
} from "./data-types/canonical";
import { fhirCodeTypeAdapter, FhirCodeTypeAdapter } from "./data-types/code";
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
import {
  fhirMarkdownTypeAdapter,
  FhirMarkdownTypeAdapter,
} from "./data-types/markdown";
import { FhirURITypeAdapter, fhirURITypeAdapter } from "./data-types/URI";
import { FhirURLTypeAdapter, fhirURLTypeAdapter } from "./data-types/URL";

/**
 * This is used to manipulate FHIR data types, both parsing values and formatting them as localized strings.
 *
 * @see https://hl7.org/fhir/datatypes.html
 */
export interface FhirDataTypeAdapter {
  locale: string | undefined;
  code: FhirCodeTypeAdapter;
  date: FhirDateTypeAdapter;
  boolean: FhirBooleanTypeAdapter;
  dateTime: FhirDateTimeTypeAdapter;
  instant: FhirInstantTypeAdapter;
  integer: FhirIntegerTypeAdapter;
  decimal: FhirDecimalTypeAdapter;
  uri: FhirURITypeAdapter;
  url: FhirURLTypeAdapter;
  canonical: FhirCanonicalTypeAdapter;
  markdown: FhirMarkdownTypeAdapter;

  message: (
    strings: TemplateStringsArray,
    ...expr: FhirDataTypeAdapterMessageExpression[]
  ) => string;
}

type MessageExpressionAdapter<
  TAdapterName extends keyof Omit<FhirDataTypeAdapter, "locale" | "message">
> =
  | [Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[0], TAdapterName]
  | [
      Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[0],
      TAdapterName,
      Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[1]
    ];

export type FhirDataTypeAdapterMessageExpression =
  | string
  | MessageExpressionAdapter<"date">
  | MessageExpressionAdapter<"integer">
  | MessageExpressionAdapter<"decimal">
  | null
  | undefined;

/**
 * Return a {@link FhirDataTypeAdapter} that uses the [`Intl` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 * (ECMAScript Internationalization API)
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function intlFhirDataTypeAdapter(
  locale?: string | undefined
): FhirDataTypeAdapter {
  // JIT locale check
  Intl.DateTimeFormat(locale);

  return {
    locale,
    code: fhirCodeTypeAdapter(locale),
    date: fhirDateTypeAdapter(locale),
    boolean: fhirBooleanTypeAdapter(locale),
    dateTime: fhirDateTimeTypeAdapter(locale),
    instant: fhirInstantTypeAdapter(locale),
    integer: fhirIntegerTypeAdapter(locale),
    decimal: fhirDecimalTypeAdapter(locale),
    uri: fhirURITypeAdapter(locale),
    url: fhirURLTypeAdapter(locale),
    canonical: fhirCanonicalTypeAdapter(locale),
    markdown: fhirMarkdownTypeAdapter(locale),

    message(
      strings: TemplateStringsArray,
      ...expr: FhirDataTypeAdapterMessageExpression[]
    ) {
      return _.flatten(
        _.zip(
          strings,
          expr.map((x) => renderExpression(this, x))
        )
      ).join("");
    },
  };
}

function renderExpression(
  adapter: FhirDataTypeAdapter,
  value: FhirDataTypeAdapterMessageExpression
) {
  if (_.isNil(value)) {
    return "";
  }

  if (Array.isArray(value)) {
    const adapterName = value[1];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valueToFormat: any = value[0];
    const options = value[2];

    return adapter[adapterName].format(valueToFormat, options);
  }

  return value.toString();
}

export * from "./data-types/date";
