/**
 * A set of codes each of which specifies a certain subcategory of the name part in addition to the main name part type.
 * http://hl7.org/fhir/ValueSet/name-part-qualifier
 */
export const EntityNamePartQualifierCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNamePartQualifierCode =
  typeof EntityNamePartQualifierCode[keyof typeof EntityNamePartQualifierCode];
