/**
 * The territory of a sovereign nation.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassCountry
 */
export const EntityClassCountryCode = {
  /**
   * country
   */
  COUNTRY: "COUNTRY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassCountryCode =
  typeof EntityClassCountryCode[keyof typeof EntityClassCountryCode];
