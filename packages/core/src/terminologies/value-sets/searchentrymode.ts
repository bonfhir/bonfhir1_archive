/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 * http://hl7.org/fhir/ValueSet/search-entry-mode
 */
export const SearchEntryModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SearchEntryModeCode =
  typeof SearchEntryModeCode[keyof typeof SearchEntryModeCode];
