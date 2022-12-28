/**
 * Codes identifying the lifecycle stage of a request.
 * http://hl7.org/fhir/ValueSet/request-status
 */
export const RequestStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RequestStatusCode =
  typeof RequestStatusCode[keyof typeof RequestStatusCode];
