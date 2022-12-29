/**
 * The method used to determine the characteristic(s) of the variable.
 * http://terminology.hl7.org/ValueSet/characteristic-method
 */
export const CharacteristicMethodCode = {
  /**
   * Default
   */
  Default: "Default",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CharacteristicMethodCode =
  typeof CharacteristicMethodCode[keyof typeof CharacteristicMethodCode];
