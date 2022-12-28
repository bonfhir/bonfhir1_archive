/**
 * Codes for high level media categories.
 * http://hl7.org/fhir/ValueSet/media-type
 */
export const MediaTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MediaTypeCode = typeof MediaTypeCode[keyof typeof MediaTypeCode];
