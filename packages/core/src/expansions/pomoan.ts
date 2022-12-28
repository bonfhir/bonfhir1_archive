/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Pomoan
 */
export const PomoanCode = {
  /**
   * Kashaya
   */
  "x-KJU": "x-KJU",

  /**
   * Northeastern Pomo
   */
  "x-PEF": "x-PEF",

  /**
   * Southeastern Pomo
   */
  "x-PEO": "x-PEO",

  /**
   * Southern Pomo
   */
  "x-PEQ": "x-PEQ",

  /**
   * Central Pomo
   */
  "x-POO": "x-POO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PomoanCode = typeof PomoanCode[keyof typeof PomoanCode];
