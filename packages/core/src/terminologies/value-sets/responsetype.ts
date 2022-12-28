/**
 * The kind of response to a message.
 * http://hl7.org/fhir/ValueSet/response-code
 */
export const ResponseTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResponseTypeCode =
  typeof ResponseTypeCode[keyof typeof ResponseTypeCode];
