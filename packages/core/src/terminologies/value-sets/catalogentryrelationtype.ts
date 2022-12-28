/**
 * The type of relations between entries.
 * http://hl7.org/fhir/ValueSet/relation-type
 */
export const CatalogEntryRelationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CatalogEntryRelationTypeCode =
  typeof CatalogEntryRelationTypeCode[keyof typeof CatalogEntryRelationTypeCode];
