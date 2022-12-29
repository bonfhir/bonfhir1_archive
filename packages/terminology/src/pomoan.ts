/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Pomoan
 */
export const PomoanCode = {
  /**
   * Kashaya
   */
  Kashaya: "x-KJU",

  /**
   * Northeastern Pomo
   */
  NortheasternPomo: "x-PEF",

  /**
   * Southeastern Pomo
   */
  SoutheasternPomo: "x-PEO",

  /**
   * Southern Pomo
   */
  SouthernPomo: "x-PEQ",

  /**
   * Central Pomo
   */
  CentralPomo: "x-POO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PomoanCode = typeof PomoanCode[keyof typeof PomoanCode];
