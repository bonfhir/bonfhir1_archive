/**
 * Logical grouping of characteristics.
 * http://hl7.org/fhir/ValueSet/characteristic-combination
 */
export const CharacteristicCombinationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CharacteristicCombinationCode =
  typeof CharacteristicCombinationCode[keyof typeof CharacteristicCombinationCode];
