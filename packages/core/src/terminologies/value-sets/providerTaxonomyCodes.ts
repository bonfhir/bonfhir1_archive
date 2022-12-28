/**
 * NUCC Healthcare Provider Taxonomy codes
 * http://hl7.org/fhir/ValueSet/provider-taxonomy
 */
export const ProviderTaxonomyCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProviderTaxonomyCodesCode =
  typeof ProviderTaxonomyCodesCode[keyof typeof ProviderTaxonomyCodesCode];
