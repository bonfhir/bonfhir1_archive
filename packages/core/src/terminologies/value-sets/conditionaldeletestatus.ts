/**
 * A code that indicates how the server supports conditional delete.
 * http://hl7.org/fhir/ValueSet/conditional-delete-status
 */
export const ConditionalDeleteStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionalDeleteStatusCode =
  typeof ConditionalDeleteStatusCode[keyof typeof ConditionalDeleteStatusCode];
