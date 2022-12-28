/**
 * This value set includes all possible codes from BCP-13 (http://tools.ietf.org/html/bcp13)
 * http://hl7.org/fhir/ValueSet/mimetypes
 */
export const MimeTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MimeTypesCode = typeof MimeTypesCode[keyof typeof MimeTypesCode];
