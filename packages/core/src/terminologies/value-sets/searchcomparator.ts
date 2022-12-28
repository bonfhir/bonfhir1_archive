/**
 * What Search Comparator Codes are supported in search.
 * http://hl7.org/fhir/ValueSet/search-comparator
 */
export const SearchComparatorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SearchComparatorCode =
  typeof SearchComparatorCode[keyof typeof SearchComparatorCode];
