/**
 * Codes indicating the degree of authority/intentionality associated with a request.
 * http://hl7.org/fhir/ValueSet/request-intent
 */
export const RequestIntentCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RequestIntentCode =
  typeof RequestIntentCode[keyof typeof RequestIntentCode];
