import flatten from "lodash/flatten";
import isNil from "lodash/isNil";
import zip from "lodash/zip";
import {
  FhirAddressTypeAdapter,
  fhirAddressTypeAdapter,
} from "./data-types/address";
import { fhirAgeTypeAdapter, FhirAgeTypeAdapter } from "./data-types/age";
import {
  FhirBooleanTypeAdapter,
  fhirBooleanTypeAdapter,
} from "./data-types/boolean";
import {
  FhirCanonicalTypeAdapter,
  fhirCanonicalTypeAdapter,
} from "./data-types/canonical";
import { fhirCodeTypeAdapter, FhirCodeTypeAdapter } from "./data-types/code";
import {
  FhirCodeableConceptTypeAdapter,
  fhirCodeableConceptTypeAdapter,
} from "./data-types/codeableConcept";
import {
  fhirCodingTypeAdapter,
  FhirCodingTypeAdapter,
} from "./data-types/coding";
import {
  fhirContactPointTypeAdapter,
  FhirContactPointTypeAdapter,
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
  fhirHumanNameTypeAdapter,
  FhirHumanNameTypeAdapter,
} from "./data-types/humanName";
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
import { fhirMoneyTypeAdapter, FhirMoneyTypeAdapter } from "./data-types/money";
import {
  fhirPeriodTypeAdapter,
  FhirPeriodTypeAdapter,
} from "./data-types/period";
import {
  fhirPositiveIntTypeAdapter,
  FhirPositiveIntTypeAdapter,
  fhirUnsignedIntTypeAdapter,
  FhirUnsignedIntTypeAdapter,
} from "./data-types/positiveInt";
import {
  FhirQuantityTypeAdapter,
  fhirQuantityTypeAdapter,
} from "./data-types/quantity";
import { fhirRangeTypeAdapter, FhirRangeTypeAdapter } from "./data-types/range";
import { fhirRatioTypeAdapter, FhirRatioTypeAdapter } from "./data-types/ratio";
import {
  fhirRatioRangeTypeAdapter,
  FhirRatioRangeTypeAdapter,
} from "./data-types/ratioRange";
import {
  fhirSimpleQuantityTypeAdapter,
  FhirSimpleQuantityTypeAdapter,
} from "./data-types/simpleQuantity";
import {
  FhirBase64BinaryTypeAdapter,
  fhirBase64BinaryTypeAdapter,
  fhirIdTypeAdapter,
  FhirIdTypeAdapter,
  fhirOidTypeAdapter,
  FhirOidTypeAdapter,
  fhirStringTypeAdapter,
  FhirStringTypeAdapter,
  fhirUuidTypeAdapter,
  FhirUuidTypeAdapter,
} from "./data-types/string";
import { FhirURITypeAdapter, fhirURITypeAdapter } from "./data-types/URI";
import { FhirURLTypeAdapter, fhirURLTypeAdapter } from "./data-types/URL";

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
      return flatten(
        zip(
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
  if (isNil(value)) {
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
