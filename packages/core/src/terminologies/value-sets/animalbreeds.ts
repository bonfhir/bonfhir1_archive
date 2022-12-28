/**
 * This example value set defines a set of codes that can be used to indicate breeds of species.
 * http://hl7.org/fhir/ValueSet/animal-breeds
 */
export const AnimalBreedsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AnimalBreedsCode =
  typeof AnimalBreedsCode[keyof typeof AnimalBreedsCode];
