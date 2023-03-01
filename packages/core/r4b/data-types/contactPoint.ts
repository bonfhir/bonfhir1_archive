import { ContactPoint } from "fhir/r4";
import reduce from "lodash/reduce";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { fhirPeriodTypeAdapter } from "./period";

/**
 * Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.
 *
 * @see https://hl7.org/fhir/datatypes.html#contactPoint
 */

export type FhirContactPointFormatOptions = {
  /**
   * - short: display the value only (default)
   * - medium: display the value and the use
   * - long: display the system, the value and the use
   * - full: display the rank, system, the value and the use
   */
  style?: "full" | "long" | "medium" | "short" | null | undefined;

  /**
   * The separator to use to join formatted contact point. Defaults to ", "
   */
  lineSeparator?: string | null | undefined;

  /**
   * When using a list of contact points, format only the first n (after sorting).
   * Default to Infinity to show or all contact point in a list.
   */
  max?: number | null | undefined;

  /**
   * When using a list of contact points:
   * - the sort order for the `use` attribute.
   * - the filter to select only specific values
   *
   * Defaults to [home, work, temp, old, mobile, undefined]
   */
  useFilterOrder?: Array<ContactPoint["use"]> | null | undefined;

  /**
   * When using a list of contact points, the options to pass to the Intl listFormat method.
   */
  listFormatOptions?: Intl.ListFormatOptions | undefined;

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
    value: ContactPoint | ContactPoint[] | null | undefined,
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
      if (Array.isArray(fhirContactPoint)) {
        const formattedContactPointList = filterAndSortContactPoints(
          fhirContactPoint,
          options
        ).map((contactPoint) => this.format(contactPoint, options));

        return new Intl.ListFormat(locale, options?.listFormatOptions).format(
          formattedContactPointList
        );
      }

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
          ].join(options?.lineSeparator || ", ");
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}

const filterAndSortContactPoints = (
  contactPoints: ContactPoint[],
  options: FhirContactPointFormatOptions | null | undefined
): ContactPoint[] => {
  const useFilterOrder = options?.useFilterOrder || contactPointUseOrderFilter;
  const indexedOrder: { [k: string]: number } = reduce(
    useFilterOrder,
    (indexedValues, currentValue, index) => ({
      ...indexedValues,
      [currentValue || "undefined"]: index,
    }),
    {}
  );

  // filter out by use
  if (options?.useFilterOrder)
    contactPoints = contactPoints.filter((contactPoint) =>
      useFilterOrder.includes(contactPoint.use)
    );

  contactPoints = contactPoints.sort((contactPoint1, contactPoint2) => {
    // sort rank
    if (
      (contactPoint1.rank || contactPoint2.rank) &&
      contactPoint1.rank !== contactPoint2.rank
    ) {
      if (contactPoint1.rank && !contactPoint2.rank) return -1;
      if (!contactPoint1.rank && contactPoint2.rank) return 1;
      return (contactPoint1.rank || 0) - (contactPoint2.rank || 0);
    }

    // then sort by use
    return (
      (indexedOrder[contactPoint1.use || "undefined"] || 0) -
      (indexedOrder[contactPoint2.use || "undefined"] || 0)
    );
  });

  if (options?.max) {
    contactPoints = contactPoints.slice(0, options.max);
  }

  return contactPoints;
};

const contactPointUseOrderFilter = [
  "home",
  "work",
  "temp",
  "old",
  "mobile",
  undefined,
];
