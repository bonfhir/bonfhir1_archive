/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 * http://hl7.org/fhir/ValueSet/location-physical-type
 */
export const LocationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LocationTypeCode =
  typeof LocationTypeCode[keyof typeof LocationTypeCode];
