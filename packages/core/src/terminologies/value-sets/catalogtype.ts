/**
 * Description Needed Here
 * http://hl7.org/fhir/ValueSet/catalogType
 */
export const CatalogTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CatalogTypeCode =
  typeof CatalogTypeCode[keyof typeof CatalogTypeCode];
