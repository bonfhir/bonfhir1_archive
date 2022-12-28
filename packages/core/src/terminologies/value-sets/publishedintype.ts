/**
 * The type of publication such as book, database, or journal.
 * http://hl7.org/fhir/ValueSet/published-in-type
 */
export const PublishedInTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PublishedInTypeCode =
  typeof PublishedInTypeCode[keyof typeof PublishedInTypeCode];
