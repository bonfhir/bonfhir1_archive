/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralSalish
 */
export const CentralSalishCode = {
  /**
   * Clallam
   */
  Clallam: "x-CLM",

  /**
   * Lushootseed
   */
  Lushootseed: "x-LUT",

  /**
   * Northern Straits
   */
  NorthernStraits: "x-STR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralSalishCode =
  typeof CentralSalishCode[keyof typeof CentralSalishCode];
