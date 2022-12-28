/**
 * The status of a guidance response.
 * http://hl7.org/fhir/ValueSet/guidance-response-status
 */
export const GuidanceResponseStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GuidanceResponseStatusCode =
  typeof GuidanceResponseStatusCode[keyof typeof GuidanceResponseStatusCode];
