/**
 * The method used to determine the characteristic(s) of the variable.
 * http://hl7.org/fhir/ValueSet/characteristic-method
 */
export const CharacteristicMethodCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CharacteristicMethodCode =
  typeof CharacteristicMethodCode[keyof typeof CharacteristicMethodCode];
