/**
 * Type for orientation.
 * http://hl7.org/fhir/ValueSet/orientation-type
 */
export const orientationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type orientationTypeCode =
  typeof orientationTypeCode[keyof typeof orientationTypeCode];
