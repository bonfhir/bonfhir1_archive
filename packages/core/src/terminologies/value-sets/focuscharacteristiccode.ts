/**
 * Evidence focus characteristic code.
 * http://hl7.org/fhir/ValueSet/focus-characteristic-code
 */
export const FocusCharacteristicCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FocusCharacteristicCodeCode =
  typeof FocusCharacteristicCodeCode[keyof typeof FocusCharacteristicCodeCode];
