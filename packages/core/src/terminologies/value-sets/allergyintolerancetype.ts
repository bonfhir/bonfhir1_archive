/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 * http://hl7.org/fhir/ValueSet/allergy-intolerance-type
 */
export const AllergyIntoleranceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceTypeCode =
  typeof AllergyIntoleranceTypeCode[keyof typeof AllergyIntoleranceTypeCode];
