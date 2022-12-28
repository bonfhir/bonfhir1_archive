/**
 * The type of action to be performed.
 * http://hl7.org/fhir/ValueSet/action-type
 */
export const ActionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionTypeCode = typeof ActionTypeCode[keyof typeof ActionTypeCode];
