/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible payload document types.
 * http://hl7.org/fhir/ValueSet/endpoint-payload-type
 */
export const EndpointPayloadTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EndpointPayloadTypeCode =
  typeof EndpointPayloadTypeCode[keyof typeof EndpointPayloadTypeCode];
