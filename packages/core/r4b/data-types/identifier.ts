import { Identifier } from "fhir/r4";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { fhirCodeableConceptTypeAdapter } from "./codeableConcept";
import { comparePeriods } from "./helpers";
import { fhirPeriodTypeAdapter } from "./period";

/**
 * A numeric or alphanumeric string that is associated with a single object or entity within a given system.
 *
 * @see https://hl7.org/fhir/datatypes.html#identifier
 */

export type FhirIdentifierFormatOptions = {
  style?: "full" | "long" | "medium" | "short" | "value" | null | undefined;
  /**
   * A dictionary of system as key, and system labels as value
   */
  systemsLabels?: { [k: string]: string };

  /**
   * When using a list of identifiers:
   * - the sort order for the `use` attribute.
   * - the filter to select only specific values
   *
   * Defaults to [usual, official, temp, secondary, old, undefined]
   */
  useFilterOrder?: Array<Identifier["use"]> | null | undefined;

  /**
   * When using a list of identifiers:
   * - the sort order for the `system` attribute.
   * - the filter to select only specific values
   *
   * no default (no order and none filtered out)
   */
  systemFilterOrder?: Array<Identifier["system"]> | null | undefined;

  /**
   * When using a list of identifiers, format only the first n (after sorting).
   * Default to Infinity to show or all identifiers in a list.
   */
  max?: number | null | undefined;

  /**
   * When using a list of identifiers, the options to pass to the Intl listFormat method.
   */
  listFormatOptions?: Intl.ListFormatOptions | undefined;

  valueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
};

export interface FhirIdentifierTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR identifier
   *
   * @see https://hl7.org/fhir/datatypes.html#identifier
   */
  format(
    value: Identifier | Identifier[] | null | undefined,
    options?: FhirIdentifierFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirIdentifierTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirIdentifierTypeAdapter(
  locale?: string | undefined
): FhirIdentifierTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirIdentifier, options) {
      if (Array.isArray(fhirIdentifier)) {
        const formattedIdentifierList = filterAndSortIdentifiers(
          fhirIdentifier,
          options
        ).map((identifier) => this.format(identifier, options) as string);

        return new Intl.ListFormat(locale, options?.listFormatOptions).format(
          formattedIdentifierList
        );
      }

      if (!fhirIdentifier?.value) return "";

      const use = fhirCodeTypeAdapter(locale).format(fhirIdentifier.use, {
        valueSetExpansions: options?.valueSetExpansions,
      });
      const type = fhirCodeableConceptTypeAdapter(locale).format(
        fhirIdentifier.type,
        {
          valueSetExpansions: options?.valueSetExpansions,
          style:
            options?.style === "long" || options?.style === "full"
              ? "full"
              : "short",
        }
      );
      const period = fhirPeriodTypeAdapter(locale).format(
        fhirIdentifier.period
      );
      const system =
        options?.systemsLabels?.[fhirIdentifier.system || "undefined"] ||
        fhirIdentifier.system;

      switch (options?.style) {
        case "value":
          return fhirIdentifier.value;
        case null:
        case undefined:
        case "short":
          return `${system ? system + ": " : ""}${fhirIdentifier.value}`;
        case "medium":
          return `${system ? system + ": " : ""}${
            fhirIdentifier.value
          } (${use})`;
        case "long":
          return `${system ? system + ": " : ""}${
            fhirIdentifier.value
          }\n${use} - ${type}`;
        case "full":
          return `[${period}]\n${system ? system + ": " : ""}${
            fhirIdentifier.value
          }\n${use} - ${type}`;
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}

const filterAndSortIdentifiers = (
  identifiers: Identifier[],
  options: FhirIdentifierFormatOptions | null | undefined
): Identifier[] => {
  const useFilterOrder = options?.useFilterOrder || identifierUseOrder;
  const useIndexedOrder: { [k: string]: number } = useFilterOrder.reduce(
    (indexedValues, currentValue, index) => ({
      ...indexedValues,
      [currentValue || "undefined"]: index,
    }),
    {}
  );

  const systemFilterOrder = options?.systemFilterOrder || null;
  const systemIndexedOrder: { [k: string]: number } | null =
    systemFilterOrder &&
    systemFilterOrder.reduce(
      (indexedValues, currentValue, index) => ({
        ...indexedValues,
        [currentValue || "undefined"]: index,
      }),
      {}
    );

  // filter out by use
  if (useFilterOrder)
    identifiers = identifiers.filter((identifier) =>
      useFilterOrder.includes(identifier.use)
    );

  // filter out by system
  if (systemFilterOrder)
    identifiers = identifiers.filter((identifier) =>
      systemFilterOrder?.includes(identifier.system)
    );

  // sort out by period, then system, then use
  identifiers = identifiers.sort((identifier1, identifier2) => {
    const periodComparisonResult = comparePeriods(identifier1, identifier2);

    if (periodComparisonResult) return periodComparisonResult;

    // then sort by system

    const systemComparison =
      (systemIndexedOrder?.[identifier1.use || "undefined"] || 0) -
      (systemIndexedOrder?.[identifier2.use || "undefined"] || 0);

    if (systemComparison) return systemComparison;

    // then sort by use
    return (
      (useIndexedOrder[identifier1.use || "undefined"] || 0) -
      (useIndexedOrder[identifier2.use || "undefined"] || 0)
    );
  });

  if (options?.max) {
    identifiers = identifiers.slice(0, options.max);
  }

  return identifiers;
};

const identifierUseOrder = [
  "usual",
  "official",
  "temp",
  "secondary",
  "old",
  undefined,
];
