import { FhirURITypeAdapter, fhirURITypeAdapter } from "./data-types/URI";
import { FhirURLTypeAdapter, fhirURLTypeAdapter } from "./data-types/URL";
import {
  FhirAddressTypeAdapter,
  fhirAddressTypeAdapter,
} from "./data-types/address";
import { FhirAgeTypeAdapter, fhirAgeTypeAdapter } from "./data-types/age";
import {
  FhirBooleanTypeAdapter,
  fhirBooleanTypeAdapter,
} from "./data-types/boolean";
import {
  FhirCanonicalTypeAdapter,
  fhirCanonicalTypeAdapter,
} from "./data-types/canonical";
import { FhirCodeTypeAdapter, fhirCodeTypeAdapter } from "./data-types/code";
import {
  FhirCodeableConceptTypeAdapter,
  fhirCodeableConceptTypeAdapter,
} from "./data-types/codeableConcept";
import {
  FhirCodingTypeAdapter,
  fhirCodingTypeAdapter,
} from "./data-types/coding";
import {
  FhirContactPointTypeAdapter,
  fhirContactPointTypeAdapter,
} from "./data-types/contactPoint";
import { FhirCountTypeAdapter, fhirCountTypeAdapter } from "./data-types/count";
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
  FhirDistanceTypeAdapter,
  fhirDistanceTypeAdapter,
} from "./data-types/distance";
import {
  FhirDurationTypeAdapter,
  fhirDurationTypeAdapter,
} from "./data-types/duration";
import {
  FhirHumanNameTypeAdapter,
  fhirHumanNameTypeAdapter,
} from "./data-types/humanName";
import {
  FhirIdentifierTypeAdapter,
  fhirIdentifierTypeAdapter,
} from "./data-types/identifier";
import {
  FhirInstantTypeAdapter,
  fhirInstantTypeAdapter,
} from "./data-types/instant";
import {
  FhirIntegerTypeAdapter,
  fhirIntegerTypeAdapter,
} from "./data-types/integer";
import {
  FhirMarkdownTypeAdapter,
  fhirMarkdownTypeAdapter,
} from "./data-types/markdown";
import { FhirMoneyTypeAdapter, fhirMoneyTypeAdapter } from "./data-types/money";
import {
  FhirPeriodTypeAdapter,
  fhirPeriodTypeAdapter,
} from "./data-types/period";
import {
  FhirPositiveIntTypeAdapter,
  FhirUnsignedIntTypeAdapter,
  fhirPositiveIntTypeAdapter,
  fhirUnsignedIntTypeAdapter,
} from "./data-types/positiveInt";
import {
  FhirQuantityTypeAdapter,
  fhirQuantityTypeAdapter,
} from "./data-types/quantity";
import { FhirRangeTypeAdapter, fhirRangeTypeAdapter } from "./data-types/range";
import { FhirRatioTypeAdapter, fhirRatioTypeAdapter } from "./data-types/ratio";
import {
  FhirRatioRangeTypeAdapter,
  fhirRatioRangeTypeAdapter,
} from "./data-types/ratioRange";
import {
  FhirSimpleQuantityTypeAdapter,
  fhirSimpleQuantityTypeAdapter,
} from "./data-types/simpleQuantity";
import {
  FhirBase64BinaryTypeAdapter,
  FhirIdTypeAdapter,
  FhirOidTypeAdapter,
  FhirStringTypeAdapter,
  FhirUuidTypeAdapter,
  fhirBase64BinaryTypeAdapter,
  fhirIdTypeAdapter,
  fhirOidTypeAdapter,
  fhirStringTypeAdapter,
  fhirUuidTypeAdapter,
} from "./data-types/string";

/**
 * This is used to manipulate FHIR data types, both parsing values and formatting them as localized strings.
 *
 * @see https://hl7.org/fhir/datatypes.html
 */
export interface FhirDataTypeAdapter {
  locale: string | undefined;

  address: FhirAddressTypeAdapter;
  age: FhirAgeTypeAdapter;
  base64Binary: FhirBase64BinaryTypeAdapter;
  boolean: FhirBooleanTypeAdapter;
  canonical: FhirCanonicalTypeAdapter;
  code: FhirCodeTypeAdapter;
  codeableConcept: FhirCodeableConceptTypeAdapter;
  coding: FhirCodingTypeAdapter;
  contactPoint: FhirContactPointTypeAdapter;
  count: FhirCountTypeAdapter;
  date: FhirDateTypeAdapter;
  dateTime: FhirDateTimeTypeAdapter;
  decimal: FhirDecimalTypeAdapter;
  distance: FhirDistanceTypeAdapter;
  duration: FhirDurationTypeAdapter;
  humanName: FhirHumanNameTypeAdapter;
  id: FhirIdTypeAdapter;
  identifier: FhirIdentifierTypeAdapter;
  instant: FhirInstantTypeAdapter;
  integer: FhirIntegerTypeAdapter;
  markdown: FhirMarkdownTypeAdapter;
  money: FhirMoneyTypeAdapter;
  oid: FhirOidTypeAdapter;
  period: FhirPeriodTypeAdapter;
  positiveInt: FhirPositiveIntTypeAdapter;
  quantity: FhirQuantityTypeAdapter;
  range: FhirRangeTypeAdapter;
  ratio: FhirRatioTypeAdapter;
  ratioRange: FhirRatioRangeTypeAdapter;
  simpleQuantity: FhirSimpleQuantityTypeAdapter;
  string: FhirStringTypeAdapter;
  unsignedInt: FhirUnsignedIntTypeAdapter;
  uri: FhirURITypeAdapter;
  url: FhirURLTypeAdapter;
  uuid: FhirUuidTypeAdapter;

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
  | MessageExpressionAdapter<"address">
  | MessageExpressionAdapter<"age">
  | MessageExpressionAdapter<"base64Binary">
  | MessageExpressionAdapter<"boolean">
  | MessageExpressionAdapter<"canonical">
  | MessageExpressionAdapter<"code">
  | MessageExpressionAdapter<"codeableConcept">
  | MessageExpressionAdapter<"coding">
  | MessageExpressionAdapter<"contactPoint">
  | MessageExpressionAdapter<"count">
  | MessageExpressionAdapter<"date">
  | MessageExpressionAdapter<"dateTime">
  | MessageExpressionAdapter<"decimal">
  | MessageExpressionAdapter<"distance">
  | MessageExpressionAdapter<"duration">
  | MessageExpressionAdapter<"humanName">
  | MessageExpressionAdapter<"id">
  | MessageExpressionAdapter<"identifier">
  | MessageExpressionAdapter<"instant">
  | MessageExpressionAdapter<"integer">
  | MessageExpressionAdapter<"markdown">
  | MessageExpressionAdapter<"money">
  | MessageExpressionAdapter<"oid">
  | MessageExpressionAdapter<"period">
  | MessageExpressionAdapter<"positiveInt">
  | MessageExpressionAdapter<"quantity">
  | MessageExpressionAdapter<"range">
  | MessageExpressionAdapter<"ratio">
  | MessageExpressionAdapter<"ratioRange">
  | MessageExpressionAdapter<"simpleQuantity">
  | MessageExpressionAdapter<"string">
  | MessageExpressionAdapter<"unsignedInt">
  | MessageExpressionAdapter<"unsignedInt">
  | MessageExpressionAdapter<"uri">
  | MessageExpressionAdapter<"url">
  | MessageExpressionAdapter<"uuid">
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
    // primitive types
    base64Binary: fhirBase64BinaryTypeAdapter(locale),
    boolean: fhirBooleanTypeAdapter(locale),
    canonical: fhirCanonicalTypeAdapter(locale),
    code: fhirCodeTypeAdapter(locale),
    date: fhirDateTypeAdapter(locale),
    dateTime: fhirDateTimeTypeAdapter(locale),
    decimal: fhirDecimalTypeAdapter(locale),
    id: fhirIdTypeAdapter(locale),
    identifier: fhirIdentifierTypeAdapter(locale),
    instant: fhirInstantTypeAdapter(locale),
    integer: fhirIntegerTypeAdapter(locale),
    markdown: fhirMarkdownTypeAdapter(locale),
    oid: fhirOidTypeAdapter(locale),
    positiveInt: fhirPositiveIntTypeAdapter(locale),
    string: fhirStringTypeAdapter(locale),
    unsignedInt: fhirUnsignedIntTypeAdapter(locale),
    uri: fhirURITypeAdapter(locale),
    url: fhirURLTypeAdapter(locale),
    uuid: fhirUuidTypeAdapter(locale),
    // general-purpose types
    address: fhirAddressTypeAdapter(locale),
    age: fhirAgeTypeAdapter(locale),
    codeableConcept: fhirCodeableConceptTypeAdapter(locale),
    coding: fhirCodingTypeAdapter(locale),
    contactPoint: fhirContactPointTypeAdapter(locale),
    count: fhirCountTypeAdapter(locale),
    distance: fhirDistanceTypeAdapter(locale),
    duration: fhirDurationTypeAdapter(locale),
    humanName: fhirHumanNameTypeAdapter(locale),
    money: fhirMoneyTypeAdapter(locale),
    period: fhirPeriodTypeAdapter(locale),
    quantity: fhirQuantityTypeAdapter(locale),
    range: fhirRangeTypeAdapter(locale),
    ratio: fhirRatioTypeAdapter(locale),
    ratioRange: fhirRatioRangeTypeAdapter(locale),
    simpleQuantity: fhirSimpleQuantityTypeAdapter(locale),

    message(
      strings: TemplateStringsArray,
      ...expr: FhirDataTypeAdapterMessageExpression[]
    ) {
      const renderedExpressions = expr.map((x) => renderExpression(this, x));
      return strings
        .map((str, idx) => [str, renderedExpressions[idx]])
        .flat()
        .join("");
    },
  };
}

function renderExpression(
  adapter: FhirDataTypeAdapter,
  value: FhirDataTypeAdapterMessageExpression
) {
  if (value == null) {
    return "";
  }

  if (Array.isArray(value)) {
    const adapterName = value[1];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valueToFormat: any = value[0];
    const options = value[2];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return adapter[adapterName].format(valueToFormat, options as any);
  }

  return value.toString();
}

export * from "./data-types/date";
