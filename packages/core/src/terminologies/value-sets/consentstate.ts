/**
 * Indicates the state of the consent.
 * http://hl7.org/fhir/ValueSet/consent-state-codes
 */
export const ConsentStateCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentStateCode =
  typeof ConsentStateCode[keyof typeof ConsentStateCode];
