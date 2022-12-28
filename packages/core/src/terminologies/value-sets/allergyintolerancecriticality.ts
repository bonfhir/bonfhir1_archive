/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 * http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality
 */
export const AllergyIntoleranceCriticalityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceCriticalityCode =
  typeof AllergyIntoleranceCriticalityCode[keyof typeof AllergyIntoleranceCriticalityCode];
