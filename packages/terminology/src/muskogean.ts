/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Muskogean
 */
export const MuskogeanCode = {
  /**
   * CentralMuskogean
   */
  CentralMuskogean: "_CentralMuskogean",

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

  /**
   * WesternMuskogean
   */
  WesternMuskogean: "_WesternMuskogean",

  /**
   * Choctaw
   */
  Choctaw: "x-CCT",

  /**
   * Chickasaw
   */
  Chickasaw: "x-CIC",

  /**
   * Creek
   */
  Creek: "x-CRK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MuskogeanCode = typeof MuskogeanCode[keyof typeof MuskogeanCode];
