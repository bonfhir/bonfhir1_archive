/**
 * This value set includes sample Modifier type codes.
 * http://hl7.org/fhir/ValueSet/claim-modifiers
 */
export const ModifierTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ModifierTypeCodesCode =
  typeof ModifierTypeCodesCode[keyof typeof ModifierTypeCodesCode];
