/**
 * The territory of a county, parish or other division of a state or province.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassCountyOrParish
 */
export const EntityClassCountyOrParishCode = {
  /**
   * county or parish
   */
  countyorparish: "COUNTY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassCountyOrParishCode =
  typeof EntityClassCountyOrParishCode[keyof typeof EntityClassCountyOrParishCode];
