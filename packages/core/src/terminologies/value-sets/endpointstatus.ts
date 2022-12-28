/**
 * The status of the endpoint.
 * http://hl7.org/fhir/ValueSet/endpoint-status
 */
export const EndpointStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EndpointStatusCode =
  typeof EndpointStatusCode[keyof typeof EndpointStatusCode];
