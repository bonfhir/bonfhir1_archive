/**
 * Media Type Code
 * http://hl7.org/fhir/ValueSet/dicm-405-mediatype
 */
export const MediaTypeCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MediaTypeCodeCode =
  typeof MediaTypeCodeCode[keyof typeof MediaTypeCodeCode];
