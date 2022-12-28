/**
 * A tissue type of an animal.
 * http://hl7.org/fhir/ValueSet/animal-tissue-type
 */
export const AnimalTissueTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AnimalTissueTypeCode =
  typeof AnimalTissueTypeCode[keyof typeof AnimalTissueTypeCode];
