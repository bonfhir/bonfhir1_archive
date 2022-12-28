/**
 * This example value set defines a set of codes that can be used to indicate the current state of the animal's reproductive organs.
 * http://hl7.org/fhir/ValueSet/animal-genderstatus
 */
export const GenderStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GenderStatusCode =
  typeof GenderStatusCode[keyof typeof GenderStatusCode];
