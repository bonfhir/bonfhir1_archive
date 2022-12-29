/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-StreetName
 */
export const StreetNameCode = {
  /**
   * street name
   */
  streetname: "STR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StreetNameCode = typeof StreetNameCode[keyof typeof StreetNameCode];
