/**
 * Codes identifying the category of observation range.
 * http://hl7.org/fhir/ValueSet/observation-range-category
 */
export const ObservationRangeCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationRangeCategoryCode =
  typeof ObservationRangeCategoryCode[keyof typeof ObservationRangeCategoryCode];
