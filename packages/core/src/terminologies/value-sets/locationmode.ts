/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 * http://hl7.org/fhir/ValueSet/location-mode
 */
export const LocationModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LocationModeCode =
  typeof LocationModeCode[keyof typeof LocationModeCode];
