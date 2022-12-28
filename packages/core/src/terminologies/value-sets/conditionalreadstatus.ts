/**
 * A code that indicates how the server supports conditional read.
 * http://hl7.org/fhir/ValueSet/conditional-read-status
 */
export const ConditionalReadStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionalReadStatusCode =
  typeof ConditionalReadStatusCode[keyof typeof ConditionalReadStatusCode];
