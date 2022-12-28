/**
 * Indicates whether the location is still in use.
 * http://hl7.org/fhir/ValueSet/location-status
 */
export const LocationStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LocationStatusCode =
  typeof LocationStatusCode[keyof typeof LocationStatusCode];
