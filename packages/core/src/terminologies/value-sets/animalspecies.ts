/**
 * This example value set defines a set of codes that can be used to indicate species of animal patients.
 * http://hl7.org/fhir/ValueSet/animal-species
 */
export const AnimalSpeciesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AnimalSpeciesCode =
  typeof AnimalSpeciesCode[keyof typeof AnimalSpeciesCode];
