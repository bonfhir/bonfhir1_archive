/**
 * Substance category codes
 * http://hl7.org/fhir/ValueSet/substance-category
 */
export const SubstanceCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceCategoryCodesCode =
  typeof SubstanceCategoryCodesCode[keyof typeof SubstanceCategoryCodesCode];
