/**
 * Identifies the level of importance to be assigned to actioning the request.
 * http://hl7.org/fhir/ValueSet/request-priority
 */
export const RequestPriorityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RequestPriorityCode =
  typeof RequestPriorityCode[keyof typeof RequestPriorityCode];
