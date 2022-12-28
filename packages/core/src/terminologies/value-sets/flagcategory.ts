/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 * http://hl7.org/fhir/ValueSet/flag-category
 */
export const FlagCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FlagCategoryCode =
  typeof FlagCategoryCode[keyof typeof FlagCategoryCode];
