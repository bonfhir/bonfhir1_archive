import { Identifier } from "fhir/r4";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { fhirCodeableConceptTypeAdapter } from "./codeableConcept";
import { fhirDateTimeTypeAdapter } from "./dateTime";
import { fhirPeriodTypeAdapter } from "./period";

/**
 * A numeric or alphanumeric string that is associated with a single object or entity within a given system.
 *
 * @see https://hl7.org/fhir/datatypes.html#identifier
 */

export type FhirIdentifierFormatOptions = {
  style?: "full" | "long" | "medium" | "short" | "value" | null | undefined;
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
  ): string | string[];
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
      if (Array.isArray(fhirIdentifier))
        return sortIdentifiers(fhirIdentifier).map(
          (identifier) => this.format(identifier, options) as string
        );

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
      switch (options?.style) {
        case null:
        case undefined:
        case "value":
          return fhirIdentifier.value;
        case "short":
          return `${fhirIdentifier.value} (${use})`;
        case "medium":
          return `${use} (${type})\n${fhirIdentifier.value}`;
        case "long":
          return `${use} (${type})\n${fhirIdentifier.value}`;
        case "full":
          return `[${period}] - ${use}\n(${type})\n${fhirIdentifier.value}`;
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}

const sortIdentifiers = (identifiers: Identifier[]): Identifier[] => {
  return identifiers.sort((identifier1, identifier2) => {
    const identifier1EndDate = dateTimeAdapter.parse(identifier1?.period?.end);
    const identifier2EndDate = dateTimeAdapter.parse(identifier2?.period?.end);

    // sort by period
    if (!identifier1EndDate && identifier2EndDate) return -1;
    if (!identifier2EndDate && identifier1EndDate) return 1;
    if (identifier1EndDate && identifier2EndDate) {
      if (identifier1EndDate.date > identifier2EndDate.date) return -1;
      if (identifier2EndDate.date > identifier1EndDate.date) return 1;
    }

    // then sort by use
    return (
      identifierUseOrder[identifier1.use || "undefined"] -
      identifierUseOrder[identifier2.use || "undefined"]
    );
  });
};

const dateTimeAdapter = fhirDateTimeTypeAdapter();

const identifierUseOrder = {
  usual: 0,
  official: 1,
  temp: 2,
  secondary: 3,
  old: 4,
  undefined: 4,
};
