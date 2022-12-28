/**
 * Category of an identified substance associated with allergies or intolerances.
 * http://hl7.org/fhir/ValueSet/allergy-intolerance-category
 */
export const AllergyIntoleranceCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceCategoryCode =
  typeof AllergyIntoleranceCategoryCode[keyof typeof AllergyIntoleranceCategoryCode];
