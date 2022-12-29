/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralMuskogean
 */
export const CentralMuskogeanCode = {
  /**
   * Alabama
   */
  Alabama: "x-AKZ",

  /**
   * Koasati
   */
  Koasati: "x-CKU",

  /**
   * Mikasuki
   */
  Mikasuki: "x-MIK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralMuskogeanCode =
  typeof CentralMuskogeanCode[keyof typeof CentralMuskogeanCode];
