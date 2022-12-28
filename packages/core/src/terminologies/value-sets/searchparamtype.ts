/**
 * Data types allowed to be used for search parameters.
 * http://hl7.org/fhir/ValueSet/search-param-type
 */
export const SearchParamTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SearchParamTypeCode =
  typeof SearchParamTypeCode[keyof typeof SearchParamTypeCode];
