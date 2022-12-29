/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-StreetAddressLine
 */
export const StreetAddressLineCode = {
  /**
   * street address line
   */
  streetaddressline: "SAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StreetAddressLineCode =
  typeof StreetAddressLineCode[keyof typeof StreetAddressLineCode];
