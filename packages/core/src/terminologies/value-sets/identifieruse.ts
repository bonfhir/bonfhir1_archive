/**
 * Identifies the purpose for this identifier, if known .
 * http://hl7.org/fhir/ValueSet/identifier-use
 */
export const IdentifierUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IdentifierUseCode =
  typeof IdentifierUseCode[keyof typeof IdentifierUseCode];
