/**
 * This value set defines a base set of codes for country, country subdivision and region    for indicating where a resource is intended to be used.   
   
   Note: The codes for countries and country subdivisions are taken from    [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)    while the codes for "supra-national" regions are from    [UN Standard country or area codes for statistical use (M49)](http://unstats.un.org/unsd/methods/m49/m49.htm).
 * http://hl7.org/fhir/ValueSet/jurisdiction
 */
export const JurisdictionValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type JurisdictionValueSetCode =
  typeof JurisdictionValueSetCode[keyof typeof JurisdictionValueSetCode];
