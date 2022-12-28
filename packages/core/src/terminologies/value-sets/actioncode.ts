/**
 * Provides examples of actions to be performed.
 * http://hl7.org/fhir/ValueSet/action-code
 */
export const ActionCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionCodeCode = typeof ActionCodeCode[keyof typeof ActionCodeCode];
