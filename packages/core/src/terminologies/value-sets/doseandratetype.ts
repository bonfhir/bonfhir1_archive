/**
 * The kind of dose or rate specified.
 * http://hl7.org/fhir/ValueSet/dose-rate-type
 */
export const DoseAndRateTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseAndRateTypeCode =
  typeof DoseAndRateTypeCode[keyof typeof DoseAndRateTypeCode];
