/**
 * A living subject from the animal kingdom.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassAnimal
 */
export const EntityClassAnimalCode = {
  /**
   * animal
   */
  ANM: "ANM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassAnimalCode =
  typeof EntityClassAnimalCode[keyof typeof EntityClassAnimalCode];
