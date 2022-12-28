/**
 * A supported modifier for a search parameter.
 * http://hl7.org/fhir/ValueSet/search-modifier-code
 */
export const SearchModifierCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SearchModifierCodeCode =
  typeof SearchModifierCodeCode[keyof typeof SearchModifierCodeCode];
