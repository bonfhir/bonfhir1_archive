/**
 * Codes to denote a guideline or policy statement.when a genetic test result is being shared as a secondary finding.
 * http://hl7.org/fhir/ValueSet/secondary-finding
 */
export const ObservationCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationCategoryCodesCode =
  typeof ObservationCategoryCodesCode[keyof typeof ObservationCategoryCodesCode];
