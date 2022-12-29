/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SouthernNumic
 */
export const SouthernNumicCode = {
  /**
   * Kawaiisu
   */
  Kawaiisu: "x-KAW",

  /**
   * Ute-Southern Paiute
   */
  UteSouthernPaiute: "x-UTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SouthernNumicCode =
  typeof SouthernNumicCode[keyof typeof SouthernNumicCode];
