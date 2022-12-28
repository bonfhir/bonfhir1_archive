/**
 * The type of knowledge asset this library contains.
 * http://hl7.org/fhir/ValueSet/library-type
 */
export const LibraryTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LibraryTypeCode =
  typeof LibraryTypeCode[keyof typeof LibraryTypeCode];
