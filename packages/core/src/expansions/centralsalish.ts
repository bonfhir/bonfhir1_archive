/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralSalish
 */
export const CentralSalishCode = {
  /**
   * Clallam
   */
  "x-CLM": "x-CLM",

  /**
   * Lushootseed
   */
  "x-LUT": "x-LUT",

  /**
   * Northern Straits
   */
  "x-STR": "x-STR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralSalishCode =
  typeof CentralSalishCode[keyof typeof CentralSalishCode];
