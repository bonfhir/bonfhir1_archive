/**
 * This value set defines a base set of codes for countries.   
   
   Note: The codes for countries are taken from    [ISO 3166](https://www.iso.org/iso-3166-country-codes.html).
 * http://hl7.org/fhir/ValueSet/country
 */
export const CountryValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CountryValueSetCode =
  typeof CountryValueSetCode[keyof typeof CountryValueSetCode];
