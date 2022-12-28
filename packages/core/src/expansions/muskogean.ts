/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Muskogean
 */
export const MuskogeanCode = {
  /**
   * CentralMuskogean
   */
  _CentralMuskogean: "_CentralMuskogean",

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

  /**
   * WesternMuskogean
   */
  _WesternMuskogean: "_WesternMuskogean",

  /**
   * Choctaw
   */
  "x-CCT": "x-CCT",

  /**
   * Chickasaw
   */
  "x-CIC": "x-CIC",

  /**
   * Creek
   */
  "x-CRK": "x-CRK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MuskogeanCode = typeof MuskogeanCode[keyof typeof MuskogeanCode];
