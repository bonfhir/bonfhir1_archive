/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralMuskogean
 */
export const CentralMuskogeanCode = {
  /**
   * Alabama
   */
  "x-AKZ": "x-AKZ",

  /**
   * Koasati
   */
  "x-CKU": "x-CKU",

  /**
   * Mikasuki
   */
  "x-MIK": "x-MIK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralMuskogeanCode =
  typeof CentralMuskogeanCode[keyof typeof CentralMuskogeanCode];
