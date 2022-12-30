/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianYurok
 */
export const RaceAmericanIndianYurokCode = {
  /**
   * Yurok
   */
  "1732-7": "1732-7",

  /**
   * Coast Yurok
   */
  "1733-5": "1733-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianYurokCode =
  typeof RaceAmericanIndianYurokCode[keyof typeof RaceAmericanIndianYurokCode];
